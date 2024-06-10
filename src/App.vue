<script setup>
import AppHeader from './components/App/AppHeader.vue'

const router = useRouter()
const routes = router.options.routes
</script>

<template>
	<div class="relative flex flex-col">
		<header class="flex gap-[16px] p-[8px]">
			<RouterLink
				v-for="route in routes"
				:key="route.name"
				:to="{ name: route.name }"
			>
				{{ route.name }}
			</RouterLink>
		</header>

		<AppHeader />
		<RouterView />
	</div>
</template>
