<script setup>
import AppSettings from '~/components/AppSettings.vue'
import { availableLocales, loadLanguageAsync } from '~/modules/vue-i18n'

const { locale } = useI18n()

async function toggleLocales() {
	const locales = availableLocales
	const newLocale = locales[(locales.indexOf(locale.value) + 1) % locales.length]
	await loadLanguageAsync(newLocale)
	locale.value = newLocale
}
</script>

<template>
	<header class="sticky top-0 z-9 mx-auto my-4 flex flex-wrap justify-between gap-4 bg-$default px-4 container">
		<div>
			dd
		</div>
		<div class="inline-flex flex-wrap items-center gap-2">
			<AppSettings />
			<button
				class="relative flex items-center justify-center"
				@click="toggleLocales()"
			>
				<div class="i-mi:bubble-right-fill">
				</div>
				<code class="absolute left-[50%] top-2.5 z-1 cursor-inherit select-none text-2 color-$default -translate-x-[50%]">{{ locale }}</code>
			</button>
			<button
				class="flex items-center justify-center"
				@click="toggleDark()"
			>
				<div class="i-mi:sun-max-fill dark:i-mi:moon-fill">
				</div>
			</button>
		</div>
	</header>
</template>
