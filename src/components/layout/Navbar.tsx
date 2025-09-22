import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import DarkModeToggle from '../DarkModeToggle'; // 👈 lo llamamos aquí

export default function Navbar() {
	return (
		<nav className="sticky top-0 z-50 bg-white dark:bg-gray-900 shadow-md transition-colors">
			<div className="container mx-auto flex justify-between items-center px-6 py-4">
				{/* Logo */}
				<Link to="/" className="flex items-center gap-2">
					<img src={logo} alt="Vibe logo" className="h-8 w-8" />
					<span className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">Vibe</span>
				</Link>

				{/* Menú + Toggle */}
				<div className="flex items-center gap-6">
					<ul className="flex space-x-6 text-gray-800 dark:text-gray-200">
						<li>
							<Link to="/" className="hover:text-indigo-500">
								Inicio
							</Link>
						</li>
						<li>
							<Link to="/products" className="hover:text-indigo-500">
								Productos
							</Link>
						</li>
						<li>
							<Link to="/about" className="hover:text-indigo-500">
								Nosotros
							</Link>
						</li>
						<li>
							<Link to="/contact" className="hover:text-indigo-500">
								Contacto
							</Link>
						</li>
					</ul>

					{/* Botón fijo */}
					<DarkModeToggle />
				</div>
			</div>
		</nav>
	);
}
