import path from 'path';
import webpack, { Configuration } from 'webpack';
import 'webpack-dev-server';

const config: Configuration = {
  mode: 'development',

  context: path.join(__dirname, 'src'),
  entry: './index.tsx',

  output: {
    path: path.join(__dirname, 'static/client'),
    filename: 'bundle.js',
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
      },
    ],
  },

  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },

  devtool: 'inline-source-map',
};

export default config;
