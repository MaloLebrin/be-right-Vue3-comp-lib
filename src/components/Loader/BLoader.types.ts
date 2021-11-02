export enum LoaderColorsEnum {
	'PRIMARY' = 'primary',
	'WARNING' = 'warning',
	'DANGER' = 'danger',
	'SUCCESS' = 'success',
	'PURPLE' = 'purple',
	'WHITE' = 'white',
}

export enum LoaderTypeEnum {
	SPINNER = 'spinner',
	BOUNCE = 'bounce',
}

export const LoaderTypesArray = Object.values(LoaderTypeEnum).map(type => type)

export const LoaderColorsArray = Object.values(LoaderColorsEnum).map(color => color)

export type LoaderColorsMap = {
	[key in LoaderColorsEnum]: string
}

export type LoaderTypeMap = {
	[key in LoaderTypeEnum]: string
}

export const LoaderTypeMap: LoaderTypeMap = {
	spinner: 'animate-spi rounded-full h-32 w-32 border-b-4',
	bounce: 'h-4 w-4 bg-current rounded-full',
}

export const LoaderColorsMap: LoaderColorsMap = {
	primary: `border-blue`,
	white: `border-white`,
	danger: `border-red-light`,
	success: `border-green`,
	purple: `border-purple`,
	warning: `border-orange`,
}

