import { useEffect, useState } from 'react';
import Header from './components/Header';
import bgLight from './assets/vibe-background.png';
import bgDark from './assets/vibe-background-dark.png';

export default function App() {
	// Detectar tema inicial según preferencia del SO
	const [isDark, setIsDark] = useState(() => window.matchMedia('(prefers-color-scheme: dark)').matches);

	// Aplica la clase `dark` en <html> cuando cambia isDark
	useEffect(() => {
		const root = document.documentElement;
		if (isDark) root.classList.add('dark');
		else root.classList.remove('dark');
	}, [isDark]);

	return (
		<div
			className="min-h-screen flex flex-col bg-cover bg-center transition-colors duration-500"
			style={{
				backgroundImage: `url(${isDark ? bgDark : bgLight})`,
			}}
		>
			{/* Header con botón de modo oscuro (props, no children) */}
			<Header isDark={isDark} setIsDark={setIsDark} />

			{/* Contenido principal */}
			<main className="flex-1 flex flex-col items-center justify-center text-center px-6">
				<section className="backdrop-blur-sm bg-white/70 dark:bg-gray-800/70 rounded-2xl shadow-xl p-12 max-w-2xl">
					<h1 className="text-5xl font-extrabold text-gray-800 dark:text-gray-100 mb-4">Bienvenido a Vibe</h1>
					<p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
						Tu selección online de productos al mejor precio.
					</p>
					<button className="mt-4 bg-vibeBlue hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition transform hover:scale-105">
						Explorar productos
					</button>
				</section>
			</main>

			{/* Footer */}
			<footer className="p-4 text-center text-gray-500 dark:text-gray-400">© {new Date().getFullYear()} Vibe</footer>
		</div>
	);
}
