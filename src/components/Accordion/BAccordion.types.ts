export enum AccordionVariantsEnum {
	'PRIMARY' = 'primary',
	'WARNING' = 'warning',
	'DANGER' = 'danger',
	'SUCCESS' = 'success',
}

export const AccordionVariantsArray = Object.values(AccordionVariantsEnum).map(variant => variant)

export type AccordionVariantsMap = {
	[key in AccordionVariantsEnum]: string
}

export const AccordionVariantsMap: AccordionVariantsMap = {
	primary: `bg-white text-dark rounded cursor-pointer`,
	warning: `bg-orange text-white rounded cursor-pointer`,
	danger: `bg-red text-white rounded cursor-pointer`,
	success: `bg-green text-white rounded cursor-pointer`,
}
