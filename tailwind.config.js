/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./content/**/*.{js,ts,jsx,tsx}",
		"./renderer/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {},
	},
	plugins: [require("daisyui")],
	daisyui: {
		themes: ["bumblebee"],
	},
};
