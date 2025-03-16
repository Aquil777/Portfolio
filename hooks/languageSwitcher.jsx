import { useContext } from 'react';
import { AppContext } from '../context';

const LanguageSwitcher = () => {
	const { locale, switchLanguage } = useContext(AppContext);

	return (
		<div className="flex justify-center mt-5">
			<button
				className="px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition"
				onClick={() => switchLanguage(locale === 'en' ? 'pt' : 'en')}
			>
				{locale === 'en' ? '🇵🇹 Português' : '🇺🇸 English'}
			</button>
		</div>
	);
};

export default LanguageSwitcher;