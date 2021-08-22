import React, { useEffect, useState } from 'react';
import './videoHorizontal.scss';
import { Row, Col } from 'react-bootstrap';
import AXIOS from 'configs/api';
import moment from 'moment';
import numeral from 'numeral';
import { LazyLoadImage } from 'react-lazy-load-image-component';
const VideoHorizontal = ({ video }) => {
	const {
		id,
		snippet: {
			publishedAt,
			channelId,
			title,
			description,
			channelTitle,
			thumbnails,
			publishTime,
		},
	} = video;
	const [duration, setDuration] = useState(null);
	const [countView, setCountView] = useState(null);
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
		getDetailVideo();
	}, [id]);
	return (
		<Row className='videoHorizontal mt-1 p-2 align-items-center'>
			<Col xs={6} md={6} className='videoHorizontal__left'>
				<LazyLoadImage
					src={thumbnails.medium.url}
					className='videoHorizontal__thumbnail'
					wrapperClassName='videoHorizontal__thumbnail-wrapper'
					effect='blur'
				/>
				<span className='videoHorizontal__duration'>{duration}</span>
			</Col>
			<Col xs={6} md={6} className='videoHorizontal__right p-0'>
				<p className='videoHorizontal__title mb-1'> {title}</p>
				<div className='videoHorizontal__channel d-flex justify-content-start my-1'>
					<p>{channelTitle}</p>
				</div>
				<div className='videoHorizontal__details'>
					<span>{' ' + numeral(countView).format('0.a')} views</span>
					<span>{' • ' + moment(publishedAt).fromNow()}</span>
				</div>
			</Col>
		</Row>
	);
};

export default VideoHorizontal;
