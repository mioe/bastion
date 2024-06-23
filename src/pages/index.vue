<script setup>
const router = useRouter()
const appStore = useAppStore()
const isEmptyWorkspace = computed(() => !Object.keys(appStore.workspaces).length)

onMounted(() => {
	if (appStore.skipWelcomePage && !isEmptyWorkspace.value) {
		router.push(`/${Object.keys(appStore.workspaces)[0]}`)
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
		{{ isEmptyWorkspace }}
	</main>
</template>
