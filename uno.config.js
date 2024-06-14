import { FileSystemIconLoader } from '@iconify/utils/lib/loader/node-loaders'
import {
	defineConfig,
	presetIcons,
	presetUno,
} from 'unocss'

export default defineConfig({
	presets: [
		presetUno(),
		presetIcons({
			warn: true,
			scale: 1.5,
			collections: {
				mi: FileSystemIconLoader(
					'./src/assets/icons',
				),
			},
		}),
	],
})
