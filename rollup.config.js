'use strict';

const { babel } = require('@rollup/plugin-babel');
const { nodeResolve } = require('@rollup/plugin-node-resolve');
const { terser } = require('rollup-plugin-terser');
const commonJs = require('@rollup/plugin-commonjs');
const json = require('@rollup/plugin-json');

const config = {
  input: 'src/index.js',
  output: {
    file: 'dist/umd.min.js',
    format: 'umd',
    name: 'gmPlayerFactory',
    globals: {
      tone: 'Tone',
    },
  },
  external: ['tone'],
  plugins: [
    commonJs(),
    babel({ exclude: 'node_modules/**', babelHelpers: 'bundled' }),
    nodeResolve(),
    json(),
    terser(),
  ],
};

module.exports = config;
