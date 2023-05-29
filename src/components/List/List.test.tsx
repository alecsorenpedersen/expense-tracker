import { fireEvent, render as rtlRender, screen } from '@testing-library/react';
import ExpenseList from './List';
import useExpenseList from '../../hooks/useTrasactionList';
import { Provider } from 'react-redux';

import { createStore, Store } from 'redux';
import reducer from '../../redux/reducers';

jest.mock('../../hooks/useTrasactionList');

jest.mock('react-i18next', () => ({
	useTranslation: () => ({ t: (key: string) => key }),
}));

function render(ui: JSX.Element, { store }: { store: Store }) {
	return rtlRender(<Provider store={store}>{ui}</Provider>);
}

describe('ExpenseList', () => {
	let store: Store;

	beforeEach(() => {
		store = createStore(reducer);
		store.dispatch = jest.fn();
	});
	const mockedUseExpenseList = useExpenseList as jest.MockedFunction<
		typeof useExpenseList
	>;

	it('renders the expense list with records', () => {
		const records = [
			{
				date: '2023-05-29',
				info: 'Sample Transaction',
				value: 100,
				type: 'expense',
				category: 'Food',
			},
			// Add more records as needed
		];

		mockedUseExpenseList.mockReturnValue({
			records,
			open: false,
			currentRecord: null,
			columns: [
				{ id: 'date', label: 'Date', minWidth: 50, align: 'left' },
				{ id: 'info', label: 'Info', minWidth: 100, align: 'left' },
				{ id: 'value', label: 'Amount', minWidth: 50, align: 'left' },
			],
			handleClickOpen: jest.fn(),
			handleClose: jest.fn(),
			exportToExcel: jest.fn(),
		});

		render(<ExpenseList />, { store });

		// Add your assertions here
	});
	it('calls the exportToExcel function when "Export to Excel" button is clicked', () => {
		const exportToExcelMock = jest.fn();
		mockedUseExpenseList.mockReturnValue({
			records: [],
			open: false,
			currentRecord: null,
			columns: [],
			handleClickOpen: jest.fn(),
			handleClose: jest.fn(),
			exportToExcel: exportToExcelMock,
		});

		render(<ExpenseList />, { store });

		const exportButton = screen.getByText('Export to Excel');
		fireEvent.click(exportButton);

		expect(exportToExcelMock).toHaveBeenCalledTimes(1);
	});
});
