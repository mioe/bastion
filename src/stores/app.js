import { acceptHMRUpdate, defineStore } from 'pinia'
import { useStorage } from '@vueuse/core'
import { computed } from 'vue'

export const useAppStore = defineStore('app', () => {
	const skipWelcomePage = useStorage('skip-welcome-page', false)
	const workspaces = useStorage('workspaces', {})
	const isEmptyWorkspace = computed(() => !Object.keys(workspaces.value).length)

	function addNewWorkspace(name) {
		workspaces.value[crypto.randomUUID()] = {
			name,
			bookmarks: [],
		}
	}

	function findFirstWorkspaceKey() {
		const workspaceKeys = Object.keys(workspaces.value)
		if (!workspaceKeys.length) {
			return null
		}
		return workspaceKeys[0]
	}

	function checkWorkspaceByKey(key) {
		const workspaceKeys = Object.keys(workspaces.value)
		return workspaceKeys.includes(key)
	}

	function removeWorkspaceByKey(key) {
		delete workspaces.value[key]
		if (!Object.keys(workspaces.value).length) {
			skipWelcomePage.value = false
		}
	}

	function addNewBookmark(workspaceKey, bookmarkValue) {
		const workspace = workspaces.value[workspaceKey]
		if (workspace) {
			workspace.bookmarks.push(bookmarkValue)
		}
	}

	function removeBookmarkByIdx(workspaceKey, bookmarkIdx) {
		const workspace = workspaces.value[workspaceKey]
		if (workspace) {
			workspace.bookmarks.splice(bookmarkIdx, 1)
		}
	}

	return {
		skipWelcomePage,
		workspaces,
		isEmptyWorkspace,

		addNewWorkspace,
		findFirstWorkspaceKey,
		checkWorkspaceByKey,
		removeWorkspaceByKey,
		addNewBookmark,
		removeBookmarkByIdx,
	}
})

/**
 * HMR (Hot Module Replacement)
 * https://pinia.vuejs.org/cookbook/hot-module-replacement.html
 */
if (import.meta.hot)
	import.meta.hot.accept(acceptHMRUpdate(useAppStore, import.meta.hot))
