<script setup>
import {
	flip,
	shift,
	useFloating,
} from '@floating-ui/vue'


import { availableLocales, loadLanguageAsync } from '~/modules/vue-i18n'
const { locale } = useI18n()

async function toggleLocales() {
	const locales = availableLocales
	const newLocale = locales[(locales.indexOf(locale.value) + 1) % locales.length]
	await loadLanguageAsync(newLocale)
	locale.value = newLocale
}

const targetRef = shallowRef()
const floatingRef = shallowRef()
const isOpen = ref(false)

const { floatingStyles } = useFloating(
	targetRef,
	floatingRef,
	{
		middleware: [flip(), shift()],
	},
)

onClickOutside(floatingRef, () => {
	isOpen.value = false
})
</script>

<template>
	<button
		ref="targetRef"
		@click="isOpen = !isOpen"
	>
		{{ $t('settings') }}
	</button>

	<Transition
		enter-active-class="transition-transform ease-out duration-200"
		enter-from-class="transform opacity-0 scale-95"
		enter-to-class="transform opacity-100 scale-100"
		leave-active-class="transition-transform ease-in duration-75"
		leave-from-class="transform opacity-100 scale-100"
		leave-to-class="transform opacity-0 scale-95"
	>
		<div
			v-if="isOpen"
			ref="floatingRef"
			:style="floatingStyles"
			class="flex items-center gap-2 rounded-lg bg-$gray-2 p-4 default-border"
		>
			<button @click="toggleLocales">
				Lang
			</button>
		</div>
	</Transition>
</template>
