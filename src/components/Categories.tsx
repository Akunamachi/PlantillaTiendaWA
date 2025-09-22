const categories = [
	{ name: 'Tecnología', image: 'https://via.placeholder.com/150' },
	{ name: 'Moda', image: 'https://via.placeholder.com/150' },
	{ name: 'Hogar', image: 'https://via.placeholder.com/150' },
	{ name: 'Deporte', image: 'https://via.placeholder.com/150' },
];

export default function Categories() {
	return (
		<section className="py-12 container mx-auto px-6">
			<h3 className="text-2xl font-bold mb-6 text-center">Categorías</h3>
			<div className="grid grid-cols-2 md:grid-cols-4 gap-6">
				{categories.map((cat, i) => (
					<div key={i} className="bg-white rounded-xl shadow-md overflow-hidden hover:scale-105 transform transition">
						<img src={cat.image} alt={cat.name} className="w-full h-32 object-cover" />
						<div className="p-4 text-center">
							<h4 className="font-semibold">{cat.name}</h4>
						</div>
					</div>
				))}
			</div>
		</section>
	);
}
