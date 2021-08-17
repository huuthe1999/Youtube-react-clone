import './video.scss';
import { useEffect, useState } from 'react';
// Icon
import RemoveRedEyeOutlinedIcon from '@material-ui/icons/RemoveRedEyeOutlined';
import AXIOS from 'configs/api';
import moment from 'moment';
const Video = ({ video }) => {
	const {
		id,
		contentDetails: { duration },
		snippet: {
			channelId,
			channelTitle,
			description,
			publishedAt,
			title,
			thumbnails: { medium },
		},
	} = video;
	// const [duration, setDuration] = useState(null);
	const seconds = moment.duration(duration).asSeconds();
	const time = moment.utc(seconds * 1000).format('mm:ss');
	// useEffect(() => {
	// 	const getDetailVideo = async () => {
	// 		const res = await AXIOS('/videos', {
	// 			params: {
	// 				part: 'contentDetails,statistics',
	// 				id: id,
	// 			},
	// 		});
	// 		console.log(res);
	// 	};
	// 	getDetailVideo();
	// }, [id]);
	return (
		<div className='video'>
			<div className='video__top'>
				<img src={medium.url} alt='' />
				<span>{time}</span>
			</div>
			<div className='video__title'>
				Create react app by Mr.Siro ft Sky Son Tung
			</div>
			<div className='video__detail'>
				<span>
					<RemoveRedEyeOutlinedIcon /> 5 views •
				</span>
				<span>5 day ago</span>
			</div>
			<div className='video__chanel'>
				<img
					src='https://yt3.ggpht.com/mp5KpbkTzi7oBLi7P7HQm0MA8r0y2jaWHcYJn1bpPt_Y9r_PMXVRJ3eSnKyrrKjWkV7IQ-wp=s68-c-k-c0x00ffffff-no-rj'
					alt=''
				/>
				<p>FreeCodeCamp</p>
			</div>
		</div>
	);
};

export default Video;
