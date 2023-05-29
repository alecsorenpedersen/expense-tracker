import { MenuItem, Select, SelectChangeEvent } from '@mui/material';
import { useTranslation } from 'react-i18next';

const languageOptions = [
	{ value: 'en', label: 'English 🇬🇧' },
	{ value: 'es', label: 'Español 🇪🇸' },
	{ value: 'fr', label: 'Français 🇫🇷' },
	{ value: 'cs', label: 'Čeština 🇨🇿' },
];

const LanguageSwitcher = () => {
	const { i18n } = useTranslation();

	const handleChange = (event: SelectChangeEvent<string>) => {
		i18n.changeLanguage(event.target.value);
	};

	return (
		<Select
			variant='outlined'
			value={i18n.language}
			onChange={handleChange}
			style={{
				color: '#333',
				margin: '10px',
				lineHeight: '2',
				borderRadius: '5px',
				backgroundColor: 'white',
				height: '40px',
			}}
			data-testid='language-switcher'>
			{languageOptions.map((option) => (
				<MenuItem key={option.value} value={option.value}>
					{option.label}
				</MenuItem>
			))}
		</Select>
	);
};

export default LanguageSwitcher;
