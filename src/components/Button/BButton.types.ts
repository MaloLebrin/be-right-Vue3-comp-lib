// VARIANTS
export enum ButtonVariantsEnum {
	'PRIMARY' = 'primary',
	'WARNING' = 'warning',
	'DANGER' = 'danger',
	'SUCCESS' = 'success',
	'PROMOTION' = 'promotion',
	'WHITE' = 'white',
}
export const ButtonVariantsArray = Object.values(ButtonVariantsEnum).map(variant => variant)

// TAGS
export enum ButtonTagsEnum {
	'BUTTON' = 'button',
	'ANCHOR' = 'a',
	'ROUTER_LINK' = 'router-link',
	'NUXT_LINK' = 'nuxt-link',
}
export type ButtonTags = `${ButtonTagsEnum}`
export const ButtonTagsArray = Object.values(ButtonTagsEnum).map(variant => variant)

// TYPES
export enum ButtonTypesEnum {
	'BUTTON' = 'button',
	'SUBMIT' = 'submit',
	'RESET' = 'reset'
}
export type ButtonTypes = `${ButtonTypesEnum}`
export const ButtonTypesArray = Object.values(ButtonTypesEnum).map(variant => variant)

// SIZES
export enum ButtonSizesEnum {
	'SMALL' = 'small',
	'DEFAULT' = 'default'
}
export type ButtonSizes = `${ButtonSizesEnum}`
export const ButtonSizesArray = Object.values(ButtonSizesEnum).map(variant => variant)

// Mapped Type to enforce class creation when adding a variant
// This will make TypeScript throw errors if a variant is added to the enum but the corresponding classes are not added to the map.
export type ButtonVariantsMap = {
	[key in ButtonVariantsEnum]: string
}

export type ButtonSizesMap = {
	[key in ButtonSizesEnum]: string
}

const commonClasses = 'font-bold text-sm rounded-full shadow-lg focus:outline-none focus:shadow-outline cursor-pointer disabled:cursor-not-allowed transform transition hover:-translate-y-1 hover:scale-105 duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2'

export const ButtonSizesMap: ButtonSizesMap = {
	default: `title-3 px-6 py-3 ${commonClasses}`,
	small: `px-4 py-2 ${commonClasses}`
}

export const ButtonVariantsMap: ButtonVariantsMap = {
	primary: 'bg-blue text-white font-normal hover:bg-blue-dark dark:bg-white dark:text-white focus:ring-blue dark:focus:ring-white',
	warning: 'bg-orange text-white hover:bg-orange-dark focus:ring-orange dark:focus:ring-orange',
	danger: 'bg-red text-white hover:text-white hover:bg-red-light focus:ring-red-light',
	success: 'bg-green text-white hover:bg-green-dark focus:ring-green',
	promotion: 'bg-purple text-white hover:text-white hover:bg-purple-dark focus:ring-purple dark:focus:ring-white',
	white: 'bg-white text-black hover:text-black hover:bg-white-dark focus:ring-black dark:focus:ring-white dark:text-black',
}

export const ButtonDisabledClassesMap: ButtonVariantsMap = {
	primary: 'bg-blue-light text-black cursor-not-allowed',
	warning: 'bg-orange-light text-black cursor-not-allowed',
	danger: 'bg-red-light text-black cursor-not-allowed',
	success: 'bg-green-light text-black cursor-not-allowed',
	promotion: 'bg-purple-light text-black cursor-not-allowed',
	white: 'bg-white text-black cursor-not-allowed',
}

export const ButtonOutlinedClassesMap: ButtonVariantsMap = {
	primary: 'bg-white text-blue border border-blue hover:border-blue-dark hover:text-blue-dark',
	warning: 'bg-white text-orange border border-orange hover:border-orange-dark hover:text-orange-dark',
	danger: 'bg-white text-red border border-red hover:border-red-light hover:text-red-light',
	success: 'bg-white text-green border border-green hover:border-green-dark hover:text-green-dark',
	promotion: 'bg-white text-purple border border-purple hover:border-purple-dark hover:text-purple-dark',
	white: 'bg-white text-purple border border-none hover:border-black hover:text-purple-dark',
}

export const ButtonOutlinedAndDisabledClassesMap: ButtonVariantsMap = {
	primary: 'bg-white text-blue/50 border border-blue/50',
	warning: 'bg-white text-orange/50 border border-orange/50',
	danger: 'bg-white text-red/50 border border-red/50',
	success: 'bg-white text-green/50 border border-green/50',
	promotion: 'bg-white text-purple/50 border border-purple/50',
	white: 'bg-white text-black/50 border border-black/50'
}

export const ButtonLoaderClassesMap: ButtonVariantsMap = {
	primary: 'ml-2 animate-spin rounded-full h-6 w-6 border-b-2 border-t-2 border-white',
	danger: 'ml-2 animate-spin rounded-full h-6 w-6 border-b-2 border-t-2 border-white',
	success: 'ml-2 animate-spin rounded-full h-6 w-6 border-b-2 border-t-2 border-blue',
	warning: 'ml-2 animate-spin rounded-full h-6 w-6 border-b-2 border-t-2 border-grey-400',
	promotion: 'ml-2 animate-spin rounded-full h-6 w-6 border-b-2 border-t-2 border-white',
	white: 'ml-2 animate-spin rounded-full h-6 w-6 border-b-2 border-t-2 border-blue'
}
