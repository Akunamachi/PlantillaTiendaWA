import type { ReactNode } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import bgLight from '../../assets/vibe-background.png';
import bgDark from '../../assets/vibe-background-dark.png';

export default function Layout({ children }: { children: ReactNode }) {
	return (
		<div className="flex flex-col min-h-screen bg-white dark:bg-gray-900 transition-colors">
			{/* Fondo con imágenes diferentes para light/dark */}
			<div className="fixed inset-0 -z-10 bg-cover bg-center" style={{ backgroundImage: `url(${bgLight})` }} />
			<div
				className="fixed inset-0 -z-10 bg-cover bg-center hidden dark:block"
				style={{ backgroundImage: `url(${bgDark})` }}
			/>

			<Navbar />
			<main className="flex-grow">{children}</main>
			<Footer />
		</div>
	);
}
