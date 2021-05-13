import { writable } from 'svelte/store';
import { fetch2 } from '$lib/fetch2.js';
let projectsHash = writable({})
let projectsList = writable([],() => {
	console.log('Oh, my first subscriber');
    getProjects()
	return () => console.log('no more subscribers');
});

let getProjects = async function(){
    let [resp, err] = await fetch2('get', 'constructions_get_list')
    if (resp) projectsList.set(resp.results)
    let tmbObj = {}
    for(var i=0; i<resp.results.length;i++)
    tmbObj[ resp.results[i].construction_id ] = resp.results[i]
    projectsHash.set(tmbObj)
    //console.log('constructions_get_list', resp)
}

export const projects = projectsList
export const projectsKV = projectsHash
