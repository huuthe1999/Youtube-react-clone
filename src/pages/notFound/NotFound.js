import React from 'react';
import './notFound.scss';
// Image
import image from 'assets/images/monkey.png';
import logo from 'assets/images/logo.png';
import { Link } from 'react-router-dom';
import PageTitle from 'components/pageTitle/PageTitle';
const NotFound = () => {
	return (
		<PageTitle title='404 Not Found'>
			<div className='notFound'>
				<img src={image} alt='NotFound' />
				<p>
					This page isn't available. Sorry about that. Try searching
					for something else.
				</p>
				<Link end to='/'>
					<img src={logo} alt='' className='notFound__logo' />
				</Link>
			</div>
		</PageTitle>
	);
};

export default NotFound;
