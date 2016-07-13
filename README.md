cordova-typescript-seed
=======================

[![Build status](https://ci.appveyor.com/api/projects/status/1hhirxcajfd7rupa?svg=true)](https://ci.appveyor.com/project/ridomin/cordova-typescript-seed)

You can get a Visual Studio VSIX template from the [Visual Studio Extension Gallery](https://visualstudiogallery.msdn.microsoft.com/ba611c49-716e-47c5-a724-efc9f072ff4c) 

or try with beta versions in [the OpenVSIXGallery](http://vsixgallery.com/extension/cordova-typescript-template.RidoMin.67ce102a-cf7b-46e5-8367-9e2a3aa15b13/)

Seed project to start working with cordova projects and TypeScript. It tries to solve the next problems:

* How to use TypeScript Modules. This template uses the `system` module system, and `SystemJS` as a loader.
* How to use typings for cordova plugins. The template is using `tsd`, and will be updates to `@types` when available
* Validate your code with TSLint. All default rules, but semicolons are optional
* Work with Visual Studio and Visual Studio Code.

## Setup Instructions

### Visual Studio

Install the [VSIX Template](https://visualstudiogallery.msdn.microsoft.com/ba611c49-716e-47c5-a724-efc9f072ff4c)

Once Npm Dependencies have been restored hit `F5`

### CLI users

>you will need node/npm (npm > 3.x recommended)

You can create your cordova app cloning this repo or using the create from template command:

```
cordova create MyTSApp io.cordova.mytsapp --template https://github.com/ridomin/cordova-typescript-seed
```

Install npm dependencies (SystemJS, Typescript, TSLint and TSD) running:

```
npm install
```
There is an npm postinstall script that will install typings, and will copy the system.js to `www/lib` folder. 
Now you should have a folder called typings, and `system.js` in `www/libs`

### Transpilation

Visual Studio will use the [tsbuild.props](https://github.com/ridomin/cordova-typescript-seed/blob/master/tsbuild.props)
file to configure Debug builds with SourceMaps.

To compile the TypeScript code from `app` to  `www/scripts` you will need to execute `tsc`. There is an npm run script to run tsc locally:
>As part of the compilation you can use tsling for code completness.
```
npm run tslint && npm run tsc
```

>Note: To generate sourcemaps from the command line, you should edit  `tsconfig.json`

### Known Issues

Deuggin in Appx is not working
