import { render, screen, fireEvent } from '@testing-library/react';
import RecordDetailDialog from './ListModel';
import { Record } from '../../types/types';

describe('RecordDetailDialog', () => {
	const record: Record = {
		date: '2023-05-29',
		info: 'Sample Transaction',
		value: 100,
		type: 'expense',
		category: 'Food',
	};

	it('renders the dialog with record details', () => {
		const onClose = jest.fn();
		render(
			<RecordDetailDialog open={true} record={record} onClose={onClose} />,
		);

		const titleElement = screen.getByText('transactionDetails');
		expect(titleElement).toBeInTheDocument();

		const dateElement = screen.getByText('2023-05-29');
		expect(dateElement).toBeInTheDocument();

		const infoElement = screen.getByText('Sample Transaction');
		expect(infoElement).toBeInTheDocument();

		const valueElement = screen.getByText('£100.00');
		expect(valueElement).toBeInTheDocument();

		const typeElement = screen.getByText('expense');
		expect(typeElement).toBeInTheDocument();

		const categoryElement = screen.getByText('Food');
		expect(categoryElement).toBeInTheDocument();

		// Close button should be present
		const closeButton = screen.getByRole('button', { name: 'close' });
		expect(closeButton).toBeInTheDocument();
	});

	it('does not render the dialog when closed', () => {
		const onClose = jest.fn();
		render(
			<RecordDetailDialog open={false} record={record} onClose={onClose} />,
		);

		// Dialog should not be rendered
		const dialogElement = screen.queryByTestId('record-detail-dialog');
		expect(dialogElement).toBeNull();
	});

	it('calls the onClose function when close button is clicked', () => {
		const onClose = jest.fn();
		render(
			<RecordDetailDialog open={true} record={record} onClose={onClose} />,
		);

		// Click the close button
		const closeButton = screen.getByRole('button', { name: 'close' });
		fireEvent.click(closeButton);

		// Verify that the onClose function was called
		expect(onClose).toHaveBeenCalledTimes(1);
	});
});
