import { defineConfig } from 'tsup'
import { resolve } from 'path'

export default defineConfig({
  entry: ['src/index.tsx'],
  format: ['cjs', 'esm'],
  dts: true,
  external: ['react', 'react-dom', 'react-day-picker'],
  clean: true,
  treeshake: true
})