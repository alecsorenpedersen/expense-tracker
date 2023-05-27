import { combineReducers } from 'redux';
import categories from './categories';
import records from './records';
import budget from './budget';

const rootReducer = combineReducers({
	categories,
	records,
	budget,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
