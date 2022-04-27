const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode : 'development',
    entry : {
        bundle: path.resolve(__dirname, 'src/index.js'),
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
    },
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'dist'),
            watch: true
        }
    },
    devtool: 'inline-source-map',
    module: {
        rules: [
            {

            }
        ],
    },
    plugins: [
        new htmlWebpackPlugin({
            title: 'Weather App',
            filename: 'index.html',
            template: 'src/template.html'
        })
    ],
    optimization: {
        runtimeChunk: 'single',
    },
}