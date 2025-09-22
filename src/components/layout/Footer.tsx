export default function Footer() {
	return (
		<footer className="bg-gray-800 text-gray-300 py-6 mt-10">
			<div className="container mx-auto text-center">
				<p>© {new Date().getFullYear()} Vibe. Todos los derechos reservados.</p>
			</div>
		</footer>
	);
}
