<script setup>
import Header from '~/components/Header.vue'

const appStore = useAppStore()
const router = useRouter()

function goToWelcomePage(val) {
	if (val) {
		router.replace({ name: '/' })
	}
}

watch(() => appStore.isEmptyWorkspace, val => {
	goToWelcomePage(val)
})

onMounted(() => {
	console.log('🦕 secret:', import.meta.env.VITE_APP_SECRET)
	goToWelcomePage(appStore.isEmptyWorkspace)
})
</script>

<template>
	<div class="relative flex flex-col">
		<Header />
		<RouterView />
	</div>
</template>
