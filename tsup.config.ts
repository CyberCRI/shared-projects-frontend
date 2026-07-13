// tsup.config.ts
import { defineConfig } from "tsup";

export default defineConfig({
  entry: [
    "src/index.ts",
    "src/apis/index.ts",
    "src/interfaces/index.ts",
    "src/lib/index.ts",
    "src/models/index.ts",
  ],
  external: [
    '@tiptap/core',
    '@tiptap/pm',
    '@tiptap/starter-kit',
    /^@tiptap\/extension-/,
    'yjs',
    'y-prosemirror',
  ],
  format: ["esm"],
  sourcemap: true,
  clean: true,
  dts: true,
});