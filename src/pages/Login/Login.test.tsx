import { render, screen, fireEvent } from '@testing-library/react';
import Login from './Login';

jest.mock('react-router-dom', () => ({
	useNavigate: jest.fn(),
}));

describe('Login component', () => {
	test('renders login form', () => {
		render(<Login />);
		const loginForm = screen.getByLabelText(/Username/i);
		expect(loginForm).toBeInTheDocument();
	});
});
