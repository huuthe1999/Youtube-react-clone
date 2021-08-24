import React from 'react';
import './subscription.scss';
// Icon
import SubscriptionsOutlinedIcon from '@material-ui/icons/SubscriptionsOutlined';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import { useDispatch } from 'react-redux';
import { login } from 'redux/actions/auth';
import PageTitle from 'components/pageTitle/PageTitle';

const Subscription = () => {
	const dispatch = useDispatch();
	const handleLogin = () => {
		dispatch(login());
	};
	return (
		<PageTitle title='Subscriptions - Youtube'>
			<div className='subscription'>
				<SubscriptionsOutlinedIcon className='subscription__icon' />
				<p>Don’t miss new videos</p>
				<p>
					Sign in to see updates from your favorite YouTube channels
				</p>
				<div className='subscription__login-button'>
					<button onClick={handleLogin}>
						<AccountCircleOutlinedIcon className='icon' />
						Sign In
					</button>
				</div>
			</div>
		</PageTitle>
	);
};

export default Subscription;
