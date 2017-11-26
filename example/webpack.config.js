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
                loaders: 'webassembly-loader',
                options: {
                    'env': {
                      'memoryBase': 0,
                      'tableBase': 0,
                      'memory': new WebAssembly.Memory({initial: 256}),
                      'table': new WebAssembly.Table({initial: 0, element: 'anyfunc'})
                    }
                }
            }
        ]
    },
    
    output: {
        path: path.join(__dirname, ''),
        filename: 'bundle.js'
    }
}