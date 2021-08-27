import React, { useEffect } from 'react';
import './channel.scss';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getVideosByChannelId } from 'redux/actions/video';
import PageTitle from 'components/pageTitle/PageTitle';
import { Container, Row, Col } from 'react-bootstrap';
import Video from 'components/video/Video';
import SkeletonVideo from 'components/skeleton/SkeletonVideo';
import numeral from 'numeral';
import {
	getChannelDetails,
	checkSubscriptionChannel,
} from 'redux/actions/channel';
const Channel = () => {
	const { channelId } = useParams();
	const { loading, videos } = useSelector((state) => state.channelVideos);
	const dispatch = useDispatch();
	const { isSubscribed, channel } = useSelector(
		(state) => state.channelDetails,
	);
	const { snippet, statistics } = channel;
	useEffect(() => {
		dispatch(getVideosByChannelId(channelId));
		dispatch(getChannelDetails(channelId));
		dispatch(checkSubscriptionChannel(channelId));
	}, [dispatch, channelId]);
	return (
		<PageTitle title={!loading ? snippet?.title : ''}>
			<div className='channelHeader d-flex justify-content-between align-items-center'>
				<div className='d-flex align-items-center'>
					<img src={snippet?.thumbnails?.default?.url} alt='' />

					<div className='ml-3 channelHeader__details'>
						<p>{snippet?.title}</p>
						<span>
							{numeral(statistics?.subscriberCount).format('0,a')}{' '}
							subscribers
						</span>
					</div>
				</div>

				{isSubscribed ? (
					<button className='channelHeader__button channelHeader__button-subscribed rounded border-0'>
						SUBSCRIBED
					</button>
				) : (
					<button className='channelHeader__button rounded border-0'>
						SUBSCRIBE
					</button>
				)}
			</div>
			<Container fluid>
				<Row>
					{!loading
						? videos?.map((video) => (
								<Col md={4} lg={3} key={video.id.videoId}>
									<Video video={video} channelScreen />
								</Col>
						  ))
						: [...Array(4)].map((video, index) => (
								<Col lg={3} md={4} key={index}>
									<SkeletonVideo />
								</Col>
						  ))}
				</Row>
			</Container>
		</PageTitle>
	);
};

export default Channel;
