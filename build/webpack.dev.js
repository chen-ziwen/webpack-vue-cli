const path = require('path');
// 引入 webpack-merge 
const { merge } = require('webpack-merge');
// 引入公共配置
const common = require("./webpack.common");

module.exports = merge(common, {
    mode: "development",
    // devtool有很多关键字 inline-source-map 主要用于帮助开发者调式代码。
    // 它可以将打包后的代码映射为原始源代码，从而能在浏览器开发者工具中查看和调试源代码。
    // 所以这个关键字最好不要出现在生产环境，一方面是源码会比较大，一方面就是会不安全。
    devtool: "inline-source-map",
    module: {
        rules: [
            // loader执行顺序，从右往左，从下往上
            // vue-style-loader将 css 和 sass 注入到js
            {
                test: /\.css$/,
                use: ['vue-style-loader', 'css-loader'],
            },
            {
                test: /\.scss$/,
                use: [
                    'vue-style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
        ]
    },
    devServer: {
        static: {
            directory: path.resolve(__dirname, "../dist")
        },
        hot: true,
        port: 8080,
        open: true,
        // 对页面进行重定向 避免页面刷新丢失
        historyApiFallback: {
            index: '/index.html',  // 默认情况下会重定向到 /index.html
            // 可以根据路径前缀进行重定向
            rewrites: [
                { from: /^\/other/, to: '/other.html' },
            ],
        }
    }
})