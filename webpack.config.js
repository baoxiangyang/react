/**
 * Created by wanli on 16/8/4.
 */
var path = require('path');
var webpack = require('webpack');
var hotMiddlewareScript = 'webpack-hot-middleware/client?reload=true';
//postcss-loader 插件自动补全css3
module.exports = {
  entry: {
    myCounter:[path.resolve(__dirname,"./public/javascripts/myCounter/main.js"), hotMiddlewareScript],
    counter: [path.resolve(__dirname,"./public/javascripts/counter/index.js"), hotMiddlewareScript],
    test: [path.resolve(__dirname,"./public/javascripts/test/index.js"), hotMiddlewareScript],
    weui: [path.resolve(__dirname,"./public/javascripts/weui/index.js"), hotMiddlewareScript]
  },
  output: {
    path: path.resolve(__dirname, "./disk/js/"),
    filename: '[name].js',
    publicPath: 'http://127.0.0.1:3000/disk'
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({ //配置打包环境
        'process.env': {
            NODE_ENV: '"production"'
        }
    })
  ],
  resolve: {
    extensions: ['', '.js', '.json', '.less','.css', '.jsx']
  },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: '/node_modules/',
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /.css?$/,
        loader: 'style!css!postcss-loader'
      },
      {
        test: /.less?$/,
        loader: 'style!css!less!'
      },
      {
        test: /\.png$|\.jpg$|\.gif$|\.ico$/,
        loader: "file?name=/public/**/images/[name].[ext]?[hash]"
      }
    ]
  },
};