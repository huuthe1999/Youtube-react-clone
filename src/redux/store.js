import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { authReducer } from './reducers/auth';
import { videoReducer, selectedVideoReducer } from './reducers/video';
import { channelDetailsReducer } from './reducers/channel';

const rootReducer = combineReducers({
	auth: authReducer,
	homeVideos: videoReducer,
	selectedVideo: selectedVideoReducer,
	channelDetails: channelDetailsReducer,
});

const store = createStore(
	rootReducer,
	composeWithDevTools(applyMiddleware(thunk)),
);

export default store;
