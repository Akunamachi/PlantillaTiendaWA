// tailwind.config.js
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			backgroundImage: {
				'vibe-hero': "url('/src/assets/vibe-background.png')",
				// opcional, si usas el oscuro:
				'vibe-hero-dark': "url('/src/assets/vibe-background-dark.png')",
			},
			colors: {
				vibeBlue: '#1D4ED8', // o el azul que estés usando
			},
		},
	},
	plugins: [],
};

TODO: Asegúrate de que las rutas a las imágenes en `backgroundImage` sean correctas según la estructura de tu proyecto.