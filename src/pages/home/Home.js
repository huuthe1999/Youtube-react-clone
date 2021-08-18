import React, { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import CategoryBar from 'components/categoryBar/CategoryBar';
import Video from 'components/video/Video';
import { useDispatch, useSelector } from 'react-redux';
import { getPopularVideos, getVideosByCategory } from 'redux/actions/video';
import InfiniteScroll from 'react-infinite-scroll-component';
import Skeleton from 'react-loading-skeleton';

const Home = () => {
	const dispatch = useDispatch();
	const { videos, activeVideo, loading } = useSelector(
		(state) => state.homeVideos,
	);

	useEffect(() => {
		dispatch(getPopularVideos());
	}, [dispatch]);

	const fetchData = () => {
		if (activeVideo === 'All') {
			dispatch(getPopularVideos());
		} else {
			dispatch(getVideosByCategory(activeVideo));
		}
	};
	return (
		<Container>
			<CategoryBar />
			<Row>
				<InfiniteScroll
					dataLength={videos.length}
					next={fetchData}
					hasMore={true}
					loader={
						<div className='spinner-border text-danger d-block mx-auto'></div>
					}
					className='row'>
					{loading
						? videos.map((video, index) => (
								<Col lg={3} md={4} key={index}>
									<Video video={video} />
								</Col>
						  ))
						: [...Array(20)].map((video, index) => (
								<Col lg={3} md={4} key={index}>
									<Skeleton height={180} width='100%' />
								</Col>
						  ))}
				</InfiniteScroll>
			</Row>
		</Container>
	);
};

export default Home;
