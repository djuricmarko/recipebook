// eslint-disable-next-line import/no-extraneous-dependencies
const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
	content: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Satoshi-Variable', 'Satoshi-VariableItalic', ...fontFamily.sans],
			},
		},
	},
	plugins: [],
};
