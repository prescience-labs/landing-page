const path = require('path');
const Dotenv = require('dotenv-webpack');

module.exports = {
  entry: './assets/js/inputJS/review-service.js',
  output: {
    filename: 'review-service.js',
    path: path.resolve(__dirname, './assets/js'),
  },
  plugins: [
    new Dotenv()
  ]
};
