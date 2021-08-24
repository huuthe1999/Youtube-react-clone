import React from 'react';
import './library.scss';
// Icon
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
				<h1>Library</h1>
			</div>
		</PageTitle>
	);
};

export default Library;
