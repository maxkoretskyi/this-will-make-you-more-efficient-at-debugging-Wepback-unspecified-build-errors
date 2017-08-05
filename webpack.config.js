const HelloWorldCheckerPlugin = require('./plugin').HelloWorldCheckerPlugin;
const path = require('path');

module.exports = {
    entry: "./main",
    output: {
        path: __dirname + "/dist",
        filename: "bundle.js"
    },
    plugins: [
        new HelloWorldCheckerPlugin({path: path.resolve(__dirname, 'toinspect.txt')})
    ]
};