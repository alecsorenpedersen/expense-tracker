/* eslint-disable testing-library/no-unnecessary-act */
import { render as rtlRender, screen } from '@testing-library/react';

import { createStore, Store } from 'redux';
import reducer from '../../redux/reducers';
import { Provider } from 'react-redux';
import EntryForm from './Form';

jest.mock('react-i18next', () => ({
	useTranslation: () => ({ t: (key: string) => key }),
}));

function render(ui: JSX.Element, { store }: { store: Store }) {
	return rtlRender(<Provider store={store}>{ui}</Provider>);
}

describe('EntryForm', () => {
	let store: Store;

	beforeEach(() => {
		store = createStore(reducer);
		store.dispatch = jest.fn();
	});

	it('renders the form with the correct fields', () => {
		render(<EntryForm />, { store });

		expect(screen.getByTestId('entry-form')).toBeInTheDocument();
		expect(screen.getByLabelText('date')).toBeInTheDocument();
		expect(screen.getByLabelText('description-input')).toBeInTheDocument();
		expect(screen.getByLabelText('Amount-input')).toBeInTheDocument();
		expect(screen.getByLabelText('type-input')).toBeInTheDocument();
		expect(screen.getByLabelText('category-input')).toBeInTheDocument();
		expect(
			screen.getByRole('button', { name: 'addTransaction' }),
		).toBeInTheDocument();
	});
});
