import budget from './budget';
import { SET_BUDGET } from '../actions';

describe('budget reducer', () => {
	beforeEach(() => {
		localStorage.clear();
	});

	it('should return the initial state', () => {
		expect(budget(undefined, {} as any)).toEqual(0);
	});

	it('should handle SET_BUDGET', () => {
		const amount = 5000;

		const newState = budget(0, {
			type: SET_BUDGET,
			payload: amount,
		});

		expect(newState).toEqual(amount);

		expect(localStorage.getItem('budget')).toEqual(JSON.stringify(amount));
	});
});
