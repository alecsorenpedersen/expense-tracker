import { render, screen, fireEvent, act } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import LoginForm from './LoginForm';
import rootReducer from '../../redux/reducers';

describe('LoginForm', () => {
	const mockSubmit = jest.fn();

	it('submits the form with provided values', async () => {
		const store = createStore(rootReducer, {
			auth: {
				isAuthenticated: false,
			},
		});

		render(
			<Provider store={store}>
				<LoginForm onSubmit={mockSubmit} />
			</Provider>,
		);

		const usernameInput = screen.getByLabelText('username');
		const passwordInput = screen.getByLabelText('password');
		const submitButton = screen.getByRole('button', { name: 'login' });

		fireEvent.change(usernameInput, { target: { value: 'testuser' } });
		fireEvent.change(passwordInput, { target: { value: 'testpassword' } });
		fireEvent.click(submitButton);

		await act(async () => {
			await new Promise((resolve) => setTimeout(resolve, 0));
		});

		expect(mockSubmit).toHaveBeenCalledTimes(1);
	});

	it('disables the submit button while submitting', async () => {
		const store = createStore(rootReducer, {
			auth: {
				isAuthenticated: false,
			},
		});

		render(
			<Provider store={store}>
				<LoginForm onSubmit={mockSubmit} />
			</Provider>,
		);

		const submitButton = screen.getByRole('button', { name: 'login' });

		fireEvent.click(submitButton);

		expect(submitButton).toBeDisabled();

		await act(async () => {
			await new Promise((resolve) => setTimeout(resolve, 0));
		});

		expect(submitButton).not.toBeDisabled();
	});
});
