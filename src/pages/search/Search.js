import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './search.scss';
import { useDispatch, useSelector } from 'react-redux';
import { getVideoSearchResult } from 'redux/actions/video';
import { Container, Row, Col } from 'react-bootstrap';
import VideoHorizontal from 'components/videoHorizontal/VideoHorizontal';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import PageTitle from 'components/pageTitle/PageTitle';
const Search = () => {
	const { query } = useParams();
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getVideoSearchResult(query));
	}, [dispatch, query]);
	const { videos, loading } = useSelector((state) => state.searchVideos);

	return (
		<PageTitle title={`${query} - Youtube`}>
			<Container>
				{!loading
					? videos?.map((video) => (
							<VideoHorizontal
								video={video}
								key={video.id.videoId}
								searchScreen
							/>
					  ))
					: [...Array(10)].map((_, index) => (
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
												style={{ marginBottom: '5px' }}
											/>
											<Skeleton
												height={30}
												width='70%'
												style={{ marginBottom: '5px' }}
											/>
										</Col>
									</div>
									<hr />
								</SkeletonTheme>
							</Row>
					  ))}
			</Container>
		</PageTitle>
	);
};

export default Search;
