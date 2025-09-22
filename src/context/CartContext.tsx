import { createContext, useState, useContext } from 'react';
import type { ReactNode } from 'react';

type Product = { id: number; name: string; price: number; image: string; category: string };

type CartContextType = {
	cart: Product[];
	addToCart: (product: Product) => void;
	removeFromCart: (id: number) => void;
	clearCart: () => void;
};

const CartContext = createContext<CartContextType | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
	const [cart, setCart] = useState<Product[]>([]);

	const addToCart = (product: Product) => setCart([...cart, product]);
	const removeFromCart = (id: number) => setCart(cart.filter((p) => p.id !== id));
	const clearCart = () => setCart([]);

	return <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>{children}</CartContext.Provider>;
}

export function useCart() {
	const context = useContext(CartContext);
	if (!context) throw new Error('useCart debe usarse dentro de CartProvider');
	return context;
}
