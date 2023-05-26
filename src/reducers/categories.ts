// reducers/categories.ts
import { ADD_CATEGORY, CategoryActionTypes } from '../actions';

const categories = (state: string[] = [], action: CategoryActionTypes) => {
	switch (action.type) {
		case ADD_CATEGORY:
			return [...state, action.payload];
		default:
			return state;
	}
};

export default categories;
