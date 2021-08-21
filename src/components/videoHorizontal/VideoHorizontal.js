import React from 'react';
import './videoHorizontal.scss';
import { Row, Col } from 'react-bootstrap';
import AXIOS from 'configs/api';
import moment from 'moment';
import numeral from 'numeral';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import RemoveRedEyeOutlinedIcon from '@material-ui/icons/RemoveRedEyeOutlined';
const VideoHorizontal = () => {
	const seconds = moment.duration('1000').asSeconds();
	const time = moment.utc(seconds * 1000).format('mm:ss');
	return (
		<Row className='videoHorizontal mt-1 py-2 align-items-center'>
			<Col xs={6} md={6} className='videoHorizontal__left'>
				<LazyLoadImage
					src='https://i.ytimg.com/vi/TlB_eWDSMt4/hqdefault.jpg?s…AFwAcABBg==&rs=AOn4CLDJ1VwNgHSvZ-7bEsuHXILyy-CWkA'
					className='videoHorizontal__thumbnail'
					wrapperClassName='videoHorizontal__thumbnail-wrapper'
					effect='blur'
				/>
				<span className='videoHorizontal__duration'>{time}</span>
			</Col>
			<Col xs={6} md={6} className='videoHorizontal__right p-0'>
				<p className='videoHorizontal__title mb-1'>
					{' '}
					Fully Functional YouTube Clone | React | Redux | Firebase |
					YouTube API |
				</p>
				<div className='videoHorizontal__channel d-flex justify-content-start my-1'>
					<p>Programming with Mosh</p>
				</div>
				<div className='videoHorizontal__details'>
					<span>
						<RemoveRedEyeOutlinedIcon fontSize='small' />
						{' ' + numeral(10000000).format('0.a')} views
					</span>
					<span>{' • ' + moment('2021-06-5').fromNow()}</span>
				</div>
			</Col>
		</Row>
	);
};

export default VideoHorizontal;
