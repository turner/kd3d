import {terser} from 'rollup-plugin-terser';
import buble from 'rollup-plugin-buble';

const config = (file, plugins) => ({
    input: 'js/index.js',
    output: {
        name: 'kd3d',
        format: 'umd',
        indent: false,
        file
    },
    plugins
});

export default [
    config('kd3d.js', [buble()]),
    config('kd3d.min.js', [terser(), buble()])
];
