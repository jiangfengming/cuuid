import babel from 'rollup-plugin-babel'

export default {
  input: 'src/index.mjs',
  output: {
    format: 'umd',
    name: 'cuuid',
    file: 'dist/cuuid.js'
  },
  plugins: [
    babel()
  ]
}
