const path = require("path")

module.exports = {
    mode: "production",
    entry: {
        index: { import: "./index.js" }
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx|ts|tsx)$/,
                exclude: /node_modules/,
                loader: "babel-loader",
                options: { presets: ['@babel/env','@babel/preset-react'] }
            },
        ],
    },
    output: {
        filename: "components.bundle.min.js",
        library: 'fstrComponents',
        libraryTarget: 'umd',
        clean: true
    },
}