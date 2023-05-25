import miniCssExtractPlugin from 'mini-css-extract-plugin';
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
      test: /\.s[ac]ss$/i,
      use: [
        // Creates `style` nodes from JS strings
        mode === 'development' ? 'style-loader' : MiniCssExtractPlugin.loader,
        // Translates CSS into CommonJS
        'css-loader',
        // Compiles Sass to CSS
        'sass-loader',
      ],
    },
  ];
}
