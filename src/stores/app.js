import { acceptHMRUpdate, defineStore } from 'pinia'
import { useStorage } from '@vueuse/core'

export const useAppStore = defineStore('app', () => {
	const skipWelcomePage = useStorage('skip-welcome-page', false)
	const workspaces = useStorage('workspaces', {})

	function addNewWorkspace(name) {
		workspaces.value[crypto.randomUUID()] = {
			name,
			bookmarks: [],
		}
	}

	function removeWorkspaceByKey(key) {
		delete workspaces.value[key]
		if (!Object.keys(workspaces.value).length) {
			skipWelcomePage.value = false
		}
	}

	return {
		skipWelcomePage,
		workspaces,

		addNewWorkspace,
		removeWorkspaceByKey,
	}
})

/**
 * HMR (Hot Module Replacement)
 * https://pinia.vuejs.org/cookbook/hot-module-replacement.html
 */
if (import.meta.hot)
	import.meta.hot.accept(acceptHMRUpdate(useAppStore, import.meta.hot))
