var webpack = require('webpack')
var merge = require('webpack-merge')
var baseWebpackConfig = require('./package.config')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var extractScss = new ExtractTextPlugin('/style/xmui.min.css')

module.exports = merge(baseWebpackConfig, {
    output: {
        filename: '[name].min.js'
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
                NODE_ENV: '"production"'
            }
        }),
        //new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({
            uglifyOptions: {
                ie8: false,
                output: {
                    comments: false,
                    beautify: false,
                },
                mangle: {
                    keep_fnames: true
                },
                compress: {
                    warnings: false,
                    drop_console: true
                }
            }
        }),
        extractScss
    ]
})