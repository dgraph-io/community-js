import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import resolve from 'rollup-plugin-node-resolve'
import scss from 'rollup-plugin-scss'
import pkg from './package.json'

const plugins = [
  babel(),
  commonjs(),
  resolve(),
  scss(),
]

export default [
  // For browser
  {
    input: 'src/index.js',
    output: {
      name: 'community',
      file: pkg.browser,
      format: 'umd'
    },
    plugins,
  },
  // For modern frontend and Node
  {
    input: 'src/index.js',
    output: [
      { file: pkg.main, format: 'cjs' },
      { file: pkg.module, format: 'es' }
    ],
    plugins,
    external: [/* external deps array */]
  }
]
