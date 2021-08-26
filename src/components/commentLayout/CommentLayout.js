import React, { useEffect, useState, useRef } from 'react';
import './CommentLayout.scss';
// Image
import avatar from 'assets/images/avatar.png';
import Comment from 'components/comment/Comment';
import { useDispatch, useSelector } from 'react-redux';
import { getCommentById, addComment } from 'redux/actions/comment';
// Popover
// import PopOver from 'components/popover/PopOver';
// import { useNavigate } from 'react-router-dom';
// Actions
import { login } from 'redux/actions/auth';

const CommentLayout = ({ videoId, commentCount }) => {
	const dispatch = useDispatch();
	const textInput = useRef(null);
	const buttons = useRef(null);
	const { accessToken } = useSelector((state) => state.auth);
	const [isActiveButton, setIsActiveButton] = useState(false);
	const { comments } = useSelector((state) => state.commentList);
	const _comments = comments?.map(
		(comment) => comment.snippet.topLevelComment,
	);
	const handleSubmitComment = (e) => {
		e.preventDefault();
		if (textInput.current.value !== '') {
			dispatch(addComment(videoId, textInput.current.value));

			handleCancelComment();
		}
	};
	const handleInputFocus = () => {
		const div = buttons.current;
		div.style.display = 'flex';
	};
	const handleCancelComment = () => {
		const div = buttons.current;
		div.style.display = 'none';
		textInput.current.value = '';
		setIsActiveButton(false);
	};
	const handleInputBlur = () => {
		const div = buttons.current;
		div.style.display = 'flex';
	};
	const handleChangeComment = () => {
		if (textInput.current.value !== '') {
			setIsActiveButton(true);
		} else {
			setIsActiveButton(false);
		}
	};
	const handleLogin = () => {
		dispatch(login());
	};
	useEffect(() => {
		dispatch(getCommentById(videoId));
	}, [dispatch, videoId]);

	return (
		<div className='commentLayout'>
			<p>{commentCount} comments</p>
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
						ref={textInput}
						onChange={handleChangeComment}
						onFocus={accessToken ? handleInputFocus : handleLogin}
						onBlur={accessToken ? handleInputBlur : () => {}}
						type='text'
						className='flex-grow-1'
						placeholder='Add a public comment ...'
					/>
					<div className='commentLayout__buttons' ref={buttons}>
						<button
							className='commentLayout__buttons__cancel rounded border-0 p-1 me-2'
							onClick={handleCancelComment}>
							Cancel
						</button>
						<button
							className={`commentLayout__buttons__comment btn rounded border-0 p-1 ${
								isActiveButton ? 'active' : `disabled`
							}`}>
							Comment
						</button>
					</div>
				</form>
			</div>

			<div className='commentLayout__list'>
				{_comments?.map((comment, index) => (
					<Comment key={comment.id} comment={comment.snippet} />
				))}
			</div>
		</div>
	);
};

export default CommentLayout;
