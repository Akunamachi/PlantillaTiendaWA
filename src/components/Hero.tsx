export default function Hero() {
	return (
		<section className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-20">
			<div className="container mx-auto text-center px-6">
				<h2 className="text-4xl md:text-5xl font-bold mb-4">
					Bienvenido a <span className="text-yellow-300">Vibe</span>
				</h2>
				<p className="text-lg md:text-xl mb-6">Tu selección online de productos únicos y modernos.</p>
				<a
					href="/products"
					className="bg-yellow-400 text-black font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-yellow-300 transition"
				>
					Explorar Productos
				</a>
			</div>
		</section>
	);
}
