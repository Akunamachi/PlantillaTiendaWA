import Header from './components/Header';

export default function App() {
	return (
		<div className="min-h-screen flex flex-col bg-vibe-hero bg-cover bg-center">
			<Header />

			<main className="flex-1 flex flex-col items-center justify-center text-center px-6">
				<section className="backdrop-blur-sm bg-white/70 rounded-2xl shadow-xl p-12 max-w-2xl">
					<h1 className="text-5xl font-extrabold text-gray-800 mb-4">Bienvenido a Vibe</h1>
					<p className="text-lg text-gray-700 mb-6">Tu selección online de productos al mejor precio.</p>
					<button className="mt-4 bg-vibeBlue hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition transform hover:scale-105">
						Explorar productos
					</button>
				</section>
			</main>

			<footer className="p-4 text-center text-gray-500">© {new Date().getFullYear()} Vibe</footer>
		</div>
	);
}

// FIXME: No funciona los fondos xD
