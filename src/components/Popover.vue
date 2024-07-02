<script setup>
import {
	flip,
	shift,
	useFloating,
} from '@floating-ui/vue'

const targetRef = shallowRef()
const floatingRef = shallowRef()
const isOpen = ref(false)

const { floatingStyles } = useFloating(
	targetRef,
	floatingRef,
	{
		transform: false,
		middleware: [flip(), shift()],
	},
)

const callback = reactive({
	resolve: null,
	reject: null,
})

function open(target) {
	const promise = new Promise((resolve, _reject) => {
		callback.resolve = resolve
		callback.reject = resolve
	})
	targetRef.value = target
	isOpen.value = true

	return promise
}

function close() {
	isOpen.value = false
}

function reset() {
	targetRef.value = undefined
}

onClickOutside(floatingRef, () => close())

defineExpose({
	open,
	close,
})
</script>

<template>
	<Transition
		enter-active-class="transition-transform ease-out duration-200"
		enter-from-class="transform opacity-0 scale-95"
		enter-to-class="transform opacity-100 scale-100"
		leave-active-class="transition-transform ease-in duration-75"
		leave-from-class="transform opacity-100 scale-100"
		leave-to-class="transform opacity-0 scale-95"
		@after-leave="reset"
	>
		<div
			v-if="isOpen"
			ref="floatingRef"
			:style="floatingStyles"
			class="flex items-center gap-2 rounded-lg bg-$gray-2 p-4 default-border"
		>
			<slot>
			</slot>
		</div>
	</Transition>
</template>
