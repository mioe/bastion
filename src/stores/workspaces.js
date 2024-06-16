import { acceptHMRUpdate, defineStore } from 'pinia'
// import { useStorage } from '@vueuse/core'
import { reactive } from 'vue'

export const useWorkspacesStore = defineStore('workspaces', () => {

	const workspaces = reactive({
		[crypto.randomUUID()]: {
			name: 'Favorite',
			bookmarks: [
				{ name: 'yt', fav: 'https://www.youtube.com/s/desktop/bd305dd4/img/favicon_144x144.png', url: 'https://www.youtube.com/' },
				{ name: 'chatgpt', fav: 'https://cdn.oaistatic.com/_next/static/media/apple-touch-icon.82af6fe1.png', url: 'https://chatgpt.com' },
				{ name: 'icones', fav: 'https://icones.netlify.app/favicon.svg', url: 'https://icones.netlify.app' },
				{ name: 'github', fav: 'https://github.githubassets.com/assets/pinned-octocat-093da3e6fa40.svg', url: 'https://github.com' },
			],
		},
	})

	return {
		workspaces,
	}
})

/**
 * HMR (Hot Module Replacement)
 * https://pinia.vuejs.org/cookbook/hot-module-replacement.html
 */
if (import.meta.hot)
	import.meta.hot.accept(acceptHMRUpdate(useWorkspacesStore, import.meta.hot))
