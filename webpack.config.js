var path = require('path')
module.exports = {
  mode: 'developent',
  entry: path.resolve(__dirname,'./.umirc.js'),
  output:{
    path:path.resolve(__dirname,'dist'),
    filename: 'bundle.js' 
  },
  resolve: {
    alias: {
      '@': require('path').resolve(__dirname, 'src'),
    },
  },
  devServer: {
    open: true,
    host: 'localhost',
    contentBase: 'src',
    proxy: {
      '/api': {
        target: 'http://49.235.111.141:3001/api',
        changeOrigin: true,
        pathRewrite: { '^/api': '' },
        secure: false, 
      }
    },
  },
  module: { 
    rules: [ 
        // 匹配以.css结尾的文件
        { test: /\.css$/, use: ['style-loader', 'css-loader'] },//处理css文件的规则
        { test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ },//babel 的 loader规则
    ]
},
};
