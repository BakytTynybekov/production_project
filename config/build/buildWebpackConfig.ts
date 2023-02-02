import path from "path";
import webpack from "webpack";
import { buildDevServer } from "./buildDevServer";
import { buildLoaders } from "./buildLoaders";
import { buildPlugins } from "./buildPlugins";
import { buildResolvers } from "./buildResolvers";
import { buildOptions } from "./types/config";

export function buildWebpackConfig(
  options: buildOptions
): webpack.Configuration {
  const { mode, path, isDev } = options;
  return {
    mode: mode,
    entry: path.entry,
    output: {
      filename: "[name].[contenthash].js",
      path: path.build,
      clean: true,
    },
    plugins: buildPlugins(path.html),
    module: {
      rules: buildLoaders(options),
    },
    resolve: buildResolvers(),
    devtool: isDev ? "inline-source-map" : undefined,
    devServer: isDev ? buildDevServer(options) : undefined,
  };
}
