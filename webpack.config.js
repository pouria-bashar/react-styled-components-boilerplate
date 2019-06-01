const webpack = require('webpack');
const path = require('path');
const HWP = require('html-webpack-plugin');

module.exports = (env) => {
  return {
    entry: [
      'babel-polyfill',
      'react-hot-loader/patch',
      'webpack-dev-server/client?http://localhost:4000',
      'webpack/hot/only-dev-server',
      './index.js',
    ],
    devtool: 'source-map',
    devServer: {
      host: 'localhost',
      port: 4000,
      open: true,
      historyApiFallback: true,
      hot: true,
      stats: 'errors-only',
    },
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          use: ['babel-loader'],
          exclude: /node_modules/,
        },
        {
          test: /\.css$/,
          loader: 'style-loader',
        },
        {
          test: /\.css$/,
          loader: 'css-loader',
          query: {
            modules: true,
            localIdentName: '[name]__[local]___[hash:base64:5]',
          },
        },
        {
          test: /\.(ttf|woff|woff2|eot|png|svg|gif)$/,
          use: {
          loader: 'url-loader',
          options: {
                limit: 10000,
            },
          },
        },
      ],
    },
    resolve: {
      alias: {
        '@components': path.resolve(__dirname, 'src/components/'),
      },
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new HWP({ template: path.join(__dirname, 'index.html') }),
      new webpack.DefinePlugin({
        'process.env': {
          TARGET_ENV: JSON.stringify(env.TARGET_ENV),
        },
      }),
    ],
  };
};
