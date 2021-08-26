import {
	CHANNEL_DETAIL_REQUEST,
	CHANNEL_DETAIL_SUCCESS,
	CHANNEL_DETAIL_FAILED,
	SET_SUBSCRIPTION_STATUS,
} from '../actionType';

const initialState = {
	channel: {},
	channelFaker: {
		kind: 'youtube#channel',
		etag: 'sbjV7ZhcwZcJxgDxa9iLs_qFoYU',
		id: 'UC8butISFwT-Wl7EV0hUK0BQ',
		snippet: {
			title: 'freeCodeCamp.org',
			description: 'Learn to code for free.',
			customUrl: 'freecodecamp',
			publishedAt: '2014-12-16T21:18:48Z',
			thumbnails: {
				default: {
					url: 'https://yt3.ggpht.com/ytc/AKedOLRkU2-RDemsCSaVVsPwc-yxtWruCB1Gr2VIgQKOKg=s88-c-k-c0x00ffffff-no-rj',
					width: 88,
					height: 88,
				},
				medium: {
					url: 'https://yt3.ggpht.com/ytc/AKedOLRkU2-RDemsCSaVVsPwc-yxtWruCB1Gr2VIgQKOKg=s240-c-k-c0x00ffffff-no-rj',
					width: 240,
					height: 240,
				},
				high: {
					url: 'https://yt3.ggpht.com/ytc/AKedOLRkU2-RDemsCSaVVsPwc-yxtWruCB1Gr2VIgQKOKg=s800-c-k-c0x00ffffff-no-rj',
					width: 800,
					height: 800,
				},
			},
			localized: {
				title: 'freeCodeCamp.org',
				description: 'Learn to code for free.',
			},
			country: 'US',
		},
		contentDetails: {
			relatedPlaylists: {
				likes: '',
				uploads: 'UU8butISFwT-Wl7EV0hUK0BQ',
			},
		},
		statistics: {
			viewCount: '219458912',
			subscriberCount: '4070000',
			hiddenSubscriberCount: false,
			videoCount: '1191',
		},
	},
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
				channel: prevState.channelFaker,
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
