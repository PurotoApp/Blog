import { writable } from 'svelte/store';
import { compareDates } from '$lib/compareDates';

export const blogList = writable([]);

const getList = async () => {
	const res = await fetch('https://blogapi.puroto.net/list');
	if (res.status == 502) return blogList.set([]);
	const json = await res.json();
	json.forEach((blog) => {
		blog.color = '#DBBE76';
		blog.date = compareDates(Number(blog.date));
	});
	blogList.set(json);
};
getList();
