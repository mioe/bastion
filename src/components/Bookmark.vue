<script setup>
defineProps({
	title: String,
	href: String,
})
</script>

<template>
	<a
		:href="href"
		class="flex flex-col items-center gap-2"
	>
		<header class="h-18 w-18 flex items-center justify-center rounded-lg bg-$gray-2 default-border">
			{{ title[0] }}
		</header>
		<footer>
			{{ title }}
		</footer>
	</a>
</template>
