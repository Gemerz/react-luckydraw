var ExtractTextPlugin = require('extract-text-webpack-plugin');
var paths = require('./paths');

module.exports = {
    entry: [
        require.resolve('./polyfills'),
        paths.appComponentIndexJs
    ],

    output: {
        path: './dist/',
        filename: 'reactLuckyDraw.js'
    },

    resolve: {
        fallback: paths.nodePaths,
        extensions: ['.js', '.json', '.jsx', '.styl', ''],
        alias: {
            'react-native': 'react-native-web'
        }
    },

    module: {
        preLoaders: [
            {
                test: /\.(js|jsx)$/,
                loader: 'eslint',
                include: paths.appSrc
            }
        ],
        loaders: [
            {
                exclude: [
                    /\.html$/,
                    /\.(js|jsx)$/,
                    /\.css$/,
                    /\.styl$/,
                    /\.json$/,
                    /\.svg$/
                ],
                loader: 'url',
                query: {
                    limit: 10000,
                    name: 'static/media/[name].[hash:8].[ext]'
                }
            },
            // Process JS with Babel.
            {
                test: /\.(js|jsx)$/,
                include: paths.appSrc,
                loader: 'babel',

            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('style', 'css?importLoaders=1!postcss')
                // Note: this won't work without `new ExtractTextPlugin()` in `plugins`.
            },

            {
                test: /\.styl$/,
                include: paths.appSrc,
                loader: 'style-loader!css-loader!stylus-loader'
            },
            // JSON is not enabled by default in Webpack but both Node and Browserify
            // allow it implicitly so we also enable it.
            {
                test: /\.json$/,
                loader: 'json'
            },
            // "file" loader for svg
            {
                test: /\.svg$/,
                loader: 'file',
                query: {
                    name: 'static/media/[name].[hash:8].[ext]'
                }
            }
        ]
    },

    // We use PostCSS for autoprefixing only.
    postcss: function () {
        return [
            autoprefixer({
                browsers: [
                    '>1%',
                    'last 4 versions',
                    'Firefox ESR',
                    'not ie < 9', // React doesn't support IE8 anyway
                ]
            }),
        ];
    },
    plugins: [
        new ExtractTextPlugin('app.css')
    ]
};