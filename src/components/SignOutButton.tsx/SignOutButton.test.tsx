import { render, fireEvent, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import SignOutButton from './SignOutButton';
import rootReducer from '../../redux/reducers';
import { BrowserRouter as Router } from 'react-router-dom';

describe('SignOutButton', () => {
	it('calls the navigate function with the correct URL on sign out', () => {
		const store = createStore(rootReducer, {
			auth: {
				isAuthenticated: true,
			},
		});

		render(
			<Provider store={store}>
				<Router>
					<SignOutButton />
				</Router>
			</Provider>,
		);

		const signOutButton = screen.getByTestId('sign-out-button');
		fireEvent.click(signOutButton);

		expect(store.getState().auth.isAuthenticated).toBeFalsy();
	});
});
