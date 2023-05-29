import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import CurrencyField from './CurrencyField';
import { useField } from 'formik';

jest.mock('formik', () => ({
	useField: jest.fn(),
}));

describe('CurrencyField component', () => {
	beforeEach(() => {
		(useField as jest.Mock).mockReturnValue([
			{ value: '' },
			{ touched: false, error: '' },
			{ setValue: jest.fn() },
		]);
	});

	it('renders with label and placeholder', () => {
		render(<CurrencyField name='amount' label='Amount' />);

		const labelElement = screen.getByLabelText(/Amount-input/i);
		const inputElement = screen.getByPlaceholderText(
			'£0.00',
		) as HTMLInputElement;

		expect(labelElement).toBeInTheDocument();
		expect(inputElement).toBeInTheDocument();
	});
});
