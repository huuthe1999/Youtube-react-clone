import './video.scss';
import { useEffect, useState } from 'react';
// Icon
import RemoveRedEyeOutlinedIcon from '@material-ui/icons/RemoveRedEyeOutlined';
import AXIOS from 'configs/api';
import moment from 'moment';
import numeral from 'numeral';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useNavigate } from 'react-router-dom';
const Video = ({ video, channelScreen }) => {
	const {
		id,
		snippet: {
			channelId,
			channelTitle,
			publishedAt,
			title,
			thumbnails: { medium },
		},
		contentDetails,
	} = video;
	const [duration, setDuration] = useState(null);
	const [countViews, setCountViews] = useState(null);
	const [iconChannel, setIconChannel] = useState(null);
	const navigate = useNavigate();
	const seconds = moment.duration(duration).asSeconds();
	const time = moment.utc(seconds * 1000).format('mm:ss');
	const videoId = id?.videoId || contentDetails?.videoId || id;

	useEffect(() => {
		const getDetailVideo = async () => {
			const { data } = await AXIOS('/videos', {
				params: {
					part: 'contentDetails,statistics',
					id: videoId,
				},
			});
			setDuration(data.items[0].contentDetails.duration);
			setCountViews(data.items[0].statistics.viewCount);
		};
		getDetailVideo();
	}, [videoId]);

	useEffect(() => {
		const getChannelVideo = async () => {
			const { data } = await AXIOS('/channels', {
				params: {
					part: 'snippet,status',
					id: channelId,
				},
			});
			setIconChannel(data.items[0].snippet.thumbnails.default);
		};

		getChannelVideo();
	}, [channelId]);

	const handleVideoClick = () => {
		navigate(`/watch/${videoId}`);
	};
	return (
		<div className='video' onClick={handleVideoClick}>
			<div className='video__top'>
				{/* <img src={medium.url} alt='' /> */}
				<LazyLoadImage src={medium.url} effect='blur' />
				<span className='video__top__duration'>{time}</span>
			</div>
			<div className='video__title'>{title}</div>
			<div className='video__detail'>
				<span>
					<RemoveRedEyeOutlinedIcon />
					{' ' + numeral(countViews).format('0.a')} views
				</span>
				<span>{' • ' + moment(publishedAt).fromNow()}</span>
			</div>
			{!channelScreen && (
				<div className='video__chanel'>
					{/* <img src={iconChannel?.url} alt='' /> */}
					<LazyLoadImage src={iconChannel?.url} effect='blur' />
					<p>{channelTitle}</p>
				</div>
			)}
		</div>
	);
};

export default Video;
