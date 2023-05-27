import { SET_BUDGET, BudgetActionTypes } from '../actions';

const initialState = JSON.parse(localStorage.getItem('budget') || '0');

const budget = (state = initialState, action: BudgetActionTypes) => {
	switch (action.type) {
		case SET_BUDGET:
			localStorage.setItem('budget', JSON.stringify(action.payload));
			return action.payload;
		default:
			return state;
	}
};

export default budget;
