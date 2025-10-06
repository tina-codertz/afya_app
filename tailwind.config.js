// tailwind.config.js
export default {
	theme: {
		extend: {
			fontFamily: {
				heading: ["Poppins", "sans-serif"],
				body: ["Inter", "sans-serif"],
			},
			colors: {
				bg: {
					left: "#C7DDEC",
					right: "#E9B3EF",
				},
				card: {
					pink: "#E9B3EF",
					blue: "#D5E6F0",
					yellow: "#E5E0BD",
					surface: "#FFFFFF",
					border: "#E0F1F3",
				},
				accent: {
					purple: "#A687A9",
				},
				text: {
					primary: "#22282A",
				},
			},
			borderRadius: {
				xl: "1.25rem",
				"2xl": "1.5rem",
			},
		},
	},
	plugins: [],
};
