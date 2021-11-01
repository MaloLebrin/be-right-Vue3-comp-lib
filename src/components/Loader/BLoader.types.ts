export enum LoaderColorsEnum {
	'PRIMARY' = 'primary',
	'WARNING' = 'warning',
	'DANGER' = 'danger',
	'SUCCESS' = 'success',
	'PURPLE' = 'purple',
	'WHITE' = 'white',
}

export const LoaderColorsArray = Object.values(LoaderColorsEnum).map(color => color)

export type LoaderColorsMap = {
	[key in LoaderColorsEnum]: string
}

const commonClasses = 'animate-spin rounded-full h-32 w-32 border-b-4'

export const LoaderColorsMap: LoaderColorsMap = {
	primary: `${commonClasses} border-blue`,
	white: `${commonClasses} border-white`,
	danger: `${commonClasses} border-red-light`,
	success: `${commonClasses} border-green`,
	purple: `${commonClasses} border-purple`,
	warning: `${commonClasses} border-orange`,
}