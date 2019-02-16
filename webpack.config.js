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
            ]
        },
        loadConfig(mode)
    );