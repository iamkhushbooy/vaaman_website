import type { NextConfig } from "next";
import path from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = path.dirname(fileURLToPath(import.meta.url));

const nextConfig: NextConfig = {
  /* Pin app root when multiple lockfiles exist (e.g. parent + site) so tooling scans this project */
  turbopack: {
    root: projectRoot,
  },
};

export default nextConfig;
