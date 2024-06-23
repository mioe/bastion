<script setup>
const router = useRouter()
const appStore = useAppStore()
const { findFirstWorkspaceKey } = appStore

onMounted(() => {
	if (appStore.skipWelcomePage && !appStore.isEmptyWorkspace) {
		const key = findFirstWorkspaceKey()
		if (key) {
			router.push({ name: '/[id]', params: { id: key } })
		}
	}
})
</script>

<template>
	<main class="mx-auto my-2 flex flex-col px-4 container">
		hello world

		<input
			v-model="appStore.skipWelcomePage"
			type="checkbox"
		/>
		{{ appStore.isEmptyWorkspace }}
	</main>
</template>
