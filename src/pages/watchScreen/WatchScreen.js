import React, { useEffect } from 'react';
import './watchScreen.scss';
import { Row, Col } from 'react-bootstrap';
import VideoMetaData from 'components/videoMetaData/VideoMetaData';
import VideoHorizontal from 'components/videoHorizontal/VideoHorizontal';
import CommentLayout from 'components/commentLayout/CommentLayout';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getVideoById, getRelatedVideos } from 'redux/actions/video';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import PageTitle from 'components/pageTitle/PageTitle';

const WatchScreen = () => {
	const { id } = useParams();
	const dispatch = useDispatch();
	const { video, loading } = useSelector((state) => state.selectedVideo);
	const { videos, loading: relatedVideosLoading } = useSelector(
		(state) => state.relatedVideos,
	);
	useEffect(() => {
		dispatch(getVideoById(id));
		dispatch(getRelatedVideos(id));
	}, [dispatch, id]);
	return (
		<PageTitle title={`${video?.snippet?.title} - Youtube`}>
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
					{!relatedVideosLoading
						? videos
								?.filter((video) => video.snippet)
								.map((video) => (
									<VideoHorizontal
										video={video}
										key={video.id.videoId}
									/>
								))
						: [...Array(4)].map((video, index) => (
								<Row className='p-1' key={index}>
									<SkeletonTheme
										color='#343a40'
										highlightColor='#3c4147'>
										<div style={{ display: 'flex' }}>
											<Col
												className='me-1'
												xs={6}
												md={6}
												lg={6}>
												<Skeleton height={150} />
											</Col>

											<Col xs={6} md={6} lg={6}>
												<Skeleton
													height={30}
													style={{
														marginBottom: '5px',
													}}
												/>
												<Skeleton
													height={30}
													width='70%'
													style={{
														marginBottom: '5px',
													}}
												/>
											</Col>
										</div>
										<hr />
									</SkeletonTheme>
								</Row>
						  ))}
				</Col>
			</Row>
		</PageTitle>
	);
};

export default WatchScreen;
