<script lang="ts">
	import Icon from './Icon.svelte';
	import { Lang } from '$lib/setLang';

	let languagesList = [
		{ lang: 'en', text: 'English' },
		{ lang: 'de', text: 'Deutsch' },
		{ lang: 'fr', text: 'Français' },
		{ lang: 'nl', text: 'Nederlands' },
		{ lang: 'es', text: 'Español' },
		{ lang: 'pl', text: 'Polski' }
	];

	let showLangMenu = false;
	function toggleLangMenu() {
		showLangMenu = !showLangMenu;
	}

	function setLang(lang) {
		Lang.set(lang);
		if (window.location.href.startsWith('https://blog.puroto.net/blog/')) {
			window.location.href =
				window.location.href.substring(0, window.location.href.lastIndexOf('/') + 1) + lang + '/';
		} else {
			location.reload();
		}
	}
</script>

<header class="fixed left-1/2 top-0 z-50 mt-6 h-8 w-10/12 -translate-x-1/2  select-none">
	<div class="flex h-8 w-full justify-between">
		<div class="rounded-lg bg-background">
			<a href="/" class="flex">
				<Icon size="2rem" stroke="#DBBE76" />
				<span class="ml-2 inline-block translate-y-1 font-bold">Blog</span>
			</a>
		</div>
		<div class="rounded-lg bg-background">
			<div class="flex">
				<a
					class="mr-1"
					href="https://twitter.com/PurotoApp"
					target="_blank"
					aria-label="twitter"
					alt="twitter"
				>
					<div class="translate-y-1 transition hover:text-[#1DA1F2]">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="currentColor"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							><path
								d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"
							/></svg
						>
					</div>
				</a>
				<a
					class="mx-1 transition hover:text-[#6D6BED]"
					href="https://puroto.net/"
					target="_blank"
					aria-label="puroto.net"
					alt="puroto.net"
				>
					<div class="translate-y-1">
						<svg
							width="24"
							height="24"
							viewBox="0 0 1426 1406"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M436.82 1362L590.578 1198.64C591.741 1197.41 590.934 1195.38 589.241 1195.28L76.3896 1164.67C75.3889 1164.61 74.587 1163.82 74.5141 1162.82L64.0711 1019.71C64.0262 1019.1 64.2673 1018.5 64.7244 1018.09L427.405 690.157C428.167 689.468 428.283 688.313 427.674 687.486L382.777 626.582C382.2 625.799 382.27 624.714 382.944 624.011L465.382 538.043C466.054 537.343 466.125 536.261 465.552 535.478L393.155 436.536C392.401 435.505 392.794 434.04 393.964 433.525L578.819 352.168C579.682 351.788 580.162 350.858 579.972 349.935L562.2 263.426C561.84 261.672 563.789 260.365 565.275 261.363L733.818 374.65C734.415 375.051 735.18 375.101 735.824 374.781L1358.67 65.1532C1360.27 64.3595 1362.02 65.8939 1361.45 67.5834L1137.72 730.854C1137.48 731.568 1137.66 732.358 1138.19 732.895L1240.78 837.287C1241.59 838.111 1241.53 839.45 1240.65 840.204L1115.71 947.762C1115.04 948.343 1114.83 949.3 1115.2 950.11L1158.66 1045.08C1159.06 1045.94 1158.79 1046.96 1158.03 1047.52L1026.47 1143.87C1025.29 1144.74 1025.4 1146.53 1026.68 1147.24L1108.23 1192.17C1108.96 1192.57 1109.36 1193.38 1109.24 1194.21L1088.89 1335.98"
								stroke="currentColor"
								stroke-width="128"
							/>
						</svg>
					</div>
				</a>
				<div class="ml-1">
					<div
						on:click={toggleLangMenu}
						class="translate-y-1 cursor-pointer transition hover:text-mint"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="26"
							height="26"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
							/>
						</svg>
					</div>
					{#if showLangMenu}
						<div
							class="absolute translate-y-2 -translate-x-1/2 rounded-lg bg-gray-3 px-1 py-1 md:-translate-x-10"
						>
							{#each languagesList as lang}
								{#if lang.lang == $Lang}
									<span
										class="my-1 block rounded-lg px-2 py-1 text-center font-extrabold transition hover:bg-gray-4"
									>
										{lang.text}
									</span>
								{:else}
									<span
										on:click={() => setLang(`${lang.lang}`)}
										class="block text-center my-1 cursor-pointer hover:font-bold transition hover:bg-gray-4 px-2 py-1 rounded-lg"
									>
										{lang.text}
									</span>
								{/if}
							{/each}
						</div>
					{/if}
				</div>
			</div>
		</div>
	</div>
</header>
