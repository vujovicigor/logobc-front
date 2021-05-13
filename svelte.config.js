//import  adapter  from '@sveltejs/adapter-static'
import vercel from '@sveltejs/adapter-vercel';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
		//hydrate: false,
		ssr:false,
		//adapter: adapter({fallback: '200.html'}),
		adapter: vercel(),
		prerender: {
			enabled: false
		}		
		
	}
};

export default config;
