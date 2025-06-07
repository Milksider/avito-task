import type { BuildOptions } from "./types/config";
import type { Configuration as DevServerConfiguration } from "webpack-dev-server";
import path from 'path';

export function buildDevServer(options: BuildOptions): DevServerConfiguration {
  return {
    port: options.port,
    open: false,
    historyApiFallback: true,
    hot: true,
    static: {
      directory: path.join(__dirname, './'),
      serveIndex: true,
    },
    watchFiles: [
      'src/**/*.scss',
    ],
  }
}
