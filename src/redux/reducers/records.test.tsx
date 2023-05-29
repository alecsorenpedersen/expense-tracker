import records from './records';
import { ADD_RECORD } from '../actions';

describe('records reducer', () => {
	it('should return the initial state', () => {
		expect(records(undefined, {} as any)).toEqual([]);
	});

	it('should handle ADD_RECORD', () => {
		const initialState = [
			{
				date: '2023-01-01',
				info: 'Test info 1',
				value: 100,
				type: 'income',
				category: 'Salary',
			},
		];

		const newRecord = {
			date: '2023-01-02',
			info: 'Test info 2',
			value: 50,
			type: 'expense' as 'expense',
			category: 'Groceries',
		};

		const newState = records(initialState, {
			type: ADD_RECORD,
			payload: newRecord,
		});

		expect(newState).toEqual([...initialState, newRecord]);
	});
});
