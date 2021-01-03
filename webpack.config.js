const path = require("path");
const { webpack } = require("webpack");

module.exports = {
    entry: path.resolve(__dirname, "src/main.js"),
    output: {
        filename: "main.bundle.js",
        path: path.resolve(__dirname, "dist")
    },
    devtool: "source-map",
    devServer: {
        contentBase: path.resolve(__dirname, "public")
    },
    module: {
        rules: [
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            outputPath: "assets/images/",
                            publicPath: ""
                        }
                    }
                ]
            }
        ]
    }
}