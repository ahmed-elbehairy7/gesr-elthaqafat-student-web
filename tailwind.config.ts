import type { Config } from "tailwindcss";

export default {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			fontFamily: {
				cairo: ["Cairo", "sans-serif"],
			},
			borderRadius: {
				inputField: "15px",
				container: "40px",
			},
			colors: {
				primary: "#0d309e",
				"primary-color": "#0d309e",
				"secondary-color": "#60148c",
				"accent-color": "#18cad3",
				"bright-one": "#f2f2f2",
				"bright-two": "#ccc",
				"dark-one": "#040e30",
				"dark-two": "#1d062a",
				test: "#34fe41",
			},
		},
	},
	plugins: [],
} satisfies Config;
