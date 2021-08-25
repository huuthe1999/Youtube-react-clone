import React, { useEffect, useState } from 'react';
import './videoHorizontal.scss';
import { Row, Col } from 'react-bootstrap';
import AXIOS from 'configs/api';
import moment from 'moment';
import numeral from 'numeral';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useNavigate } from 'react-router-dom';
const VideoHorizontal = ({ video, searchScreen, subScreen }) => {
	const {
		id,
		snippet: {
			publishedAt,
			channelId,
			title,
			description,
			channelTitle,
			thumbnails,
			resourceId,
		},
	} = video;
	const [duration, setDuration] = useState(null);
	const [countView, setCountView] = useState(null);
	const [iconChannel, setIconChannel] = useState(null);
	const [countVideo, setCountVideo] = useState(0);
	const [countSubscribers, setCountSubscribers] = useState(0);
	const isVideo = !(id.kind === 'youtube#channel' || subScreen);
	const _channelId = resourceId?.channelId || channelId;
	const navigate = useNavigate();
	const seconds = moment.duration(duration).asSeconds();
	const time = moment.utc(seconds * 1000).format('mm:ss');
	const thumbnail = !isVideo && 'videoHorizontal__thumbnail-channel';
	useEffect(() => {
		const getDetailVideo = async () => {
			const { data } = await AXIOS('/videos', {
				params: {
					part: 'contentDetails,statistics',
					id: id.videoId,
				},
			});
			setDuration(data.items[0].contentDetails.duration);
			setCountView(data.items[0].statistics.viewCount);
		};
		if (isVideo) {
			getDetailVideo();
		}
	}, [id, isVideo]);

	useEffect(() => {
		const getChannelVideo = async () => {
			const { data } = await AXIOS('/channels', {
				params: {
					part: 'snippet,status,statistics',
					id: _channelId,
				},
			});
			setIconChannel(data.items[0].snippet.thumbnails.default);
			setCountVideo(data.items[0].statistics.videoCount);
			setCountSubscribers(data.items[0].statistics.subscriberCount);
		};

		getChannelVideo();
	}, [_channelId]);

	const handleVideoClick = () => {
		isVideo
			? navigate(`/watch/${id.videoId}`)
			: navigate(`/channel/${_channelId}`);
	};
	return (
		<Row
			className='videoHorizontal p-1 mb-2 align-items-center'
			onClick={handleVideoClick}>
			<Col
				xs={6}
				md={searchScreen || subScreen ? 4 : 6}
				className='videoHorizontal__left ps-0'>
				<LazyLoadImage
					src={thumbnails.medium.url}
					className={`videoHorizontal__thumbnail ${thumbnail}`}
					wrapperClassName='videoHorizontal__thumbnail-wrapper'
					effect='blur'
				/>
				{isVideo && (
					<span className='videoHorizontal__duration'>{time}</span>
				)}
			</Col>
			<Col
				xs={6}
				md={searchScreen || subScreen ? 8 : 6}
				className='videoHorizontal__right p-0'>
				<p className='videoHorizontal__title mb-1'> {title}</p>
				{isVideo && (
					<div className='videoHorizontal__details'>
						<span>
							{' ' + numeral(countView).format('0.a')} views
						</span>
						<span>{' • ' + moment(publishedAt).fromNow()}</span>
					</div>
				)}
				<div className='videoHorizontal__channel d-flex justify-content-start my-1 align-items-center'>
					{isVideo && (
						<LazyLoadImage src={iconChannel?.url} effect='blur' />
					)}
					{isVideo ? (
						<p>{channelTitle}</p>
					) : (
						<div className='videoHorizontal__details'>
							<span>
								{' ' + numeral(countSubscribers).format('0.a')}{' '}
								subscribers
							</span>
							<span>
								{' • '}
								{countVideo} videos
							</span>
						</div>
					)}
				</div>
				<div className='videoHorizontal__details'>
					{(searchScreen || subScreen) && (
						<p className='mt-1'>{description}</p>
					)}
				</div>
			</Col>
		</Row>
	);
};

export default VideoHorizontal;
