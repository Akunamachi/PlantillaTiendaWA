import { useEffect, useState } from 'react';

export default function DarkModeToggle() {
	const [dark, setDark] = useState(document.documentElement.classList.contains('dark'));

	useEffect(() => {
		if (dark) {
			document.documentElement.classList.add('dark');
		} else {
			document.documentElement.classList.remove('dark');
		}
	}, [dark]);

	return (
		<button
			onClick={() => setDark(!dark)}
			className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:scale-105 transition-transform"
		>
			{dark ? '🌙' : '☀️'}
		</button>
	);
}
