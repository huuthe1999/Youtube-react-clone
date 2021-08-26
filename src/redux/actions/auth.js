import auth from 'configs/firebase.js';
import firebase from 'firebase/app';
import {
	LOGIN_REQUEST,
	LOGIN_SUCCESS,
	LOAD_PROFILE,
	LOGIN_FAILED,
	LOG_OUT,
} from '../actionType';

export const login = () => async (dispatch) => {
	try {
		dispatch({
			type: LOGIN_REQUEST,
		});
		const provider = new firebase.auth.GoogleAuthProvider();
		provider.addScope('https://www.googleapis.com/auth/youtube.force-ssl');
		const res = await auth.signInWithPopup(provider);

		const accessToken = res.credential.accessToken;

		const profile = {
			name: res.additionalUserInfo.profile.name,
			avatar: res.additionalUserInfo.profile.picture,
		};

		sessionStorage.setItem('accessToken', accessToken);
		sessionStorage.setItem('userProfile', JSON.stringify(profile));
		dispatch({ type: LOGIN_SUCCESS, payload: accessToken });

		dispatch({ type: LOAD_PROFILE, payload: profile });
	} catch (error) {
		dispatch({ type: LOGIN_FAILED, payload: error.messages });
	}
};

export const log_out = () => async (dispatch) => {
	await auth.signOut();
	dispatch({
		type: LOG_OUT,
	});
	sessionStorage.removeItem('accessToken');
	sessionStorage.removeItem('userProfile');
};
