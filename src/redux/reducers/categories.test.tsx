import categories from './categories';
import { ADD_CATEGORY } from '../actions';

describe('categories reducer', () => {
	it('should return the initial state', () => {
		expect(categories(undefined, {} as any)).toEqual([]);
	});

	it('should handle ADD_CATEGORY', () => {
		const initialState = ['Groceries', 'Bills'];
		const newCategory = 'Entertainment';

		const newState = categories(initialState, {
			type: ADD_CATEGORY,
			payload: newCategory,
		});

		expect(newState).toEqual([...initialState, newCategory]);
	});
});
