var path = require('path');
var webpack = require('webpack');
var args = require('node-args');

var config = {
    entry: {
        build: './View/index.js'
    },
    output: {
        path: path.join(__dirname, '/Lib'),
        publicPath: '/Lib/',
        filename: '[name].js'
    },

    plugins: [
        // new webpack.optimize.CommonsChunkPlugin('antd', 'antd.js')
    ],
    devServer: {
        hot: true,
        inline: true,
        proxy: {
            '/webapi/*': {
                target: 'http://beta.supplyweb.70.test.yunshanmeicai.com:8012',
                secure: true
            }
        },
        historyApiFallback: true,
        progress: true,
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: "babel?presets[]=react,presets[]=es2015"
        }, {
            test: /\.jsx$/,
            exclude: /node_modules/,
            loader: "babel-loader"
        }, {
            test: /\.less$/,
            exclude: /node_modules/,
            loader: "style-loader!css-loader!less-loader"
        }, {
            test: /\.css$/,
            exclude: /node_modules/,
            loader: "style-loader!css-loader"
        }, {
            test: /\.png$/,
            exclude: /node_modules/,
            loader: "url-loader"
        }, {
            test: /\.json$/,
            loader: "json-loader"
        }, {
            test: /\.(eot|woff|woff2|ttf|svg)$/,
            loader: "file-loader"
        }, {
            test: /\.md$/,
            loader: 'bisheng/lib/loaders/markdown-loader'
        }, {
            test: /bisheng\.data$/,
            //test(filename) {
            //  if(filename.indexOf('data') >=0) console.log(filename);
            //  return filename === 'bisheng.data';
            //},
            loader: `bisheng/lib/loaders/bisheng-data-loader?config=${__dirname}/bisheng.config.js`,

        }]
    },
}

// {
//                test   : /\.woff|\.woff2|\.svg|.eot|\.ttf/,
//                loader : 'url?prefix=font/&limit=10000'
//             }

if (args.minify) {
    config.plugins = [
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: true
            }
        }),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': '"production"' //production
        }),
        new webpack.HotModuleReplacementPlugin(),
        // new webpack.optimize.CommonsChunkPlugin('antd', 'antd.js')
    ];
}
module.exports = config;