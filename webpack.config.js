const path = require('path');
const Dotenv = require('dotenv-webpack');

module.exports = {
  entry: './assets/js/inputJS/index.js',
  output: {
    filename: 'services.js',
    path: path.resolve(__dirname, './assets/js'),
  },
  plugins: [new Dotenv()],
};
