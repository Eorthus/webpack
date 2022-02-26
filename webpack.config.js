const { resolve } = require('path');
//const SRC = path.resolve(__dirname, 'node_modules');
const HtmlPlugin = require('html-webpack-plugin');
const MiniCssPlugin = require('mini-css-extract-plugin');
const BundleAnalyzer = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

module.exports = {                  // 1
    entry: './src/index.js',
    mode: "development",  // 2
    output: {
        path: resolve(__dirname, 'build'), // 2
        filename: 'main.[contenthash].js'  // 3
    },
    module: {
        rules: [
            {
                test: /\.mp3$/,
                loader: 'file-loader',

                options: {
                    name: '[path][name].[ext]'
                }
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [{
                    loader: "file-loader",
                }],
                options: {
                    name: '[path][name].[ext]'
                }
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.s[ac]ss$/i,
                use: [MiniCssPlugin.loader, 'css-loader', 'sass-loader']
            }

        ]
    },
    plugins: [
        new MiniCssPlugin({
            filename: '[name].[contenthash].css'
        }),
        new HtmlPlugin({
            template: resolve(__dirname, './src/index.html')
        }),
        new BundleAnalyzer()
    ],
    devServer: {
        port: 5000
    }

};