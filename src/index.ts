import BAccordion from '@/components/Accordion/BAccordion.vue'
import BBadge from '@/components/Badge/BBadge.vue'
import BButton from '@/components/Button/BButton.vue'
import BCardModal from '@/components/CardModal/BCardModal.vue'
import BCheckbox from '@/components/Checkbox/BCheckbox.vue'
import BDropdown from '@/components/Dropdown/BDropdown.vue'
import BField from '@/components/Field/BField.vue'
import BFileInput from '@/components/FileInput/BFileInput.vue'
import BInput from '@/components/Input/BInput.vue'
import BLink from '@/components/Link/BLink.vue'
import BMessage from '@/components/Message/BMessage.vue'
import BNumberInput from '@/components/NumberInput/BNumberInput.vue'
import BRadio from '@/components/Radio/BRadio.vue'
import BSelect from '@/components/Select/BSelect.vue'
import BSkeleton from '@/components/Skeleton/BSkeleton.vue'
import BSwitch from '@/components/Switch/BSwitch.vue'
import BTable from '@/components/Table/BTable.vue'
import BTableColumn from './components/Table/BTableColumn.vue'
import BTag from '@/components/Tag/BTag.vue'
import BToast from '@/components/Toast/BToast.vue'
import BTooltip from '@/components/Tooltip/BTooltip.vue'
import './assets/tailwind.css'
import { App } from 'vue'

const Components = {
	BAccordion,
	BBadge,
	BButton,
	BCardModal,
	BCheckbox,
	BDropdown,
	BField,
	BFileInput,
	BInput,
	BLink,
	BMessage,
	BNumberInput,
	BRadio,
	BSelect,
	BSkeleton,
	BSwitch,
	BTable,
	BTableColumn,
	BTag,
	BToast,
	BTooltip,
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

// export { default as BButton } from './components/Button/BButton.vue'
export { default as BAccordion } from '@/components/Accordion/BAccordion.vue'
export { default as BBadge } from '@/components/Badge/BBadge.vue'
export { default as BButton } from '@/components/Button/BButton.vue'
export { default as BCardModal } from '@/components/CardModal/BCardModal.vue'
export { default as BCheckbox } from '@/components/Checkbox/BCheckbox.vue'
export { default as BDropdown } from '@/components/Dropdown/BDropdown.vue'
export { default as BField } from '@/components/Field/BField.vue'
export { default as BFileInput } from '@/components/FileInput/BFileInput.vue'
export { default as BInput } from '@/components/Input/BInput.vue'
export { default as BLink } from '@/components/Link/BLink.vue'
export { default as BMessage } from '@/components/Message/BMessage.vue'
export { default as BNumberInput } from '@/components/NumberInput/BNumberInput.vue'
export { default as BRadio } from '@/components/Radio/BRadio.vue'
export { default as BSelect } from '@/components/Select/BSelect.vue'
export { default as BSkeleton } from '@/components/Skeleton/BSkeleton.vue'
export { default as BSwitch } from '@/components/Switch/BSwitch.vue'
export { default as BTable } from '@/components/Table/BTable.vue'
export { default as BTableColumn } from './components/Table/BTableColumn.vue'
export { default as BTag } from '@/components/Tag/BTag.vue'
export { default as BToast } from '@/components/Toast/BToast.vue'
export { default as BTooltip } from '@/components/Tooltip/BTooltip.vue'
