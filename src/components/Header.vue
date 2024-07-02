<script setup>
import Popover from '~/components/Popover.vue'
import Settings from '~/components/Settings.vue'

const route = useRoute()
const router = useRouter()
const appStore = useAppStore()
const {
	addNewWorkspace,
	findFirstWorkspaceKey,
	removeWorkspaceByKey,
} = appStore

const name = ref('')
const workspaces = computed(() => appStore.workspaces)
const popoverRef = shallowRef()

function onAddWorkspace() {
	addNewWorkspace(name.value)
	name.value = ''
	popoverRef.value.close()
}

function handleRemoveWorkspace(key) {
	removeWorkspaceByKey(key)
	if (route.params.id === key) {
		const fKey = findFirstWorkspaceKey()
		router.push({ name: '/[id]', params: { id: fKey } })
	}
}
</script>

<template>
	<header class="sticky top-2 z-9 mx-auto my-2 flex items-center justify-between gap-4 bg-$gray-a2 px-3 py-2 backdrop-blur-md container default-border sm:rounded-lg">
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
					class="relative"
					@click="popoverRef.open($event.target)"
				>
					{{ appStore.isEmptyWorkspace ? $t('add', [$t('workspace').toLowerCase()]) : $t('add') }}
				</button>
				<Popover ref="popoverRef">
					<input
						v-model="name"
						@keyup.enter="onAddWorkspace"
					/>
					<button
						class="button-primary"
						@click="onAddWorkspace"
					>
						<div class="i-mi:return">
						</div>
					</button>
				</Popover>
			</div>
		</div>
		<div class="flex flex-shrink-0">
			<Settings />
		</div>
	</header>
</template>
