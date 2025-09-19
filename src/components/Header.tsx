import type { Dispatch, SetStateAction } from 'react';
import logo from '../assets/logo.png';

type HeaderProps = {
	/** Estado actual del tema oscuro */
	isDark: boolean;
	/** Función para alternar el tema */
	setIsDark: Dispatch<SetStateAction<boolean>>;
};

export default function Header({ isDark, setIsDark }: HeaderProps) {
	return (
		<header className="flex items-center justify-between p-4 bg-white/60 dark:bg-gray-900/60 backdrop-blur-sm shadow-md transition-colors duration-500">
			{/* Logo */}
			<div className="flex items-center gap-3">
				<img src={logo} alt="Vibe logo" className="h-12 w-auto" />
			</div>

			{/* Navegación */}
			<nav className="flex items-center gap-6 text-gray-700 dark:text-gray-200 font-medium">
				<a href="#" className="hover:text-blue-600 dark:hover:text-vibeBlue">
					Inicio
				</a>
				<a href="#" className="hover:text-blue-600 dark:hover:text-vibeBlue">
					Productos
				</a>
				<a href="#" className="hover:text-blue-600 dark:hover:text-vibeBlue">
					Contacto
				</a>

				{/* Botón modo oscuro */}
				<button
					onClick={() => setIsDark((d) => !d)}
					className="ml-4 px-3 py-1 rounded bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-100 text-sm transition-colors"
				>
					{isDark ? '☀️ Claro' : '🌙 Oscuro'}
				</button>
			</nav>
		</header>
	);
}
