import AXIOS from 'configs/api';
import {
	CHANNEL_DETAIL_REQUEST,
	CHANNEL_DETAIL_SUCCESS,
	CHANNEL_DETAIL_FAILED,
	SET_SUBSCRIPTION_STATUS,
} from '../actionType';

export const getChannelDetails = (id) => async (dispatch) => {
	try {
		dispatch({ type: CHANNEL_DETAIL_REQUEST });
		const { data } = await AXIOS('/channels', {
			params: { part: 'snippet,statistics,contentDetails', id },
		});
		dispatch({ type: CHANNEL_DETAIL_SUCCESS, payload: data.items[0] });
	} catch (error) {
		dispatch({ type: CHANNEL_DETAIL_FAILED, payload: error.message });
	}
};

export const checkSubscriptionChannel = (id) => async (dispatch, getState) => {
	try {
		const { data } = await AXIOS('/subscriptions', {
			params: { part: 'snippet', forChannelId: id, mine: true },
			headers: {
				Authorization: `Bearer ${getState().auth.accessToken}`,
			},
		});
		dispatch({
			type: SET_SUBSCRIPTION_STATUS,
			payload: data.items.length !== 0,
		});
	} catch (error) {}
};
