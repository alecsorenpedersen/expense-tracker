/* eslint-disable testing-library/no-unnecessary-act */
import { render, screen, fireEvent, act } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import SetBudgetForm from './SetBudgetForm';
import { setBudget } from '../../actions';

// Mock Redux store
const store = createStore(() => ({}));

jest.mock('../../actions', () => ({
	setBudget: jest.fn(),
}));

describe('SetBudgetForm', () => {
	describe('Rendering', () => {
		it('should render the Set Budget form with the title and input fields', () => {
			act(() => {
				render(
					<Provider store={store}>
						<SetBudgetForm />
					</Provider>,
				);
			});

			expect(screen.getByLabelText('Budget')).toBeInTheDocument();
		});
	});

	describe('Form Submission', () => {
		it('should dispatch the setBudget action with the provided budget value and reset the form', async () => {
			act(() => {
				render(
					<Provider store={store}>
						<SetBudgetForm />
					</Provider>,
				);
			});

			const inputField = screen.getByLabelText('Budget') as HTMLInputElement;
			const submitButton = screen.getByRole('button', { name: 'Set Budget' });

			act(() => {
				fireEvent.change(inputField, { target: { value: '1000' } });
			});

			await act(async () => {
				fireEvent.click(submitButton);
			});

			expect(setBudget).toHaveBeenCalledWith(1000);
		});
		it('should not dispatch the setBudget action if the budget value is not provided', async () => {
			act(() => {
				render(
					<Provider store={store}>
						<SetBudgetForm />
					</Provider>,
				);
			});

			const submitButton = screen.getByRole('button', { name: 'Set Budget' });

			await act(async () => {
				fireEvent.click(submitButton);
			});

			expect(setBudget).not.toHaveBeenCalled();
		});
	});

	describe('Validation', () => {
		it('should display an error message if the budget value is not provided', async () => {
			act(() => {
				render(
					<Provider store={store}>
						<SetBudgetForm />
					</Provider>,
				);
			});

			const submitButton = screen.getByRole('button', { name: 'Set Budget' });

			await act(async () => {
				fireEvent.click(submitButton);
			});

			expect(await screen.findByText('Budget is required')).toBeInTheDocument();
		});

		it('should display an error message if the budget value is negative', async () => {
			act(() => {
				render(
					<Provider store={store}>
						<SetBudgetForm />
					</Provider>,
				);
			});

			const inputField = screen.getByLabelText('Budget') as HTMLInputElement;
			const submitButton = screen.getByRole('button', { name: 'Set Budget' });

			act(() => {
				fireEvent.change(inputField, { target: { value: '-500' } });
			});

			await act(async () => {
				fireEvent.click(submitButton);
			});

			expect(
				await screen.findByText('Budget must be a positive number'),
			).toBeInTheDocument();
		});
	});
});
