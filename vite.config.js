import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Unocss from 'unocss/vite'

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
			vue(),

			// https://github.com/unocss/unocss
			Unocss(),
		],
	}
})

