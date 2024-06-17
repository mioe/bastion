<script setup>
import AppHeader from '~/components/AppHeader.vue'

onMounted(async() => {
	console.log('🦕 secret:', import.meta.env.VITE_APP_SECRET)
})
</script>

<template>
	<div class="relative flex flex-col">
		<AppHeader />
		<RouterView />

		<main class="mx-auto px-4 py-2 container">
			<div
				v-for="w in 100"
				:key="w"
			>
				{{ w }}
				<div class="flex flex-wrap justify-between gap-2">
					<a
						v-for="i in 100"
						:key="`${w}-${i}`"
						:href="i"
						class="flex flex-col gap-2 rounded-xl p-4 text-center hover:bg-$btn-hover-color"
					>
						<div class="relative h-16 w-16 overflow-hidden rounded-lg">
							ff
						</div>

						<p>{{ w }} - {{ i }}</p>
					</a>
				</div>
			</div>
		</main>
	</div>
</template>
