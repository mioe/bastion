<script setup lang="ts">
console.log('🦕 misha')
</script>

<template>
	<header class="sticky left-0 top-0 mx-auto flex flex-wrap justify-between container">
		<div>
			left
		</div>
		<div>
			<button
				class="flex items-center justify-center p-0"
				@click="toggleDark()"
			>
				<div class="i-mi:sun-max-fill dark:i-mi:moon-fill">
				</div>
			</button>
		</div>
	</header>
</template>
