var webpack = require('webpack');
var config = require('../config/webpack.config.component');

webpack(config).run((err, stats) => {
    console.log(stats)
})