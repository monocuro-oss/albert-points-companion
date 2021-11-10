import path from 'path';
import { Configuration } from 'webpack';
import { merge } from 'webpack-merge';
import 'webpack-dev-server';

import common from './webpack.common';

const config: Configuration = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    port: 3000,
    historyApiFallback: true,
    proxy: {
      '/api': 'http://django:8000',
    },
    static: {
      directory: path.join(__dirname, 'templates/client'),
    },
  },
});

export default config;
