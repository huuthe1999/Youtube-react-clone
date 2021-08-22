import React, { useEffect } from 'react';
import './watchScreen.scss';
import { Row, Col } from 'react-bootstrap';
import VideoMetaData from 'components/videoMetaData/VideoMetaData';
import VideoHorizontal from 'components/videoHorizontal/VideoHorizontal';
import CommentLayout from 'components/commentLayout/CommentLayout';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getVideoById, getRelatedVideos } from 'redux/actions/video';

const WatchScreen = () => {
	const { id } = useParams();
	const dispatch = useDispatch();
	const { video, loading } = useSelector((state) => state.selectedVideo);
	const { videos, loadding: relatedVideosLoading } = useSelector(
		(state) => state.relatedVideos,
	);
	useEffect(() => {
		dispatch(getVideoById(id));
		dispatch(getRelatedVideos(id));
	}, [dispatch, id]);
	return (
		<Row>
			<Col lg={8}>
				<div className='watchScreen__player'>
					<iframe
						width='100%'
						height='100%'
						src={`https://www.youtube.com/embed/${id}?autoplay=1&rel=0`}
						title={video?.snippet?.title || 'Video Default'}
						frameBorder='0'
						allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;fullscreen'></iframe>
				</div>
				{loading ? (
					<h5>Loading</h5>
				) : (
					<VideoMetaData video={video} videoId={id} />
				)}

				<CommentLayout
					videoId={id}
					commentCount={video?.statistics?.commentCount}
				/>
			</Col>
			<Col lg={4}>
				{!relatedVideosLoading &&
					videos
						?.filter((video) => video.snippet)
						.map((video) => (
							<VideoHorizontal
								video={video}
								key={video.id.videoId}
							/>
						))}
			</Col>
		</Row>
	);
};

export default WatchScreen;
