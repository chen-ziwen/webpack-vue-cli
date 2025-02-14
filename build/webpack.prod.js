// 引入 webpack-merge 
const { merge } = require('webpack-merge');
// 引入公共配置
const common = require("./webpack.common");
// 生产环境独立提取 css 文件
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// 自定义压缩
const TerserPlugin = require("terser-webpack-plugin");

module.exports = merge(common, {
    mode: "production",
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            },
            {
                test: /\.scss$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin()
    ],
    optimization: {
        minimizer: [
            new TerserPlugin({
                terserOptions: {
                    // 移除console.log
                    compress: { drop_console: true }
                }
            })
        ],
        splitChunks: { // 对代码进行拆分
            cacheGroups: {
                // 因为外部引进来的包很少去改动，所以对它进行缓存
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: "vendors",
                    chunks: "all"
                }
            }
        }
    },
});