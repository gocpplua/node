// rollup.config.js
import json from 'rollup-plugin-json';

export default {
  input: 'main.ts',
  output: {
    file: 'main.js',
    format: 'cjs'
  },
  plugins: [ json() ]
};