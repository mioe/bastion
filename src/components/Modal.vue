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
		Open Popover
	</button>

	<div
		:id="id"
		popover
	>
		<p>I am a popover with more information.</p>
	</div>
</template>
