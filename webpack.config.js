const path = require('path')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin
const webpack = require('webpack')

module.exports = {
  entry: path.join(__dirname, 'src/index.ts'),
  output: {
    filename: 'dist/index.js',
    path: __dirname,
    // devtoolNamespace: 'Parallax',
    libraryTarget: 'var',
    // `library` determines the name of the global variable
    library: 'Parallax'
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new BundleAnalyzerPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"production"'
    })
  ],
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  watch: true
}
