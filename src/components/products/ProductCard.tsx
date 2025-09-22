import { useCart } from '../../context/CartContext';

export default function ProductCard({ product }: { product: any }) {
	const { addToCart } = useCart();

	return (
		<div className="border p-4 rounded-lg shadow hover:shadow-lg transition">
			<img src={product.image} alt={product.name} className="w-full h-40 object-cover mb-2 rounded" />
			<h2 className="text-lg font-bold">{product.name}</h2>
			<p className="text-gray-600">${product.price}</p>
			<button
				className="bg-blue-600 text-white px-4 py-2 rounded mt-2 hover:bg-blue-700"
				onClick={() => addToCart(product)}
			>
				Agregar al carrito
			</button>
		</div>
	);
}
