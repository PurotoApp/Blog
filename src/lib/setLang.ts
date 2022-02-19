import { writable } from 'svelte/store';

export const Lang = writable('en');

if (typeof window !== 'undefined') {
    const storedLang = localStorage.getItem('Lang');
    Lang.set(storedLang)
    Lang.subscribe(lang => {
        localStorage.setItem('Lang', lang == null ? 'en' : lang);
    });
};