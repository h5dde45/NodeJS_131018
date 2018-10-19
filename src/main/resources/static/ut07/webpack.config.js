
const path = require("path");
const webpack = require("webpack");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const UglifyJSPlugin = require("uglifyjs-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const ImageminPlugin = require("imagemin-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

var isProduction = (process.env.NODE_ENV === "production");


module.exports = {
    context: path.resolve(__dirname, "src"),
    entry: {
        app: [
            "./js/app.js",
            "./scss/style.scss"
        ]
    },
    output: {
        filename: "js/[name].js",
        path: path.resolve(__dirname, "dist"),
        publicPath: "../"
    },
    devServer: {
        contentBase: "./app"
    },

    devtool: (isProduction) ? "" : "inline-source-map",
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    use: [
                        {
                            loader: "css-loader",
                            options: {sourceMap: true}
                        },
                        {
                            loader: "postcss-loader",
                            options: {sourceMap: true}
                        },
                        {
                            loader: "sass-loader",
                            options: {sourceMap: true}
                        }
                    ],
                    fallback: "style-loader"

                })
            },
            {
                test: /\.(png|gif|jpe?g)$/,
                loader: [
                    {
                        loader: "file-loader",
                        options: {
                            name: "[path[name].[ext]"
                        }
                    },
                    "img-loader"
                ]
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin(
            "./css/[name].css"
        )
    ]
}
;

