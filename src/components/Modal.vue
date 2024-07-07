<script setup>
defineProps({
	id: {
		type: String,
		default: crypto.randomUUID(),
	},
})
</script>

<template>
	<button :popovertarget="id">
		<slot name="default" />
	</button>

	<div
		:id="id"
		popover
	>
		<slot name="body" />
	</div>
</template>
