const path = require('path')

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
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  watch: true
}
