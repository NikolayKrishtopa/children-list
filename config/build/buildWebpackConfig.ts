import webpack from 'webpack';
import { BuildOptions } from './types/config';
import buildLoaders from './buildLoaders';
import buildPlugins from './buildPlugins';
import buildResolvers from './buildResolvers';
import buildDevServer from './buildDevServer';

export default function buildWebpackConfig(
  options: BuildOptions
): webpack.Configuration {
  const { mode, paths } = options;
  return {
    mode,
    entry: paths.entry,
    output: {
      filename: '[name].js',
      path: paths.build,
      clean: true,
    },
    devtool: mode === 'development' ? 'inline-source-map' : undefined,
    devServer: mode === 'development' ? buildDevServer(options) : undefined,
    module: {
      rules: buildLoaders(mode),
    },
    resolve: buildResolvers(),
    plugins: buildPlugins(paths),
  };
}
