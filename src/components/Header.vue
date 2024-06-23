<script setup>
import { useFloating } from '@floating-ui/vue'
import Settings from '~/components/Settings.vue'

const route = useRoute()
const router = useRouter()
const appStore = useAppStore()
const {
	addNewWorkspace,
	findFirstWorkspaceKey,
	removeWorkspaceByKey,
} = appStore

const targetRef = shallowRef()
const floatingRef = shallowRef()
const isOpen = ref(false)
const name = ref('')
const workspaces = computed(() => appStore.workspaces)

const { floatingStyles } = useFloating(
	targetRef,
	floatingRef,
)

function onAddWorkspace() {
	addNewWorkspace(name.value)
	name.value = ''
	isOpen.value = false
}

function handleRemoveWorkspace(key) {
	removeWorkspaceByKey(key)
	if (route.params.id === key) {
		const fKey = findFirstWorkspaceKey()
		router.push({ name: '/[id]', params: { id: fKey } })
	}
}

watch(isOpen, val => {
	if (!val) {
		name.value = ''
	}
})

onClickOutside(floatingRef, () => {
	name.value = ''
	isOpen.value = false
})
</script>

<template>
	<header class="sticky top-2 z-9 mx-auto my-2 flex items-center justify-between gap-4 rounded-lg bg-$gray-a2 px-3 py-2 backdrop-blur-md container default-border">
		<div class="flex flex-wrap items-center gap-2">
			<div
				v-for="(w, wKey) in workspaces"
				:key="wKey"
				class="bg-$default-background-color"
			>
				<RouterLink
					:to="`/${wKey}`"
				>
					{{ w.name }}
				</RouterLink>
				<button @click="handleRemoveWorkspace(wKey)">
					X
				</button>
			</div>
			<div>
				<button
					ref="targetRef"
					class="relative"
					@click="isOpen = !isOpen"
				>
					{{ appStore.isEmptyWorkspace ? $t('add', [$t('workspace').toLowerCase()]) : $t('add') }}
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
						<input
							v-model="name"
							@keyup.enter="onAddWorkspace"
						/>
						<button
							class="bg-$yellow-10"
							style="box-shadow: 0 0 0 1px color-mix(in oklab, var(--yellow-a7), var(--yellow-7) 25%);"
							@click="onAddWorkspace"
						>
							<div class="i-mi:return">
							</div>
						</button>
					</div>
				</Transition>
			</div>
		</div>
		<div class="flex flex-shrink-0">
			<Settings />
		</div>
	</header>
</template>
