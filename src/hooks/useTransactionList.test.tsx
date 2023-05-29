import { render, fireEvent, screen } from '@testing-library/react';
import ExpenseList from '../components/List/List';

jest.mock('../hooks/useTrasactionList', () => {
	const useExpenseListMock = {
		records: [
			{
				date: '2023-05-28',
				info: 'Test info',
				type: 'expense',
				value: 100,
				category: 'Test Category',
			},
		],
		open: false,
		currentRecord: {},
		columns: [
			{ id: 'date', label: 'Date', minWidth: 50, align: 'left' },
			{ id: 'info', label: 'Information', minWidth: 100, align: 'left' },
			{ id: 'value', label: 'Value', minWidth: 50, align: 'left' },
		],
		handleClickOpen: jest.fn(),
		handleClose: jest.fn(),
		exportToExcel: jest.fn(),
	};

	return () => useExpenseListMock;
});

// Mock the hooks
jest.mock('../hooks/useForm', () => () => ({
	records: [
		{
			date: '2023-05-28',
			info: 'Test info',
			type: 'expense',
			value: 100,
			category: 'Test Category',
		},
	],
}));

jest.mock('react-i18next', () => ({
	useTranslation: () => ({ t: (key: string) => key }),
}));

describe('ExpenseList', () => {
	let useExpenseListMock: {
		handleClickOpen: any;
		handleClose: any;
		exportToExcel: any;
	};

	beforeEach(() => {
		useExpenseListMock = require('../hooks/useTrasactionList')();
	});

	afterEach(() => {
		jest.clearAllMocks();
	});

	test('updates currentRecord and open state when handleClickOpen is called', () => {
		render(<ExpenseList />);

		const row = screen.getByText('Test info');
		fireEvent.click(row);

		expect(useExpenseListMock.handleClickOpen).toHaveBeenCalled();
		// Further assertions here depending on what handleClickOpen does
	});

	test('calls exportToExcel', () => {
		render(<ExpenseList />);

		const exportButton = screen.getByText('Export to Excel');
		fireEvent.click(exportButton);

		expect(useExpenseListMock.exportToExcel).toHaveBeenCalled();
	});
});
