import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Unocss from 'unocss/vite'
import VueRouter from 'unplugin-vue-router/vite'
import AutoImport from 'unplugin-auto-import/vite'
import VueI18n from '@intlify/unplugin-vue-i18n/vite'

import path from 'node:path'
import { fileURLToPath } from 'node:url'
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
	console.log('🦕 vite.config.js/defineConfig', command, mode)

	return {
		resolve: {
			alias: {
				'~/': `${path.resolve(__dirname, 'src')}/`,
			},
		},

		plugins: [
			// https://github.com/posva/unplugin-vue-router
			VueRouter(),

			vue(),

			// https://github.com/unocss/unocss
			Unocss(),

			// https://github.com/intlify/bundle-tools/tree/main/packages/unplugin-vue-i18n
			VueI18n({
				runtimeOnly: true,
				compositionOnly: true,
				fullInstall: true,
				include: [path.resolve(__dirname, 'locales/**')],
			}),

			// https://github.com/antfu/unplugin-auto-import
			AutoImport({
				imports: [
					'vue',
					'vue-router',
					'vue-i18n',
					'@vueuse/core',
				],
				dts: 'src/auto-imports.d.ts',
				dirs: [
					'src/composables',
					'src/stores',
				],
				vueTemplate: true,
			}),
		],
	}
})
