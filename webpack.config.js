const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: "js/[name].bundle.[contenthash:6].js",
    path: path.resolve(__dirname, 'dist')
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    hot: true,
    port: 9001
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
        template: './index.html',  // 以咱们本地的index.html文件为基础模板
        filename: "index.html",  // 输出到dist目录下的文件名称
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: "css-loader",
            options: {
              modules: {
                mode: "local",
                localIdentName: "[name]-[local]-[hash:base64:5]",
              }
            }
          },
          {
            loader: 'px2rem-loader',
            options: {
              remUnit: 75,
              remPrecision: 8
            }
          },
        ]
      },
      {
        test: /\.(png|svg|jpg|gif|eot|svg|ttf|woff|woff2)$/,
        use: [
          'file-loader'
        ]
      },
      {
        test:  /\.(js|jsx)$/,               //babel-loader将其他文件解析为js文件
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          presets: ["es2015","react"],  //babel-loader需要解析的文件
          plugins:[
            [
              "import",
              {
                "libraryName":"antd-mobile",
                "style":"css"
              }
            ]
          ]
        }
      },
      
    ]
  }
};


/* 
  分享15个Webpack实用的插件！！！
  https://juejin.cn/post/6944940506862485511
*/