Debugging Webpack unspecified errors
============
The repository for the [This will make you more efficient at debugging Wepback unspecified build errors](https://indepth.dev/this-will-make-you-more-efficient-at-debugging-webpack-unspecified-build-errors/) article

Building the app
---------------

```
npm i
npm run build
```

Generating the error
---------------

Change the path supplied for the `HelloWorldCheckerPlugin` in the `webpack.config.js` to generate an error:
```
plugins: [
    new HelloWorldCheckerPlugin({path: 'toinspect.txt'})
]
```

Debugging the webpack
---------------

```
npm run debug
```
