import path from 'path';
import webpack from 'webpack';
import merge from 'webpack-merge';
import webpackBaseConfig from './webpack.config.base.js';

process.env.NODE_ENV = 'production';

export default merge(webpackBaseConfig, {
    entry: {
        main: './src/index.js'
    },
    output: {
        path: path.resolve(__dirname, './dist/js'),
        publicPath: '/dist/',
        filename: 'fezui.min.js',
        library: 'fezui',
        libraryTarget: 'umd',
        umdNamedDefine: true
    },
    externals: {
        vue: {
            root: 'Vue',
            commonjs: 'vue',
            commonjs2: 'vue',
            amd: 'vue'
        }
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': '"production"'
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    ]
});
