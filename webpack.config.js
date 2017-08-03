var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var autoprefixer = require('autoprefixer');
module.exports = {
    entry: ['./index.js'],
    output: {
        path: __dirname + '/',
        filename: 'index.js'
    },
    plugins: [
        new ExtractTextPlugin('styles.css'),
        new webpack.optimize.ModuleConcatenationPlugin(),
        new webpack.optimize.UglifyJsPlugin({
            mangle: {
                except: ['$super', '$', 'exports', 'require', 'module', '_']
            },
            compress: {
                warnings: false
            },
            output: {
                comments: false,
            }
        }),
        new webpack.LoaderOptionsPlugin({
            options: {
                postcss: function () {
                    return [
                        require('autoprefixer')({
                            broswers: ['last 5 versions']
                        })
                    ];
                }
            }
        }),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        })],

    resolve: {
        extensions: ['.js', '.jsx', '.less', '.scss', '.css'],
        modules: [
            path.resolve(__dirname, 'node_modules'),
            path.join(__dirname, './src')
        ]
    },
    devtool: false,
    module: {
        rules: [
            {
                test: /\.(es6|jsx|js)$/,
                exclude: [/node_modules/],
                loader: 'babel-loader'
            }, {
                test: /\.scss|.css/,
                exclude: /node_modules/,
                use: ExtractTextPlugin.extract({
                    use: [{
                        loader: 'css-loader',
                        options:{
                            minimize: true //css压缩
                        }
                    }, "postcss-loader","sass-loader"]
                })
            }, {
                test: /\.(png|jpg|gif|md)$/,
                use: ['file-loader?limit=10000&name=[md5:hash:base64:10].[ext]']
            }, {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                use: ['url-loader?limit=10000&mimetype=images/svg+xml']
            }, {
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                include: [
                    path.join(__dirname, 'src'),
                ],
                loader: "url-loader?limit=10000&mimetype=application/font-woff"
            }, {
                test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                include: [
                    path.join(__dirname, 'src'),
                ],
                loader: "file-loader"
            }
        ]
    }
};

//./node_modules/.bin/rimraf lib
//./node_modules/.bin/babel src --copy-files --source-maps --extensions .es6,.es,.jsx --out-dir lib
