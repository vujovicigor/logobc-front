//const adapter = require('@sveltejs/adapter-static');
import  adapter  from '@sveltejs/adapter-static'
//console.log('adapter', adapter)
/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
		//hydrate: false,
		ssr:false,
		adapter: adapter({
			fallback: '200.html'
		}),
		prerender: {
			enabled: false
		}		
		
	}
};

export default config;
