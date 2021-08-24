import React from 'react';
import './library.scss';
// Icon
import VideoLibraryOutlinedIcon from '@material-ui/icons/VideoLibraryOutlined';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import { useDispatch } from 'react-redux';
import { login } from 'redux/actions/auth';
import PageTitle from 'components/pageTitle/PageTitle';

const Library = () => {
	const dispatch = useDispatch();
	const handleLogin = () => {
		dispatch(login());
	};
	return (
		<PageTitle title='Library - YouTube'>
			<div className='library'>
				<VideoLibraryOutlinedIcon className='library__icon' />
				<p>Enjoy your favorite videos</p>
				<p>Sign in to access videos that you’ve liked or saved</p>
				<div className='library__login-button'>
					<button onClick={handleLogin}>
						<AccountCircleOutlinedIcon className='icon' />
						Sign In
					</button>
				</div>
			</div>
		</PageTitle>
	);
};

export default Library;
