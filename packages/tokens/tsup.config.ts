import { defineConfig } from "tsup";
import { copyFile } from "node:fs/promises";
import { join } from "node:path";

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["esm", "cjs"],
  dts: true,
  sourcemap: true,
  clean: true,
  async onSuccess() {
    // tokens.css ships alongside the JS — exposed via exports["./tokens.css"]
    await copyFile(
      join("src", "tokens.css"),
      join("dist", "tokens.css"),
    );
  },
});
