<script setup>
import MainLayout from '~/components/MainLayout.vue'

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
	<MainLayout>
		<h1>hello world</h1>

		<div v-if="!appStore.isEmptyWorkspace">
			<input
				id="skipWelcomePage"
				v-model="appStore.skipWelcomePage"
				type="checkbox"
			/>
			<label for="skipWelcomePage">
				{{ $t('page.index.skip-welcome-page-label') }}
			</label>
		</div>
	</MainLayout>
</template>
