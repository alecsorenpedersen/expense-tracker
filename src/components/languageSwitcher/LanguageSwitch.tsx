import { useTranslation } from 'react-i18next';
import { MenuItem, Select, makeStyles, Theme } from '@material-ui/core';
import { ChangeEvent } from 'react';

const useStyles = makeStyles((theme: Theme) => ({
	select: {
		backgroundColor: theme.palette.primary.main,
		color: theme.palette.primary.contrastText,
		'&:hover': {
			backgroundColor: theme.palette.secondary.main,
		},
		'& .MuiSelect-icon': {
			color: theme.palette.primary.contrastText,
		},
	},
	option: {
		backgroundColor: theme.palette.primary.main,
		color: theme.palette.primary.contrastText,
	},
}));

const languageOptions = [
	{ value: 'en', label: 'English 🇬🇧' },
	{ value: 'es', label: 'Español 🇪🇸' },
	{ value: 'fr', label: 'Français 🇫🇷' },
	{ value: 'cs', label: 'Čeština 🇨🇿' },
	// ...add more languages here
];

const LanguageSwitcher = () => {
	const { i18n } = useTranslation();
	const classes = useStyles();

	const handleChange = (event: ChangeEvent<{ value: unknown }>) => {
		i18n.changeLanguage(event.target.value as string);
	};

	return (
		<Select
			onChange={handleChange}
			value={i18n.language}
			className={classes.select}
			MenuProps={{
				anchorOrigin: {
					vertical: 'bottom',
					horizontal: 'left',
				},
				transformOrigin: {
					vertical: 'top',
					horizontal: 'left',
				},
				getContentAnchorEl: null,
			}}>
			{languageOptions.map((option) => (
				<MenuItem
					key={option.value}
					value={option.value}
					className={classes.option}>
					{option.label}
				</MenuItem>
			))}
		</Select>
	);
};

export default LanguageSwitcher;
