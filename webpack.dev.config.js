const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require("path");
module.exports = {
    mode: 'development',
    entry: "./src/index.js",
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
    },
    devtool: 'inline-source-map',
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Development',
            inject:'head',
        })
    ],
    devServer: {
        port: 8080,
        onListening: function (server) {
            const port = server.listeningApp.address().port;
            console.log('Listening on port:', port);
        },
        historyApiFallback: true,
        publicPath: "/",
        contentBase: '/dist',
    },
    devServer: {
        historyApiFallback: true,
        port:8000,
        onListening: function (server) {
            const port = server.listeningApp.address().port;
            console.log('Listening on port:', port);
        },
        contentBase: '/dist',
        publicPath: '/',
    },
    output: {
        publicPath: "/",
        filename: "main.js",
        path: path.resolve(__dirname, "dist")
    },
    module: {
        rules : [
            {
                test: /\.js$/,
                exclude: (/node_modules/),
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react'],
                    }
                }                
            }

        ]
    }
}