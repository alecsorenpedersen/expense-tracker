// reducers/index.ts
import { combineReducers } from 'redux';
import categories from './categories';
import records from './records';

const rootReducer = combineReducers({
	categories,
	records,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
