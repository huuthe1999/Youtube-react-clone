import React from 'react';
import './CommentLayout.scss';
// Image
import avatar from 'assets/images/avatar.png';
import Comment from 'components/comment/Comment';

const CommentLayout = () => {
	const handleSubmitComment = () => {
		alert('Please enter');
	};
	return (
		<div className='commentLayout'>
			<p>1234 comments</p>
			<div className='commentLayout__form d-flex w-100 my-4 justify-content-center'>
				<img
					src={avatar}
					alt='avatar'
					className='rounded-circle me-3'
				/>
				<form
					onSubmit={handleSubmitComment}
					className='d-flex flex-grow-1 flex-column justify-content-center mt-2'>
					<input
						type='text'
						className='flex-grow-1'
						placeholder='Add a public comment ...'
					/>
					<div className='commentLayout__buttons'>
						<button className='commentLayout__buttons__cancel rounded border-0 p-1 me-2'>
							Cancel
						</button>
						<button className='commentLayout__buttons__comment rounded border-0 p-1'>
							Comment
						</button>
					</div>
				</form>
			</div>

			<div className='commentLayout__list'>
				{[...Array(10)].map((_, id) => (
					<Comment key={id} />
				))}
			</div>
		</div>
	);
};

export default CommentLayout;
