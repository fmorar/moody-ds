import type { NextConfig } from "next";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const here = dirname(fileURLToPath(import.meta.url));
const root = resolve(here, "../..");

const nextConfig: NextConfig = {
  turbopack: {
    root,
    resolveAlias: {
      "@moody-ds/ui": "./packages/ui/src/index.ts",
    },
  },
  experimental: {
    turbopackFileSystemCacheForDev: false,
  },
};

export default nextConfig;
