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
	SEARCH_VIDEO_REQUEST,
	SEARCH_VIDEO_SUCCESS,
	SEARCH_VIDEO_FAILED,
	SUBSCRIPTION_CHANNEL_REQUEST,
	SUBSCRIPTION_CHANNEL_SUCCESS,
	SUBSCRIPTION_CHANNEL_FAILED,
	VIDEO_CHANNEL_REQUEST,
	VIDEO_CHANNEL_SUCCESS,
	VIDEO_CHANNEL_FAILED,
	LIKED_VIDEOS_REQUEST,
	LIKED_VIDEOS_SUCCESS,
	LIKED_VIDEOS_FAILED,
} from '../actionType';
import AXIOS from 'configs/api';

export const getPopularVideos = (size) => async (dispatch, getState) => {
	try {
		dispatch({ type: HOME_VIDEO_REQUEST });
		const { data } = await AXIOS('/videos', {
			params: {
				part: 'snippet,contentDetails,statistics',
				chart: 'mostPopular',
				regionCode: 'VN',
				maxResults: size || 8,
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
		dispatch({
			type: HOME_VIDEO_FAILED,
			payload: {
				error: error.message,
				isError: true,
				index: size || 8,
			},
		});
	}
};

export const getVideosByCategory =
	(text, size) => async (dispatch, getState) => {
		try {
			dispatch({ type: HOME_VIDEO_REQUEST });
			const { data } = await AXIOS('/search', {
				params: {
					part: 'snippet',
					maxResults: size || 8,
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

export const getRelatedVideos = (id, size) => async (dispatch) => {
	try {
		dispatch({ type: RELATED_VIDEO_REQUEST });
		const { data } = await AXIOS('/search', {
			params: {
				part: 'snippet',
				relatedToVideoId: id,
				maxResults: size || 8,
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

export const getVideoSearchResult =
	(text, size) => async (dispatch, getState) => {
		try {
			dispatch({ type: SEARCH_VIDEO_REQUEST });
			const { data } = await AXIOS('/search', {
				params: {
					part: 'snippet',
					maxResults: size || 8,
					q: text,
					pageToken: getState().searchVideos.nextPageToken,
					type: 'video,channel',
				},
			});
			dispatch({
				type: SEARCH_VIDEO_SUCCESS,
				payload: {
					videos: data.items,
					nextPageToken: data.nextPageToken,
					textKey: text,
				},
			});
		} catch (error) {
			dispatch({ type: SEARCH_VIDEO_FAILED, payload: error.message });
		}
	};

export const getChannelSubscription = () => async (dispatch, getState) => {
	try {
		dispatch({ type: SUBSCRIPTION_CHANNEL_REQUEST });
		const { data } = await AXIOS('/subscriptions', {
			params: { part: 'snippet,contentDetails', mine: true },
			headers: {
				Authorization: `Bearer ${getState().auth.accessToken}`,
			},
		});
		dispatch({
			type: SUBSCRIPTION_CHANNEL_SUCCESS,
			payload: data.items,
		});
	} catch (error) {
		dispatch({
			type: SUBSCRIPTION_CHANNEL_FAILED,
			payload: error.message,
		});
	}
};

export const getVideosByChannelId = (channelId, size) => async (dispatch) => {
	try {
		dispatch({ type: VIDEO_CHANNEL_REQUEST });
		const { data } = await AXIOS('/channels', {
			params: { part: 'contentDetails', id: channelId },
		});
		const uploadPlaylistId =
			data.items[0].contentDetails.relatedPlaylists.uploads;
		const { data: dataPlaylists } = await AXIOS('/playlistItems', {
			params: {
				part: 'snippet,contentDetails',
				playlistId: uploadPlaylistId,
				maxResults: size || 8,
			},
		});

		dispatch({
			type: VIDEO_CHANNEL_SUCCESS,
			payload: dataPlaylists.items,
		});
	} catch (error) {
		dispatch({
			type: VIDEO_CHANNEL_FAILED,
			payload: error.message,
		});
	}
};

export const getLikedVideos = (size) => async (dispatch, getState) => {
	try {
		dispatch({ type: LIKED_VIDEOS_REQUEST });
		const { data } = await AXIOS('/videos', {
			params: {
				part: 'snippet,contentDetails,statistics',
				myRating: 'like',
				maxResults: size || 8,
				pageToken: getState().likedVideos.nextPageToken,
			},
			headers: {
				Authorization: `Bearer ${getState().auth.accessToken}`,
			},
		});
		dispatch({
			type: LIKED_VIDEOS_SUCCESS,
			payload: {
				videos: data.items,
				nextPageToken: data.nextPageToken,
			},
		});
	} catch (error) {
		dispatch({ type: LIKED_VIDEOS_FAILED, payload: error.message });
	}
};
