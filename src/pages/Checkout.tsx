import { useCart } from '../context/CartContext';

export default function Checkout() {
	const { cart, removeFromCart, clearCart } = useCart();

	const total = cart.reduce((sum, p) => sum + p.price, 0);

	return (
		<div className="p-6">
			<h1 className="text-2xl font-bold mb-4">Carrito de Compras</h1>
			{cart.length === 0 ? (
				<p>Tu carrito está vacío.</p>
			) : (
				<div>
					<ul>
						{cart.map((p, i) => (
							<li key={i} className="flex justify-between items-center border-b py-2">
								<span>
									{p.name} - ${p.price}
								</span>
								<button className="text-red-600" onClick={() => removeFromCart(p.id)}>
									Quitar
								</button>
							</li>
						))}
					</ul>
					<p className="mt-4 font-bold">Total: ${total}</p>
					<button className="bg-green-600 text-white px-4 py-2 rounded mt-2 hover:bg-green-700" onClick={clearCart}>
						Finalizar compra
					</button>
				</div>
			)}
		</div>
	);
}
