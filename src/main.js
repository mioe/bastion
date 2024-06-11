import { createApp } from 'vue'
import App from './App.vue'

/**
 * Styles
 */
import 'uno.css'
import './style.css'

/**
 * Modules
 */
import { pinia } from './modules/pinia'
import { router } from './modules/vue-router'

/**
 * init app
 */
createApp(App)
	.use(pinia)
	.use(router)
	.mount('#app')
