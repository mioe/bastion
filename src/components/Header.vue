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
</script>

<template>
	<header class="mx-auto my-2 flex flex-wrap items-center justify-between gap-4 px-4 container">
		<div class="flex flex-wrap items-center gap-2">
			<div
				v-for="(w, wKey) in workspaces"
				:key="wKey"
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
					A
				</button>

				<input
					v-show="isOpen"
					ref="floatingRef"
					v-model="name"
					:style="floatingStyles"
					@keyup.enter="onAddWorkspace"
				/>
			</div>
		</div>
		<Settings />
	</header>
</template>
