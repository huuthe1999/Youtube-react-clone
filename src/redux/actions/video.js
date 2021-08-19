import {
	HOME_VIDEO_REQUEST,
	HOME_VIDEO_SUCCESS,
	HOME_VIDEO_FAILED,
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
