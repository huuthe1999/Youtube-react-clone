import React from 'react';
import './history.scss';
// Icon
// import HistoryOutlinedIcon from '@material-ui/icons/HistoryOutlined';
// import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
// import { useDispatch } from 'react-redux';
// import { login } from 'redux/actions/auth';
import PageTitle from 'components/pageTitle/PageTitle';
const History = () => {
	// const dispatch = useDispatch();
	// const handleLogin = () => {
	// 	dispatch(login());
	// };
	return (
		<PageTitle title='History - Youtube'>
			<div className='library'>
				<h1>History</h1>
			</div>
		</PageTitle>
	);
};

export default History;
