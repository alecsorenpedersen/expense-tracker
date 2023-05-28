import { render, screen, cleanup, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from '../../reducers';
import EntryForm from '../Form/Form';
import userEvent from '@testing-library/user-event';

const store = createStore(rootReducer);

// Mock the translation function
jest.mock('react-i18next', () => ({
	useTranslation: () => ({
		t: (str: any) => str,
	}),
}));

describe('EntryForm', () => {
	afterEach(cleanup);

	it('renders correctly', () => {
		render(
			<Provider store={store}>
				<EntryForm />
			</Provider>,
		);

		expect(screen.getByTestId('entry-form')).toBeInTheDocument();
	});
});
