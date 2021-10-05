import BButton from '@/components/Button/BButton.vue'
import './assets/tailwind.css'
import { App } from 'vue'

const Components = {
	BButton
}
export default {
	install(Vue: App): void {
		// tslint:disable-next-line: forin
		for (const component in Components) {
			// @ts-expect-error eroor not fix
			Vue.component(Components[component].name, Components[component])
		}
	}
}

export { default as BButton } from './components/Button/BButton.vue'
