import webpack from 'webpack';
import { BuildMode } from './types/config';
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

export default function buildLoaders(mode: BuildMode): webpack.RuleSetRule[] {
  return [
    {
      test: /\.tsx?$/,
      loader: 'ts-loader',
      options: {
        appendTsSuffixTo: [/\.vue$/],
      },
      exclude: /node_modules/,
    },
    {
      test: /\.vue$/,
      use: 'vue-loader',
    },
    {
      test: /\.css$/i,
      use: ['vue-style-loader', 'css-loader'],
    },
    {
      test: /\.(png|svg|jpg|gif|woff(2)?|eot|ttf|otf)$/,
      type: 'asset/resource',
    },
    {
      test: /\.s[ac]ss$/i,
      use: [
        mode === 'development' ? 'style-loader' : MiniCssExtractPlugin.loader,
        'css-loader',
        'sass-loader',
      ],
    },
  ];
}
