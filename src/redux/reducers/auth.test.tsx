import auth from './auth';
import { LOG_IN, LOG_OUT } from '../actions';

describe('auth reducer', () => {
	it('should return the initial state', () => {
		expect(auth(undefined, {} as any)).toEqual({
			isAuthenticated: false,
		});
	});

	it('should handle LOG_IN', () => {
		expect(
			auth(
				{ isAuthenticated: false },
				{
					type: LOG_IN,
				},
			),
		).toEqual({
			isAuthenticated: true,
		});
	});

	it('should handle LOG_OUT', () => {
		expect(
			auth(
				{ isAuthenticated: true },
				{
					type: LOG_OUT,
				},
			),
		).toEqual({
			isAuthenticated: false,
		});
	});
});
