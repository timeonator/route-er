const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require("path");
module.exports = {
    mode: 'development',
    entry: "./src/index.js",
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
    },
    plugins: [
        new HtmlWebpackPlugin({
          title: 'Development',
          inject:'head'   
        }),
    ],
    devServer: {
        historyApiFallback: true,
        port:8000,
        onListening: function (server) {
            const port = server.listeningApp.address().port;
            console.log('Listening on port:', port);
        },
        contentBase: '/dist',
        publicPath: '/',
        openPage: 'about',
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