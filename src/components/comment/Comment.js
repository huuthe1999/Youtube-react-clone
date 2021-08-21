import React from 'react';
import './comment.scss';
import avatar from 'assets/images/avatar.png';
import moment from 'moment';
const Comment = () => {
	return (
		<div className='comment py-2 d-flex'>
			<img src={avatar} alt='avatar' className='rounded-circle me-3' />
			<div className='comment__body'>
				<span className='comment__header'>Clash Of Clan</span>
				<span> {' • ' + moment('2021-03-17').fromNow()}</span>
				<p>
					Happy Debugging! Let me know your thoughts on this project.
				</p>
			</div>
		</div>
	);
};

export default Comment;