import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getLikedVideos } from 'redux/actions/video';
import { Container, Row, Col } from 'react-bootstrap';
import PageTitle from 'components/pageTitle/PageTitle';
import InfiniteScroll from 'react-infinite-scroll-component';
import Video from 'components/video/Video';
import SkeletonVideo from 'components/skeleton/SkeletonVideo';
const Like = () => {
	const dispatch = useDispatch();
	const { videos, loading } = useSelector((state) => state.likedVideos);
	useEffect(() => {
		dispatch(getLikedVideos());
	}, [dispatch]);

	const fetchData = () => {
		dispatch(getLikedVideos(4));
	};
	return (
		<PageTitle title={`Liked Videos - Youtube`}>
			<Container>
				<Row>
					<InfiniteScroll
						dataLength={videos.length}
						next={fetchData}
						hasMore={true}
						loader={[...Array(8)].map((_, index) => (
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
							: [...Array(8)].map((_, index) => (
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

export default Like;
