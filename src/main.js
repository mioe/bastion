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
import { i18n, loadLanguageAsync, getDefaultLocale } from './modules/vue-i18n'
import { pinia } from './modules/pinia'
import { router } from './modules/vue-router'

/**
 * init app
 */
createApp(App)
	.use(i18n)
	.use(pinia)
	.use(router)
	.mount('#app')

/**
 * do something after init app
 */
const defaultLocale = getDefaultLocale()
loadLanguageAsync(defaultLocale)
