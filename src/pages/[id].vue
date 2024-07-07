<script setup>
import Modal from '~/components/Modal.vue'
import MainLayout from '~/components/MainLayout.vue'

const route = useRoute()
const appStore = useAppStore()

const bookmarks = computed(() => appStore.workspaces[route.params.id].bookmarks)
</script>

<template>
	<MainLayout>
		<div class="w-full flex flex-wrap gap-2">
			<Modal />
			<button>
				Add bookmark
			</button>
		</div>
	</MainLayout>
</template>
