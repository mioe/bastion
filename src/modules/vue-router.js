import { createRouter, createWebHistory } from 'vue-router/auto'
// import { getCurrentUser } from 'vuefire'
import NotFound from '~/404.vue'
import { routes } from 'vue-router/auto-routes'

const router = createRouter({
	history: createWebHistory(),
	routes: [
		...routes,
		{ path: '/:pathMatch(.*)*', name: 'not-found', component: NotFound },
	],
	scrollBehavior(_to, _from, savedPosition) {
		if (savedPosition) {
			return savedPosition
		} else {
			return { top: 0 }
		}
	},
})

// router.beforeEach(async(to) => {
// 	if (to.meta.requiresAuth) {
// 		const currentUser = await getCurrentUser()
// 		if (!currentUser) {
// 			return {
// 				name: 'sign-in',
// 				query: {
// 					redirect: to.fullPath,
// 				},
// 			}
// 		}
// 	}
// })

export {
	router,
}
