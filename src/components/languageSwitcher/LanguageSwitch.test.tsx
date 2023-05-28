import { render, screen } from '@testing-library/react';
import LanguageSwitcher from './LanguageSwitch';

jest.mock('react-i18next', () => ({
	...jest.requireActual('react-i18next'),
	useTranslation: () => {
		const changeLanguage = jest.fn();
		return {
			t: jest.fn(),
			i18n: { language: 'en', changeLanguage },
		};
	},
}));

describe('LanguageSwitcher', () => {
	it('renders the language options', () => {
		render(<LanguageSwitcher />);

		const languageSelect = screen.getByTestId('language-switcher');
		expect(languageSelect).toBeInTheDocument();

		const languageOptions = screen.getAllByRole('option');
		expect(languageOptions.length).toBe(4);
	});
});
