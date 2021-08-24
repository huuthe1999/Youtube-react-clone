import React from 'react';
import './comment.scss';
import moment from 'moment';
const Comment = ({ comment }) => {
	const {
		textDisplay,
		authorDisplayName,
		authorProfileImageUrl,
		publishedAt,
		updatedAt,
	} = comment;
	return (
		<div className='comment py-2 d-flex'>
			<img
				src={authorProfileImageUrl}
				alt='avatar'
				className='rounded-circle me-3'
			/>
			<div className='comment__body'>
				<span className='comment__header'>{authorDisplayName}</span>
				<span>
					{' '}
					{' • '}
					{updatedAt !== publishedAt
						? `${moment(updatedAt).fromNow()} (edited)`
						: moment(publishedAt).fromNow()}
				</span>
				<p dangerouslySetInnerHTML={{ __html: textDisplay }} />
			</div>
		</div>
	);
};

export default Comment;
