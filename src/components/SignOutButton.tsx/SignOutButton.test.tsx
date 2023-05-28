import { render, fireEvent, screen } from '@testing-library/react';
import { useNavigate } from 'react-router-dom';
import SignOutButton from './SignOutButton';

jest.mock('react-i18next', () => ({
	useTranslation: () => ({
		t: jest.fn(),
	}),
}));

jest.mock('react-router-dom', () => ({
	useNavigate: jest.fn(),
}));

describe('SignOutButton', () => {
	it('calls the navigate function with the correct URL on sign out', () => {
		const navigate = jest.fn();
		(useNavigate as jest.Mock).mockReturnValue(navigate);

		render(<SignOutButton />);

		const signOutButton = screen.getByTestId('sign-out-button');
		fireEvent.click(signOutButton);

		expect(navigate).toHaveBeenCalledWith('/');
	});
});
