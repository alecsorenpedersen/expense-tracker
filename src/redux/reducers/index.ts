import { combineReducers } from 'redux';
import categories from './categories';
import records from './records';
import budget from './budget';
import auth from './auth';

const rootReducer = combineReducers({
	categories,
	records,
	budget,
	auth,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
