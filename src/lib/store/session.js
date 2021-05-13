//import { goto, invalidate, prefetch, prefetchRoutes } from '$app/navigation';
import { writable, derived } from 'svelte/store'
import {  browser } from '$app/env';
console.log('browser', browser)
console.log('typeof window ', typeof window )
let localStorage = {
    getItem:()=>{ return '{}'},
    setItem:()=>{},  
}
if (typeof window !== 'undefined') {
    localStorage = window.localStorage
}
//var localStorage = (typeof window !== 'undefined') ? window.localStorage: {getItem:()=>{}, setItem:null}
const getLocalStorageItem = (key) => JSON.parse(localStorage.getItem(key))
const setLocalStorageItem = (key, value) => localStorage.setItem(key, JSON.stringify(value))

let loginLocalStorage = getLocalStorageItem('login') || { isLogedIn:false, token:null }
export const session = writable(loginLocalStorage)

// save store to localstorage on change
session.subscribe( $session=>{
  if (!$session) return
  if ( $session.isLogedIn) setLocalStorageItem('login', $session)
  if (!$session.isLogedIn) setLocalStorageItem('login', { isLogedIn:false, token:null })
})