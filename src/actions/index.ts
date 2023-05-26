// actions/index.ts
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
	// Retrieve the records array from localStorage
	const storedRecords = JSON.parse(localStorage.getItem('records') || '[]');

	// Add the new record to the array
	storedRecords.push(record);

	// Store the updated array in localStorage
	localStorage.setItem('records', JSON.stringify(storedRecords));

	return {
		type: ADD_RECORD,
		payload: record,
	};
};
