import { useParams } from 'react-router-dom';
import { products } from '../components/products';
import ProductCard from '../components/products/ProductCard';

export default function Categoria() {
	const { nombre } = useParams<{ nombre: string }>();
	const filtered = products.filter((p) => p.category.toLowerCase() === nombre?.toLowerCase());

	return (
		<div className="p-6">
			<h1 className="text-2xl font-bold mb-4">{nombre}</h1>
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
				{filtered.length > 0 ? (
					filtered.map((p) => <ProductCard key={p.id} product={p} />)
				) : (
					<p>No hay productos en esta categoría.</p>
				)}
			</div>
		</div>
	);
}
