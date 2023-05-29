import * as actions from './index';

describe('actions', () => {
	it('should create an action to add a category', () => {
		const category = 'Rent';
		const expectedAction = {
			type: actions.ADD_CATEGORY,
			payload: category,
		};
		expect(actions.addCategory(category)).toEqual(expectedAction);
	});

	it('should create an action to add a record', () => {
		const record = {
			date: '2023-05-29',
			info: 'Groceries',
			value: 100,
			type: 'expense' as 'expense',
			category: 'Food',
		};
		const expectedAction = {
			type: actions.ADD_RECORD,
			payload: record,
		};
		expect(actions.addRecord(record)).toEqual(expectedAction);
	});

	it('should create an action to set a budget', () => {
		const budget = 1000;
		const expectedAction = {
			type: actions.SET_BUDGET,
			payload: budget,
		};
		expect(actions.setBudget(budget)).toEqual(expectedAction);
	});

	it('should create an action to log in', () => {
		const expectedAction = {
			type: actions.LOG_IN,
		};
		expect(actions.logIn()).toEqual(expectedAction);
	});

	it('should create an action to log out', () => {
		const expectedAction = {
			type: actions.LOG_OUT,
		};
		expect(actions.logOut()).toEqual(expectedAction);
	});
});
