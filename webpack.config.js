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
          loader: 'style-loader!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]&camelCase!postcss-loader',
        },
      ],
    },
    resolve: {
      alias: {
        '@components': path.resolve(__dirname, 'src/components/')
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
