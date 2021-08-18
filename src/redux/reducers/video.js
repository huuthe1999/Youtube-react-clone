import {
	HOME_VIDEO_REQUEST,
	HOME_VIDEO_SUCCESS,
	HOME_VIDEO_FAILED,
} from '../actionType';

const initialState = {
	videos: [],
	nextPageToken: null,
	activeCategory: 'All',
	loading: false,
};

export const videoReducer = (state = initialState, action) => {
	switch (action.type) {
		case HOME_VIDEO_REQUEST: {
			return {
				...state,
				loading: true,
			};
		}
		case HOME_VIDEO_SUCCESS: {
			return {
				...state,
				videos:
					state.activeVideo === action.payload.category
						? [...state.videos, ...action.payload.videos]
						: action.payload.videos,
				nextPageToken: action.payload.nextPageToken,
				activeCategory: action.payload.category,
				loading: false,
			};
		}
		case HOME_VIDEO_FAILED: {
			return {
				...state,
				loading: false,
				error: action.payload,
			};
		}
		default: {
			return initialState;
		}
	}
};
