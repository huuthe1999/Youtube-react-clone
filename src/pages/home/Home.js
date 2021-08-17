import React, { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import CategoryBar from 'components/categoryBar/CategoryBar';
import Video from 'components/video/Video';
import { useDispatch, useSelector } from 'react-redux';
import { getPopularVideos } from 'redux/actions/video';

const Home = () => {
	const dispatch = useDispatch();
	const { videos } = useSelector((state) => state.homeVideos);
	useEffect(() => {
		dispatch(getPopularVideos());
	}, [dispatch]);
	return (
		<Container>
			<CategoryBar />
			<Row>
				{videos.map((video) => (
					<Col lg={3} md={4} key={video.id}>
						<Video video={video} />
					</Col>
				))}
			</Row>
		</Container>
	);
};

export default Home;
