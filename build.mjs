import { build } from 'esbuild'

////////////////////////////////////////////////////////////////

const flags = new Set(process.argv.filter((arg) => arg.startsWith('--')))
const isProd = process.env['APP_ENV'] === 'prod'

// https://esbuild.github.io/api/
const options = {
  legalComments: 'eof',
  drop: isProd ? ['console', 'debugger'] : [],
  minify: flags.has('--minify') || isProd,
  color: true,
  logLevel: 'warning',

  /* Build Options */
  bundle: true,
  outfile: './dist/index.js',
  entryPoints: ['./src/index.ts'],
  watch: flags.has('--watch'),
  platform: 'node',
  target: 'es2018',
  format: 'cjs',
}

build(options).catch(() => process.exit(1))
