// rollup.config.js
import typescript from "rollup-plugin-typescript2";
export default {
    input: 'xrark.ts',
    output: {
      file: 'main.js',
      format: 'cjs'
    },
    plugins: [typescript()],
  };