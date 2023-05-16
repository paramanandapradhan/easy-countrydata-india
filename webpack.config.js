const path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/index.ts',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: 'umd',  // This allows your library to be used in various environments
    globalObject: 'this',  // This is needed to make the UMD build work in Node.js
    library: 'EasyCountryDataIndia',  // This is the name of the global variable when used in browsers
    umdNamedDefine: true  // This will name the AMD module of the UMD build
  },
};