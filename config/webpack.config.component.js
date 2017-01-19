var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: {
        homepage: './src/compass/',
    },

    output: {
        path: './dist/',
        filename: 'app.js'
    },

    // Resolve the `./src` directory so we can avoid writing
    // ../../styles/base.css
    resolve: {
        modulesDirectories: ['node_modules', './src'],
        extensions: ['', '.js', '.jsx']
    },

    // Instruct webpack how to handle each file type that it might encounter
    module: {
        loaders:[
            { test: /\.js[x]?$/, exclude: /node_modules/, loader: 'babel-loader' },
            { test: /\.css$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader') },
            { test: /\.(png|jpg)$/, loader: 'file-loader?name=images/[name].[ext]' },
            { test: /\.woff$/, loader: 'file-loader?name=fonts/[name].[ext]' }
        ]
    },

    // This plugin moves all the CSS into a separate stylesheet
    plugins: [
        new ExtractTextPlugin('app.css')
    ]
};