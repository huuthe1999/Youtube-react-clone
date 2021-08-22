import AXIOS from 'configs/api';
import {
	COMMENT_LIST_SUCCESS,
	COMMENT_LIST_REQUEST,
	COMMENT_LIST_FAILED,
	ADD_COMMENT_SUCCESS,
	ADD_COMMENT_FAILED,
} from '../actionType';

export const getCommentById = (id) => async (dispatch) => {
	try {
		dispatch({ type: COMMENT_LIST_REQUEST });
		const { data } = await AXIOS('/commentThreads', {
			params: { part: 'snippet', videoId: id },
		});
		dispatch({ type: COMMENT_LIST_SUCCESS, payload: data.items });
	} catch (error) {
		dispatch({ type: COMMENT_LIST_FAILED, payload: error.message });
	}
};

export const addComment = (id, text) => async (dispatch, getState) => {
	try {
		const snippet = {
			snippet: {
				videoId: id,
				topLevelComment: {
					snippet: { textOriginal: text },
				},
			},
		};
		await AXIOS.post('/commentThreads', snippet, {
			params: { part: 'snippet' },
			headers: {
				Authorization: `Bearer ${getState().auth.accessToken}`,
			},
		});
		dispatch({ type: ADD_COMMENT_SUCCESS });
		setTimeout(() => dispatch(getCommentById(id)), 3000);
	} catch (error) {
		console.log(error.response.data);
		dispatch({
			type: ADD_COMMENT_FAILED,
			payload: error.response.data.message,
		});
	}
};
