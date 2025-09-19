import logo from '../assets/logo.png';

export default function Header() {
	return (
		<header className="flex items-center justify-between p-4 bg-white shadow-md">
			<div className="flex items-center gap-3">
				<img src={logo} alt="Vibe logo" className="h-12 w-auto" />
			</div>
			<nav className="space-x-6 text-gray-700 font-medium">
				<a href="#" className="hover:text-blue-600">
					Inicio
				</a>
				<a href="#" className="hover:text-blue-600">
					Productos
				</a>
				<a href="#" className="hover:text-blue-600">
					Contacto
				</a>
			</nav>
		</header>
	);
}
