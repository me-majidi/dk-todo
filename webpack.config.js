const { ProgressPlugin } = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpackMerge = require('webpack-merge');
const ManifestPlugin = require('webpack-manifest-plugin');
const generateManifest = require('./src/manifest');
const ServiceWorkerWebpackPlugin = require('serviceworker-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin'); //installed via npm
const path = require('path');


const loadConfig = env => require(`./environments/webpack.${env}.js`)(env);

module.exports = ( { mode, presets } = { mode: "production", presets: [] } ) => 
    webpackMerge(
        {
            mode,
            entry: [ "./src/index.js", "@babel/polyfill" ],
            plugins: [
                new ProgressPlugin(),
                new HtmlWebpackPlugin({ template: './src/index.html' }),
                new ManifestPlugin({ generate: generateManifest }),
                new ServiceWorkerWebpackPlugin({
                    entry: path.join(__dirname, 'src/sw.js'),
                    publicPath: '.'
                }),
                new CleanWebpackPlugin('dist')
            ],
            module: {
                rules: [
                    {
                        test: /\.js$/,
                        exclude: /node_modules/,
                        loader: 'babel-loader'
                    },
                    {
                        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                        use: [{
                            loader: 'file-loader',
                            options: {
                                name: '[name].[ext]',
                                outputPath: 'fonts/'
                            }
                        }]
                    },
                    {
                        test: /\mobile.styles.css$/,
                        use: [{
                            loader: 'file-loader',
                            options: {
                                name: '[name].[ext]',
                                outputPath: '.'
                            }
                        }]
                    },
                    {
                        test: /.(png|ico)$/,
                        use: [{
                            loader: 'file-loader',
                            options: {
                                name: '[name].[ext]',
                                outputPath: '.'
                            }
                        }]
                    }
                ]
            }
        },
        loadConfig(mode)
    );