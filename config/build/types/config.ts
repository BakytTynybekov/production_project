export type buildMode = "production" | "development";
export interface buildPaths {
  entry: string;
  build: string;
  html: string;
}

export interface buildEnd {
  mode: buildMode;
  port: number;
}

export interface buildOptions {
  mode: buildMode;
  path: buildPaths;
  isDev: boolean;
  port: number;
}
