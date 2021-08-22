import {
	HOME_VIDEO_REQUEST,
	HOME_VIDEO_SUCCESS,
	HOME_VIDEO_FAILED,
	SELECT_VIDEO_REQUEST,
	SELECT_VIDEO_SUCCESS,
	SELECT_VIDEO_FAILED,
	RELATED_VIDEO_REQUEST,
	RELATED_VIDEO_SUCCESS,
	RELATED_VIDEO_FAILED,
} from '../actionType';
import AXIOS from 'configs/api';

export const getPopularVideos = () => async (dispatch, getState) => {
	try {
		dispatch({ type: HOME_VIDEO_REQUEST });
		const { data } = await AXIOS('/videos', {
			params: {
				part: 'snippet,contentDetails,statistics',
				chart: 'mostPopular',
				regionCode: 'VN',
				maxResults: 10,
				pageToken: getState().homeVideos.nextPageToken,
			},
		});
		dispatch({
			type: HOME_VIDEO_SUCCESS,
			payload: {
				videos: data.items,
				nextPageToken: data.nextPageToken,
				category: 'All',
			},
		});
	} catch (error) {
		dispatch({ type: HOME_VIDEO_FAILED, payload: error.message });
	}
};

export const getVideosByCategory = (text) => async (dispatch, getState) => {
	try {
		dispatch({ type: HOME_VIDEO_REQUEST });
		const { data } = await AXIOS('/search', {
			params: {
				part: 'snippet',
				maxResults: 10,
				pageToken: getState().homeVideos.nextPageToken,
				q: text,
				type: 'video',
			},
		});
		dispatch({
			type: HOME_VIDEO_SUCCESS,
			payload: {
				videos: data.items,
				nextPageToken: data.nextPageToken,
				category: text,
			},
		});
	} catch (error) {
		dispatch({ type: HOME_VIDEO_FAILED, payload: error.message });
	}
};

export const getVideoById = (id) => async (dispatch) => {
	try {
		dispatch({ type: SELECT_VIDEO_REQUEST });
		const { data } = await AXIOS('/videos', {
			params: { part: 'snippet,statistics', id: id },
		});
		dispatch({ type: SELECT_VIDEO_SUCCESS, payload: data.items[0] });
	} catch (error) {
		dispatch({ type: SELECT_VIDEO_FAILED, payload: error.message });
	}
};

export const getRelatedVideos = (id) => async (dispatch) => {
	try {
		dispatch({ type: RELATED_VIDEO_REQUEST });
		const { data } = await AXIOS('/search', {
			params: {
				part: 'snippet',
				relatedToVideoId: id,
				maxResults: 10,
				type: 'video',
			},
		});
		dispatch({ type: RELATED_VIDEO_SUCCESS, payload: data.items });
	} catch (error) {
		dispatch({
			type: RELATED_VIDEO_FAILED,
			payload: error.response.data.message,
		});
	}
};
