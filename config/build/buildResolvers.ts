import webpack from 'webpack';

export default function buildResolvers(): webpack.ResolveOptions {
  return {
    extensions: ['.ts', '.js', '.vue'],
  };
}
