const path = require('path')

module.exports = {
  entry: path.resolve(__dirname, 'src', 'zzsper'),
  output: {
    filename: 'zzsper/dist/zzsper.min.js',
    path: path.resolve(__dirname, 'npm'),
    library: 'zzsper',
    libraryTarget: 'umd',
    globalObject: 'this',
    libraryExport: 'zzsper',
    umdNamedDefine: true
  },
  mode: 'production',
  // mode: 'development',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', { bugfixes: true, modules: false }]
            ],
            plugins: [ 
              ['@babel/plugin-transform-runtime', {
                useESModules: true
              }]
            ]
          }
        }
      }
    ]
  },
  devtool: 'source-map'
}