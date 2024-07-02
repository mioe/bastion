<script setup>
import Popover from '~/components/Popover.vue'

import { availableLocales, loadLanguageAsync } from '~/modules/vue-i18n'
const { locale } = useI18n()

async function toggleLocales() {
	const locales = availableLocales
	const newLocale = locales[(locales.indexOf(locale.value) + 1) % locales.length]
	await loadLanguageAsync(newLocale)
	locale.value = newLocale
}

const popoverRef = shallowRef()
</script>

<template>
	<button
		@click="popoverRef.open($event.target)"
	>
		{{ $t('settings') }}
	</button>

	<Popover ref="popoverRef">
		<button @click="toggleLocales">
			Lang
		</button>
	</Popover>
</template>
