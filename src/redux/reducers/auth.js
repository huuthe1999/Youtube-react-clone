import {
	LOGIN_SUCCESS,
	LOGIN_FAILED,
	LOGIN_REQUEST,
	LOAD_PROFILE,
	LOG_OUT,
} from '../actionType';

const initialState = {
	accessToken: sessionStorage.getItem('accessToken')
		? sessionStorage.getItem('accessToken')
		: null,
	user: null,
	loading: false,
	isLoggedIn: false,
	error: null,
};
export const authReducer = (prevState = initialState, action) => {
	switch (action.type) {
		case LOGIN_REQUEST:
			return {
				...prevState,
				loading: true,
			};
		case LOGIN_SUCCESS:
			return {
				...prevState,
				accessToken: action.payload,
				loading: false,
				isLoggedIn: true,
			};
		case LOGIN_FAILED:
			return {
				...prevState,
				accessToken: null,
				loading: false,
				error: action.payload,
			};
		case LOAD_PROFILE:
			return {
				...prevState,
				user: action.payload,
				loading: false,
			};
		case LOG_OUT:
			return {
				...prevState,
				accessToken: null,
				user: null,
			};
		default:
			return prevState;
	}
};
