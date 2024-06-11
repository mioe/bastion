import { acceptHMRUpdate, defineStore } from 'pinia'
// import { useStorage } from '@vueuse/core'
import { ref } from 'vue'

export const useWorkspacesStore = defineStore('workspaces', () => {
	const DEMO = ref({
		workspaces: {
			[crypto.randomUUID()]: {
				name: 'Favorites',
				bookmarks: [
					{ name: 'yt', fav: 'https://www.youtube.com/s/desktop/bd305dd4/img/favicon_144x144.png', url: 'https://www.youtube.com/' },
					{ name: 'chatgpt', fav: 'https://cdn.oaistatic.com/_next/static/media/apple-touch-icon.82af6fe1.png', url: 'https://chatgpt.com' },
					{ name: 'yt', fav: 'https://www.youtube.com/s/desktop/bd305dd4/img/favicon_144x144.png', url: 'https://www.youtube.com/' },
					{ name: 'yt', fav: 'https://www.youtube.com/s/desktop/bd305dd4/img/favicon_144x144.png', url: 'https://www.youtube.com/' },
				],
			},
		},
	})

	return {
		DEMO,
	}
})

/**
 * HMR (Hot Module Replacement)
 * https://pinia.vuejs.org/cookbook/hot-module-replacement.html
 */
if (import.meta.hot)
	import.meta.hot.accept(acceptHMRUpdate(useWorkspacesStore, import.meta.hot))
