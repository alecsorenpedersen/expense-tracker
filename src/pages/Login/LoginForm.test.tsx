import { render, screen, fireEvent, act } from '@testing-library/react';
import LoginForm from './LoginForm';

describe('LoginForm', () => {
	const mockSubmit = jest.fn();

	it('submits the form with provided values', async () => {
		render(<LoginForm onSubmit={mockSubmit} />);

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
		expect(mockSubmit).toHaveBeenCalledWith(
			{
				username: 'testuser',
				password: 'testpassword',
			},
			expect.anything(), // Ignore the Formik form values argument
		);
	});

	it('disables the submit button while submitting', async () => {
		render(<LoginForm onSubmit={mockSubmit} />);

		const submitButton = screen.getByRole('button', { name: 'login' });

		fireEvent.click(submitButton);

		expect(submitButton).toBeDisabled();

		await act(async () => {
			await new Promise((resolve) => setTimeout(resolve, 0));
		});

		expect(submitButton).not.toBeDisabled();
	});
});
