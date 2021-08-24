import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { authReducer } from './reducers/auth';
import {
	videoReducer,
	selectedVideoReducer,
	relatedVideoReducer,
	searchVideoReducer,
	subscriptionChannelReducer,
	channelVideosReducer,
} from './reducers/video';
import { channelDetailsReducer } from './reducers/channel';
import { commentListReducer } from './reducers/comment';

const rootReducer = combineReducers({
	auth: authReducer,
	homeVideos: videoReducer,
	selectedVideo: selectedVideoReducer,
	channelDetails: channelDetailsReducer,
	commentList: commentListReducer,
	relatedVideos: relatedVideoReducer,
	searchVideos: searchVideoReducer,
	subscriptionChannelVideos: subscriptionChannelReducer,
	channelVideos: channelVideosReducer,
});

const store = createStore(
	rootReducer,
	composeWithDevTools(applyMiddleware(thunk)),
);

export default store;
