import { useSelector } from 'react-redux';
import { Record } from '../types';
import { RootState } from '../reducers';

export const useBudgetGoal = () => {
	return useSelector((state: RootState) => state.budget);
};

export const useRecords = () => {
	return useSelector((state: RootState) => state.records);
};

export const useTotalExpenses = () => {
	const records = useRecords();
	return records
		.filter((record: Record) => record.type === 'expense')
		.reduce((sum: number, record: Record) => sum + record.value, 0);
};

export const useTotalIncome = () => {
	const records = useRecords();
	return records
		.filter((record: Record) => record.type === 'income')
		.reduce((sum: number, record: Record) => sum + record.value, 0);
};

export const useCategoryTotals = () => {
	const records = useRecords();
	const expenseRecords = records.filter(
		(record: Record) => record.type === 'expense',
	);
	return expenseRecords.reduce(
		(totals: { [key: string]: number }, record: Record) => {
			if (!totals[record.category]) {
				totals[record.category] = 0;
			}
			totals[record.category] += record.value;
			return totals;
		},
		{},
	);
};
