import { defineConfig } from "tsup";
import { readFile, writeFile } from "node:fs/promises";
import { join } from "node:path";

const USE_CLIENT = '"use client";\n';

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["esm", "cjs"],
  dts: true,
  sourcemap: true,
  clean: true,
  treeshake: true,
  external: ["react", "react-dom"],
  async onSuccess() {
    const outDir = "dist";
    for (const file of ["index.js", "index.cjs"]) {
      const path = join(outDir, file);
      const src = await readFile(path, "utf8");
      if (!src.startsWith('"use client"')) {
        await writeFile(path, USE_CLIENT + src);
      }
    }
  },
});
