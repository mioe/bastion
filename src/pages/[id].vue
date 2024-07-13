<script setup>
import Modal from '~/components/Modal.vue'
import Bookmark from '~/components/Bookmark.vue'
import MainLayout from '~/components/MainLayout.vue'

const route = useRoute()
const appStore = useAppStore()
const { addNewBookmark } = appStore

const currentWorkspaceKey = computed(() => route.params.id)
const bookmarks = computed(() => appStore.workspaces[currentWorkspaceKey.value]?.bookmarks ?? [])

const formData = reactive({
	title: '',
	href: '',
})

function onSubmit() {
	if (formData.href) {
		addNewBookmark(
			currentWorkspaceKey.value,
			{
				title: formData.title || formData.href,
				href: formData.href,
			},
		)

		Object.keys(formData).forEach(key => {
			formData[key] = ''
		})
	}
}
</script>

<template>
	<MainLayout>
		<header class="w-full flex flex-wrap justify-center">
			<Modal>
				<template #default>
					{{ $t('add', [$t('bookmark').toLowerCase()]) }}
				</template>
				<template #body>
					<form
						class="flex flex-col gap-4 p-6"
						@submit.prevent="onSubmit"
					>
						<input
							v-model="formData.title"
							type="text"
							:placeholder="$t('title')"
						/>
						<input
							v-model="formData.href"
							type="url"
							:placeholder="$t('url')"
						/>
						<button
							class="button-primary self-stretch justify-center py-2.5"
							@click="onAddWorkspace"
						>
							<div class="i-mi:return" />
						</button>
					</form>
				</template>
			</Modal>
		</header>
		<div class="w-full flex flex-wrap gap-4">
			<Bookmark
				v-for="(bookmark, bookmarkIdx) in bookmarks"
				:key="bookmarkIdx"
				:title="bookmark.title"
				:href="bookmark.href"
			/>
		</div>
	</MainLayout>
</template>
