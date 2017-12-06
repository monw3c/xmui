var webpack = require('webpack')
var merge = require('webpack-merge')
var baseWebpackConfig = require('./package.config')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var extractScss = new ExtractTextPlugin('/style/xmui.min.css')

module.exports = merge(baseWebpackConfig, {
    output: {
        filename: '[name].js'
    },
    module: {
        loaders: [{
            test: /\.scss$/i, 
            loader: extractScss.extract(['css-loader','sass-loader'])
        }]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"development"'
            }
        }),
        extractScss
    ]
})