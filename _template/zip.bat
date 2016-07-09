call clean
SET TARGET_ZIP="vsix\ProjectTemplates\TypeScript\Apache Cordova Apps\cordova-typescript-seed.zip"
del %TARGET_ZIP%
7z  a -tzip %TARGET_ZIP% ..\. -xr!.git -xr!.vs -xr!_template -xr!node_modules