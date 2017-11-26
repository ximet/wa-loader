const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: [
        './index.js',
    ],
    devtool: 'soource-map',
    resolveLoader: {
        alias: {
          'webassembly-loader': path.join(__dirname, '../index.js'),
        },
    },
    module: {
		rules: [
            {
                test: /\.wasm$/,
                loaders: ['webassembly-loader']
            }
        ]
    },
    
    output: {
        path: path.join(__dirname, ''),
        filename: 'bundle.js'
    }
}