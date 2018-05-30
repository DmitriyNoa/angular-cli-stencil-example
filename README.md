# How to add your stencil components:
- Publish your stencil component as an npm module.
- Install it in your angular cli project with **npm i [component_name]**
- Add main entry file of your component to **scripts** section of angular.json. For example:
```
"scripts": [
    "./node_modules/z-product-card/dist/zlib.js"
]
```
- As stencil loads or dependent files on demand with lazy load we need to make them available in angular cli. For that add all files required files from dist with **glob** in assets section of angular.json. For example:
```
"assets": [
    "src/favicon.ico",
    "src/assets",
    { "glob": "**/*", "input": "./node_modules/z-product-card/dist/zlib", "output": "./zlib" },
    { "glob": "**/*", "input": "./node_modules/z-product-card/dist/collection/assets", "output": "./assets" }
],
```
# Start this demo:
```
$ git clone https://github.com/DmitriyNoa/angular-cli-stencil-example.git
$ cd angular-cli-stencil-example
$ npm i
$ npm start
```