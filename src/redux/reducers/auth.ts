import { AuthActionTypes, LOG_IN, LOG_OUT } from '../actions';

interface AuthState {
	isAuthenticated: boolean;
}

const initialState: AuthState = {
	isAuthenticated: false,
};

const auth = (state = initialState, action: AuthActionTypes): AuthState => {
	switch (action.type) {
		case LOG_IN:
			return { ...state, isAuthenticated: true };
		case LOG_OUT:
			return { ...state, isAuthenticated: false };
		default:
			return state;
	}
};

export default auth;
