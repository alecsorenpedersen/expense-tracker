import rootReducer from './index';
import { addCategory, addRecord, setBudget, logIn } from '../actions';

describe('rootReducer', () => {
	it('should handle actions', () => {
		const actionCategory = addCategory('Groceries');
		const actionRecord = addRecord({
			date: '2023-01-02',
			info: 'Test info',
			value: 50,
			type: 'expense',
			category: 'Groceries',
		});
		const actionBudget = setBudget(1000);
		const actionAuth = logIn();

		const expectedState = {
			categories: ['Groceries'],
			records: [
				{
					date: '2023-01-02',
					info: 'Test info',
					value: 50,
					type: 'expense',
					category: 'Groceries',
				},
			],
			budget: 1000,
			auth: { isAuthenticated: true },
		};

		let state;
		state = rootReducer(state, actionCategory);
		state = rootReducer(state, actionRecord);
		state = rootReducer(state, actionBudget);
		state = rootReducer(state, actionAuth);

		expect(state).toEqual(expectedState);
	});
});
