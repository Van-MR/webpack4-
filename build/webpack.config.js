const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const CleanWebpackPlugin =  require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
// 区分当前环境是 development 还是 production
const devMode = process.env.NODE_ENV === 'development'

module.exports = {
    entry: path.join(__dirname,'..','src/main.js'),
    output:{
      filename:'[name].[hash:5].js',
      path:path.join(__dirname,'..','dist')
    },
    module:{
      rules:[
        {
          test:/\.vue$/,
          use:'vue-loader'
        },
        {
          test:/\.js$/,
          use:'babel-loader',
          exclude:/node_modules/
        },
        {
          test: /\.css$/,
          use: [
            {
              loader: 'css-loader',
              options: {
                sourceMap: true
              }
            },
            {
              loader: 'postcss-loader',
              options: {
                sourceMap: true
              }
            }
          ]
      },
      {
          test:/\.scss$/,
          use:[
            devMode ? 'vue-style-loader' : MiniCssExtractPlugin.loader,
            'css-loader',
            'sass-loader'
          ]
        },
        {
          test:/\.(png|svg|jpe?g)$/,
          loader:'url-loader',
          options:{
            limit:8192
          }
        },
        {
          test:/\.(woff|woff2|eot|ttf|otf)$/,
          use:['file-loader']
        }
      ]
    },
    devServer:{
      host:'0.0.0.0',
      port:7000,
      open:true
    },
    mode:'development',
    plugins:[
        new HtmlWebpackPlugin({
           template: path.join(__dirname,'..','index.html')
        }),
        new MiniCssExtractPlugin({
          filename: '[name].css',
          chunkFilename: '[id].css'
        }),
        new CleanWebpackPlugin(['dist'],{
           root:path.join(__dirname,'../')
        }),
        new VueLoaderPlugin()
    ]
}
