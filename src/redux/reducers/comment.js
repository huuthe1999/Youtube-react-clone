import {
	COMMENT_LIST_SUCCESS,
	COMMENT_LIST_REQUEST,
	COMMENT_LIST_FAILED,
} from '../actionType';

const initialState = {
	comments: null,
	loading: false,
};

export const commentListReducer = (state = initialState, action) => {
	switch (action.type) {
		case COMMENT_LIST_REQUEST: {
			return {
				...state,
				loading: true,
			};
		}
		case COMMENT_LIST_SUCCESS: {
			return {
				...state,
				comments: action.payload,
				loading: false,
			};
		}
		case COMMENT_LIST_FAILED: {
			return {
				...state,
				comments: null,
				loading: false,
				error: action.payload,
			};
		}
		default: {
			return state;
		}
	}
};
