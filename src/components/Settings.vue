<script setup>
import Popover from '~/components/Popover.vue'

import { availableLocales, loadLanguageAsync } from '~/modules/vue-i18n'
const { locale } = useI18n()

async function onChangeLocale(ev) {
	const { value: newLocale } = ev.target
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
		<div class="flex flex-col gap-2">
			<div class="flex items-center gap-2">
				<span class="whitespace-nowrap text-[1.5rem]">
					{{ $t('current', [$t('locale').toLowerCase()]) }}:
				</span>
				<select
					:value="locale"
					@change="onChangeLocale($event)"
				>
					<option
						v-for="lng in availableLocales"
						:key="lng"
						:value="lng"
					>
						{{ lng.toUpperCase() }}
					</option>
				</select>
			</div>
		</div>
	</Popover>
</template>
