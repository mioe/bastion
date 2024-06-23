<script setup>
import Header from '~/components/Header.vue'

const appStore = useAppStore()

onMounted(() => {
	console.log('🦕 secret:', import.meta.env.VITE_APP_SECRET)
})
</script>

<template>
	<div class="relative flex flex-col">
		<Header />
		<RouterView />
	</div>
</template>
