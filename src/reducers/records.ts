// reducers/records.ts
import { ADD_RECORD, RecordActionTypes } from '../actions';

const initialState = JSON.parse(localStorage.getItem('records') || '[]');

const records = (state = initialState, action: RecordActionTypes) => {
	switch (action.type) {
		case ADD_RECORD:
			return [...state, action.payload];
		default:
			return state;
	}
};

export default records;
