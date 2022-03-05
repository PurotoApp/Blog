import { writable, get } from 'svelte/store';
import { compareDates } from '$lib/compareDates';
import { Lang } from '$lib/setLang';

export const blogList = writable([]);

const lang = get(Lang);

const getList = async () => {
	const res = await fetch(`https://blogapi.puroto.net/list?lang=${lang}`);
	if (res.status == 502) return blogList.set([]);
	const json = await res.json();
	json.forEach((blog) => {
		blog.color = '#DBBE76';
		blog.date = compareDates(Number(blog.date));
	});
	blogList.set(json);
};
getList();
