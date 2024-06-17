import { acceptHMRUpdate, defineStore } from 'pinia'

export const useWorkspacesStore = defineStore('workspaces', () => {

	return {
	}
})

/**
 * HMR (Hot Module Replacement)
 * https://pinia.vuejs.org/cookbook/hot-module-replacement.html
 */
if (import.meta.hot)
	import.meta.hot.accept(acceptHMRUpdate(useWorkspacesStore, import.meta.hot))
