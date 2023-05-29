import { renderHook } from '@testing-library/react-hooks';
import { useSelector } from 'react-redux';
import {
	useBudgetGoal,
	useRecords,
	useTotalExpenses,
	useTotalIncome,
	useCategoryTotals,
} from './useSelectors';

jest.mock('react-redux', () => ({
	useSelector: jest.fn(),
}));

describe('Custom Hooks', () => {
	describe('useBudgetGoal', () => {
		it('should return the budget goal from the Redux store', () => {
			const budgetGoal = 500;
			(useSelector as jest.Mock).mockReturnValue(budgetGoal);

			const { result } = renderHook(() => useBudgetGoal());

			expect(result.current).toBe(budgetGoal);
		});
	});

	describe('useRecords', () => {
		it('should return the records from the Redux store', () => {
			const records = [
				{ id: 1, type: 'expense', value: 50 },
				{ id: 2, type: 'income', value: 100 },
			];
			(useSelector as jest.Mock).mockReturnValue(records);

			const { result } = renderHook(() => useRecords());

			expect(result.current).toBe(records);
		});
	});

	describe('useTotalExpenses', () => {
		it('should return the total expenses from the Redux store', () => {
			const expenses = [50, 100, 75];
			const records = expenses.map((value) => ({
				id: 1,
				type: 'expense',
				value,
			}));
			(useSelector as jest.Mock).mockReturnValue(records);

			const { result } = renderHook(() => useTotalExpenses());

			expect(result.current).toBe(
				expenses.reduce((sum, value) => sum + value, 0),
			);
		});
	});

	describe('useTotalIncome', () => {
		it('should return the total income from the Redux store', () => {
			const income = [200, 150, 100];
			const records = income.map((value) => ({ id: 1, type: 'income', value }));
			(useSelector as jest.Mock).mockReturnValue(records);

			const { result } = renderHook(() => useTotalIncome());

			expect(result.current).toBe(
				income.reduce((sum, value) => sum + value, 0),
			);
		});
	});

	describe('useCategoryTotals', () => {
		it('should return the category totals from the Redux store', () => {
			const records = [
				{ id: 1, type: 'expense', value: 50, category: 'food' },
				{ id: 2, type: 'expense', value: 75, category: 'travel' },
				{ id: 3, type: 'expense', value: 100, category: 'food' },
				{ id: 4, type: 'expense', value: 50, category: 'entertainment' },
			];
			(useSelector as jest.Mock).mockReturnValue(records);

			const { result } = renderHook(() => useCategoryTotals());

			expect(result.current).toEqual({
				food: 150,
				travel: 75,
				entertainment: 50,
			});
		});
	});
});
