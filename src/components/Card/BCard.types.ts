export enum CardVariantsEnum {
	'PRIMARY' = 'primary',
	'WARNING' = 'warning',
	'DANGER' = 'danger',
	'SUCCESS' = 'success',
	'PROMOTION' = 'promotion',
	'WHITE' = 'white',
}
const commonClasses = 'max-w-sm rounded-2xl overflow-hidden m-5 shadow-xl'

export type CardVariantsMap = {
	[key in CardVariantsEnum]: string
}

export const CardVariantsMap: CardVariantsMap = {
	primary: `${commonClasses} bg-blue text-white font-normal hover:bg-blue-dark focus:ring-4 ring-blue`,
	warning: `${commonClasses} bg-orange text-white hover:bg-orange-dark focus:ring-4 ring-orange`,
	danger: `${commonClasses} bg-red text-black hover:text-white hover:bg-red-light focus:ring-4 ring-red`,
	success: `${commonClasses} bg-green text-white hover:bg-green-dark focus:ring-4 ring-green`,
	promotion: `${commonClasses} bg-purple text-white hover:text-white hover:bg-purple-dark focus:ring-4 ring-purple`,
	white: `${commonClasses} bg-white text-white hover:text-white hover:bg-white-dark focus:ring-4 ring-white`,
}
