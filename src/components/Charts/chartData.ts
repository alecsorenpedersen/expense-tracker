import { AddRecordAction } from '../../actions';

export const COLORS: string[] = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

export const generateChartData = (
	records: AddRecordAction['payload'][],
): any[] => {
	const data: any[] = [
		{
			name: 'Income',
			value: records.filter(
				(record: AddRecordAction['payload']) => record.type === 'income',
			).length,
		},
		{
			name: 'Expense',
			value: records.filter(
				(record: AddRecordAction['payload']) => record.type === 'expense',
			).length,
		},
	];
	return data;
};
