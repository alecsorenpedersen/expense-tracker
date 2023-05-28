import React, { ChangeEvent } from 'react';
import { useTranslation } from 'react-i18next';

const languageOptions = [
	{ value: 'en', label: 'English 🇬🇧' },
	{ value: 'es', label: 'Español 🇪🇸' },
	{ value: 'fr', label: 'Français 🇫🇷' },
	{ value: 'cs', label: 'Čeština 🇨🇿' },
	// ...add more languages here
];

const LanguageSwitcher = () => {
	const { i18n } = useTranslation();

	const handleChange = (event: ChangeEvent<{ value: unknown }>) => {
		i18n.changeLanguage(event.target.value as string);
	};

	return (
		<select
			data-testid='language-switcher'
			value={i18n.language}
			onChange={handleChange}>
			{languageOptions.map((option) => (
				<option key={option.value} value={option.value}>
					{option.label}
				</option>
			))}
		</select>
	);
};

export default LanguageSwitcher;
