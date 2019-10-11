module.exports = {
  entry: './app.js',
  output: {
    filename: 'bundle.js',
  },
  watch: true,
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};
