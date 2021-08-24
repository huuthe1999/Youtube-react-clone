import React from 'react';
import './history.scss';
// Icon
import HistoryOutlinedIcon from '@material-ui/icons/HistoryOutlined';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import { useDispatch } from 'react-redux';
import { login } from 'redux/actions/auth';
import PageTitle from 'components/pageTitle/PageTitle';

const History = () => {
	const dispatch = useDispatch();
	const handleLogin = () => {
		dispatch(login());
	};
	return (
		<PageTitle title='History - Youtube'>
			<div className='library'>
				<HistoryOutlinedIcon className='library__icon' />
				<p>Keep track of what you watch</p>
				<p>SWatch history isn't viewable when signed out.</p>
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

export default History;
