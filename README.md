cordova-typescript-seed
=======================

[![Build status](https://ci.appveyor.com/api/projects/status/1hhirxcajfd7rupa?svg=true)](https://ci.appveyor.com/project/ridomin/cordova-typescript-seed)

You can get a Visual Studio VSIX template from [The VSIXGallery](http://vsixgallery.com/extension/cordova-typescript-template.RidoMin.67ce102a-cf7b-46e5-8367-9e2a3aa15b13/)

Seed project to start working with cordova projects and TypeScript. It tries to solve the next problems:

* How to use TypeScript Modules. This template uses the `system` module system, and `SystemJS` as a loader. Modules are used to show how to divide features in classes(components)
* How to use typings for cordova plugins. The template is using `tsd`, and will be updates to `@types` when available
* Validate your code with TSLint. All default rules, but semicolons are optional
* Work with Visual Studio and Visual Studio Code.

## Setup Instructions
>you will need node/npm (npm > 3.x recommended)

Install npm dependencies (SystemJS, Typescript, TSLint and TSD) running:

```
npm install
```
There is a npm postinstall script that will install typings, and will copy the system.js to `www/lib` folder. 
Now you should have a folder called typings, and `system.js` in `www/libs`

## Transpilation
This project uses Visual Studio TypeScript integration, to configure debug/release build with/without debugging support (using sourceMaps) there is tsbuild.props that configure that experience. Note that you will need to `clean` if you want to remove your sourceMaps.

To compile the TypeScript code from `app` to  `www/scripts` using the command line you will need to execute `tsc`. 
There is an npm run script to run tsc locally: `npm run tsc`

As part of the compilation you can use tslint for code completness.
```
npm run tslint && npm run tsc
```


### Known Issues

Deuggin in Appx is not working
