import vue from 'rollup-plugin-vue';
// import css from 'rollup-plugin-css-only';
import resolve from 'rollup-plugin-node-resolve';
import globals from 'rollup-plugin-node-globals'
export default {
  input: 'app.js',
  output:{
    file: 'dist/bundle.js',
    format: 'iife'
  },
  // watch:{
  //    include: './**'
  // },
  plugins: [
    vue({ css: 'dist/bundle.css' }),
    // css({ output: 'dist/bundle.css' }),
    globals(),
    resolve({
      browser: true,
      main: true,
      jsnext: true
    })
  ]
}