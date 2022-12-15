/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
	theme: {
		screens: {
			"2xl": { max: "1535px" },
			// => @media (max-width: 1535px) { ... }

			xl: { max: "1279px" },
			// => @media (max-width: 1279px) { ... }

			lg: { max: "1024px" },
			// => @media (max-width: 1023px) { ... }

			md: { max: "767px" },
			// => @media (max-width: 767px) { ... }

			sm: { max: "639px" },
			// => @media (max-width: 639px) { ... }

			xs: { max: "419px" },
			// => @media (max-width: 419px)
		},
		extend: {
			dropShadow: {
				button: "0 0 20px #4F46E5",
			},
			backgroundImage: {
				"indication-bg": "url('/src/assets/indication-bg.svg')",
			},
		},
	},
	plugins: [],
};
