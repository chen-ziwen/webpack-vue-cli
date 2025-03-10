const { VueLoaderPlugin } = require('vue-loader');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require('path');

module.exports = {
    entry: path.resolve(__dirname, "../src/main.ts"),
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: '[name].[contenthash].js', // contenthash 可以生产哈希值名称 避免浏览器缓存导致不更新
        clean: true
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: "vue-loader"
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                use: {
                    loader: 'ts-loader',
                    options: {
                        appendTsSuffixTo: [/\.vue$/],
                        transpileOnly: true
                    }
                },
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                type: 'asset/resource'
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            template: './index.html',
            filename: 'index.html',
            title: "搭建 vue 开发环境"
        })
    ],
    resolve: {
        extensions: [".js", ".jsx", ".ts", ".tsx", ".json", ".vue",],
        alias: {
            "@": path.resolve(__dirname, '../src')
        }
    }
}