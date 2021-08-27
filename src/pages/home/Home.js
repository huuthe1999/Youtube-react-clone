import React, { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import CategoryBar from 'components/categoryBar/CategoryBar';
import Video from 'components/video/Video';
import { useDispatch, useSelector } from 'react-redux';
import { getPopularVideos, getVideosByCategory } from 'redux/actions/video';
import InfiniteScroll from 'react-infinite-scroll-component';
import SkeletonVideo from 'components/skeleton/SkeletonVideo';
import PageTitle from 'components/pageTitle/PageTitle';

const Home = () => {
	const dispatch = useDispatch();
	const { videos, activeCategory, loading } = useSelector(
		(state) => state.homeVideos,
	);

	useEffect(() => {
		dispatch(getPopularVideos());
	}, [dispatch]);

	const fetchData = () => {
		if (activeCategory === 'All') {
			dispatch(getPopularVideos());
		} else {
			dispatch(getVideosByCategory(activeCategory, 4));
		}
	};
	return (
		<PageTitle title='Youtube'>
			<Container>
				<CategoryBar />
				<Row>
					<InfiniteScroll
						dataLength={videos.length}
						next={fetchData}
						hasMore={true}
						loader={[...Array(4)].map((_, index) => (
							<Col lg={3} md={4} key={index}>
								<SkeletonVideo />
							</Col>
						))}
						className='row'>
						{!loading
							? videos.map((video, index) => (
									<Col lg={3} md={4} key={index}>
										<Video video={video} />
									</Col>
							  ))
							: [...Array(4)].map((_, index) => (
									<Col lg={3} md={4} key={index}>
										<SkeletonVideo />
									</Col>
							  ))}
					</InfiniteScroll>
				</Row>
			</Container>
		</PageTitle>
	);
};

export default Home;
