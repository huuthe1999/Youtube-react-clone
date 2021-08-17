import {
	HOME_VIDEO_REQUEST,
	HOME_VIDEO_SUCCESS,
	HOME_VIDEO_FAILED,
} from '../actionType';
import AXIOS from 'configs/api';
export const getPopularVideos = () => async (dispatch) => {
	try {
		dispatch({ type: HOME_VIDEO_REQUEST });
		const { data } = await AXIOS('/videos', {
			params: {
				part: 'snippet,contentDetails,statistics',
				chart: 'mostPopular',
				regionCode: 'VN',
				maxResults: 20,
				pageToken: '',
			},
		});
		dispatch({
			type: HOME_VIDEO_SUCCESS,
			payload: {
				videos: data.items,
				nextPageToken: data.nextPageToken,
			},
		});
	} catch (error) {
		dispatch({ type: HOME_VIDEO_FAILED, payload: error.messages });
	}
};
