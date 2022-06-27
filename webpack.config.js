const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const resolvePath = (_path) => {
  return path.resolve(__dirname, _path)
}
const resolveHtmlPath = (_path) => path.resolve(__dirname, _path)

module.exports = {
  // 模式
  mode: 'development',
  // 入口 入口可以有多个
  entry: './src/index.js',
  // 出口 只能有一个 并且必须保证是绝对路径
  output: {
    filename: 'main.js',
    path: resolvePath('dist'),
    // 每次打包清除上一次的打包结果
    // clean: true,
  },

  module: {
    // 模块规则
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.less$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'less-loader'],
      },
      {
        test: /\.s[ac]ss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(jpe?g|png|gif|webp|svg)$/,
        type: 'asset',
        generator: {
          filename: 'assets/img/[hash:10][ext]',
        },
      },

      // 使用babel 处理es6以及新语法
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },

  // 插件
  plugins: [
    new HtmlWebpackPlugin({
      template: resolveHtmlPath('./src/index.html'),
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].css',
    }),
  ],

  devServer: {
    // 加入下面这段告知 webpack-dev-server，将 './' 目录下的文件 serve 到 localhost:8080 下(寄存到服务器下)  static: "./"
    static: './',
    host: 'localhost',
    port: 8080,
    open: true,
    hot: true,
  },
}
