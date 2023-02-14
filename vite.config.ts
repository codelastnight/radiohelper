import { sveltekit } from '@sveltejs/kit/vite';

import type { UserConfig } from 'vite';
import wasmPack from 'vite-plugin-wasm-pack';

const config: UserConfig = {
	resolve: {
	
	},
	optimizeDeps: {
		// esbuildOptions: {
		// 	// Node.js global to browser globalThis
		// 	define: {
		// 		global: 'globalThis'
		// 	},
		// 	// Enable esbuild polyfill plugins
		// 	plugins: [
		// 		NodeGlobalsPolyfillPlugin({
		// 			process: true,
		// 			buffer: true
		// 		}),
		// 		NodeModulesPolyfillPlugin()
		// 	]
		// }
	},

	plugins: [
		sveltekit(),wasmPack('./kakasi')
	]
};

export default config;
