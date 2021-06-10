import svelte from 'rollup-plugin-svelte';
import resolve from '@rollup/plugin-node-resolve';
import { terser } from 'rollup-plugin-terser' // for minifying build code

const production = !process.env.ROLLUP_WATCH

export default {
	input: 'embed.js',
	output: {
		format: 'iife',
		file: 'dist.js',
    sourcemap: false,
	},
	plugins: [
		svelte({ emitCss: false, }),
		resolve({ browser: true, dedupe: ['svelte'] }),

		// If we're building for production (npm run build
    // instead of npm run dev), minify
    production && terser(),
	],
}