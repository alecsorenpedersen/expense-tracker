export const ADD_CATEGORY = 'ADD_CATEGORY';

interface AddCategoryAction {
	type: typeof ADD_CATEGORY;
	payload: string;
}

export const ADD_RECORD = 'ADD_RECORD';

export interface AddRecordAction {
	type: typeof ADD_RECORD;
	payload: {
		date: string;
		info: string;
		value: number;
		type: 'income' | 'expense';
		category: string;
	};
}

export type RecordActionTypes = AddRecordAction;
export type CategoryActionTypes = AddCategoryAction;

export const addCategory = (category: string): CategoryActionTypes => ({
	type: ADD_CATEGORY,
	payload: category,
});

export const addRecord = (
	record: AddRecordAction['payload'],
): RecordActionTypes => {
	const storedRecords = JSON.parse(localStorage.getItem('records') || '[]');
	storedRecords.push(record);
	localStorage.setItem('records', JSON.stringify(storedRecords));

	return {
		type: ADD_RECORD,
		payload: record,
	};
};

export const SET_BUDGET = 'SET_BUDGET';

interface SetBudgetAction {
	type: typeof SET_BUDGET;
	payload: number;
}

export type BudgetActionTypes = SetBudgetAction;

export const setBudget = (budget: number): BudgetActionTypes => ({
	type: SET_BUDGET,
	payload: budget,
});
