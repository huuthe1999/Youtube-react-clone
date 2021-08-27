import React, { useEffect } from 'react';
import './subscription.scss';
import { useDispatch, useSelector } from 'react-redux';
import { getChannelSubscription } from 'redux/actions/video';
import { Container, Row, Col } from 'react-bootstrap';
import VideoHorizontal from 'components/videoHorizontal/VideoHorizontal';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import PageTitle from 'components/pageTitle/PageTitle';
import InfiniteScroll from 'react-infinite-scroll-component';
const Subscription = () => {
	const dispatch = useDispatch();
	const { videos, loading } = useSelector(
		(state) => state.subscriptionChannelVideos,
	);
	useEffect(() => {
		dispatch(getChannelSubscription());
	}, [dispatch]);

	const fetchData = () => {
		dispatch(getChannelSubscription(4));
	};
	return (
		<PageTitle title='Subscriptions - Youtube'>
			<Container fluid>
				<InfiniteScroll
					dataLength={videos.length}
					next={fetchData}
					hasMore={true}
					loader={[...Array(4)].map((_, index) => (
						<Row className='p-1' key={index}>
							<SkeletonTheme
								color='#343a40'
								highlightColor='#3c4147'>
								<div style={{ display: 'flex' }}>
									<Col className='me-1' xs={6} md={6} lg={6}>
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
					className='row'>
					{!loading
						? videos?.map((video) => (
								<VideoHorizontal
									key={video.id}
									video={video}
									subScreen
								/>
						  ))
						: [...Array(4)].map((_, index) => (
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
				</InfiniteScroll>
			</Container>
		</PageTitle>
	);
};

export default Subscription;
