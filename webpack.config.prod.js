const path = require("path");
const merge = require("webpack-merge");
const config = require("./webpack.config.js")
const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
module.exports = merge(config, {
    mode: "production",
    output: {
        filename: "main.[contentHash].js",
        path: path.resolve(__dirname, "dist")
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "[name].[contentHash].[css]"
        }),
        new CleanWebpackPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                ]            
            }
        ]
    }
}); 