<script setup>
import AppHeader from './components/App/AppHeader.vue'

const workspacesStore = useWorkspacesStore()
const workspaces = workspacesStore.workspaces

onMounted(() => {
	console.log('🦕 secret:', import.meta.env.VITE_APP_SECRET)
})
</script>

<template>
	<div class="relative flex flex-col">
		<AppHeader />
		<RouterView />

		<main class="mx-auto px-4 py-2 container">
			<div
				v-for="(w, wKey) in workspaces"
				:key="wKey"
			>
				{{ w.name }}
				<div class="flex flex-wrap gap-4">
					<a
						v-for="(b, bIdx) in w.bookmarks"
						:key="bIdx"
						:href="b.url"
						class="flex flex-col gap-1 text-center"
					>
						<div class="relative h-16 w-16 overflow-hidden rounded-lg bg-gray-200">
							<img
								:src="b.fav"
								:alt="b.name"
							/>
						</div>

						<p>{{ b.name }}</p>
					</a>
				</div>
			</div>
		</main>
	</div>
</template>
