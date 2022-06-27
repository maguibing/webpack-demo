const path = require('path')

const resolvePath = (_path) => {
  return path.resolve(__dirname, _path)
}

module.exports = {
  // 模式
  mode: 'development',
  // 入口文件 入口可以有多个
  entry: './src/index.js',
  // 出口 出口只能有一个 并且必须保证是绝对路径
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
        // css 文件
        test: /\.css$/,
        // 处理css 使用的 loader(加载器)
        use: ['style-loader', 'css-loader'],
      },
      {
        // less 文件
        test: /\.less$/,
        // 处理css 使用的 loader(加载器)
        use: ['style-loader', 'css-loader', 'less-loader'],
      },
      {
        // scss 文件
        test: /\.s[ac]ss$/,
        // 处理css 使用的 loader(加载器)
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        // 图片 文件
        test: /\.(jpe?g|png|gif|webp|svg)$/,
        type: 'asset',
        generator: {
          filename: 'assets/img/[hash:10][ext]',
        },
      },
      // 使用babel 处理js 以及新语法
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
}
