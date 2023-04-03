import path from "path";
import { buildWebpackConfig } from "./config/build/buildWebpackConfig";
import { buildEnd, buildPaths } from "./config/build/types/config";

export default (env: buildEnd) => {
  const paths: buildPaths = {
    entry: path.resolve(__dirname, "src", "index.tsx"),
    build: path.resolve(__dirname, "build"),
    html: path.resolve(__dirname, "public", "index.html"),
    src: path.resolve(__dirname, "src"),
  };

  const mode = env.mode || "development";
  const PORT = env.port || 3000;

  const isDev = mode === "development";
  const config = buildWebpackConfig({
    mode,
    path: paths,
    isDev,
    port: PORT,
  });

  return config;
};
