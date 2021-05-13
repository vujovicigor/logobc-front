import { writable } from 'svelte/store';
import { fetch2 } from '$lib/fetch2.js';
let projectsList = writable([],() => {
	console.log('Oh, my first subscriber');
    getProjects()
	return () => console.log('no more subscribers');
});

let getProjects = async function(){
    let [resp, err] = await fetch2('get', 'constructions_get_list')
    if (resp) projectsList.set(resp.results)
    //console.log('constructions_get_list', resp)
}


export const projects = projectsList
