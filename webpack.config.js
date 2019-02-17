const { ProgressPlugin } = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpackMerge = require('webpack-merge');

const loadConfig = env => require(`./environments/webpack.${env}.js`)(env);

module.exports = ( { mode, presets } = { mode: "production", presets: [] } ) => 
    webpackMerge(
        {
            mode,
            plugins: [
                new ProgressPlugin(),
                new HtmlWebpackPlugin({ template: './src/index.html' })
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
                    }
                ]
            }
        },
        loadConfig(mode)
    );