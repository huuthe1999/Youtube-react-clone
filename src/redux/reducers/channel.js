import {
	CHANNEL_DETAIL_REQUEST,
	CHANNEL_DETAIL_SUCCESS,
	CHANNEL_DETAIL_FAILED,
	SET_SUBSCRIPTION_STATUS,
} from '../actionType';

const initialState = {
	channel: {},
	loading: false,
	isSubscribed: false,
};
export const channelDetailsReducer = (prevState = initialState, action) => {
	switch (action.type) {
		case CHANNEL_DETAIL_REQUEST:
			return {
				...prevState,
				loading: true,
			};
		case CHANNEL_DETAIL_SUCCESS:
			return {
				...prevState,
				channel: action.payload,
				loading: false,
			};
		case CHANNEL_DETAIL_FAILED:
			return {
				...prevState,
				channel: null,
				loading: false,
				error: action.payload,
			};
		case SET_SUBSCRIPTION_STATUS:
			return {
				...prevState,
				isSubscribed: action.payload,
			};
		default:
			return prevState;
	}
};
