import React from 'react';
import './watchScreen.scss';
import { Row, Col } from 'react-bootstrap';
import VideoMetaData from 'components/videoMetaData/VideoMetaData';
import VideoHorizontal from 'components/videoHorizontal/VideoHorizontal';
import CommentLayout from 'components/commentLayout/CommentLayout';

const WatchScreen = () => {
	return (
		<Row>
			<Col lg={8}>
				<div className='watchScreen__player'>
					<iframe
						width='100%'
						height='100%'
						src='https://www.youtube.com/embed/Yoxd3_ec4ns?autoplay=0&rel=0'
						title='YouTube video player'
						frameBorder='0'
						allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;fullscreen'
						allowFullScreen></iframe>
				</div>
				<VideoMetaData />
				<CommentLayout />
			</Col>
			<Col lg={4}>
				{[...Array(10)].map((_, id) => (
					<VideoHorizontal key={id} />
				))}
			</Col>
		</Row>
	);
};

export default WatchScreen;
