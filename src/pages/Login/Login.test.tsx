import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { BrowserRouter as Router } from 'react-router-dom'; // Import BrowserRouter
import Login from './Login';
import rootReducer from '../../redux/reducers';

describe('Login component', () => {
	test('renders login form', () => {
		const store = createStore(rootReducer, {
			auth: {
				isAuthenticated: false,
			},
		});

		render(
			<Provider store={store}>
				<Router>
					<Login />
				</Router>
			</Provider>,
		);

		const loginForm = screen.getByLabelText(/Username/i);
		expect(loginForm).toBeInTheDocument();
	});
});
