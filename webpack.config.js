const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
//const CopyPlugin = require ('copy-webpack-plugin');
const {CleanWebpackPlugin}  = require('clean-webpack-plugin'); 
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ESLintPlugin = require( 'eslint-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    assetModuleFilename: 'assets/[hash][ext]'
  },
  module:{
      rules: [
    {
        test: /\.(?:jpg|png|ico)$/i,
        type: 'asset/resource',
    },

    {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },


      {
        test : /\.(sa|sc|c)ss$/i,
        use : [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
    }


      ]
  },
  plugins:[
      new HtmlWebpackPlugin( { title : "Virtual keyboard" } ),
      new MiniCssExtractPlugin( { filename : 'styles.css' } ),
      new CleanWebpackPlugin( { cleanStaleWebpackAssets : false,
        cleanOnceBeforeBuildPatterns: [
          '**/*',
          '!.git',
        ], } ),
      new ESLintPlugin( { extensions : ['js'] } ),
  ],
};