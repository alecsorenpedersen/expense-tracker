import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from '../../redux/reducers';
import EntryForm from '../Form/Form';

const store = createStore(rootReducer);

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
