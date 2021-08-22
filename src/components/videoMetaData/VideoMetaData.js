import React, { useEffect, useRef } from 'react';
import './videoMetaData.scss';
// Icon
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import ThumbDownOutlinedIcon from '@material-ui/icons/ThumbDownOutlined';
import RemoveRedEyeOutlinedIcon from '@material-ui/icons/RemoveRedEyeOutlined';
import numeral from 'numeral';
import moment from 'moment';
import ShowMoreText from 'react-show-more-text';
// Image
import { useDispatch, useSelector } from 'react-redux';
import {
	getChannelDetails,
	checkSubscriptionChannel,
} from 'redux/actions/channel';
// Popover
import PopOver from 'components/popover/PopOver';

const VideoMetaData = ({ video: { snippet, statistics }, videoId }) => {
	const dispatch = useDispatch();
	const { isSubscribed } = useSelector((state) => state.channelDetails);
	const { accessToken } = useSelector((state) => state.auth);
	const { snippet: channelSnippet, statistics: channelStatistics } =
		useSelector((state) => state.channelDetails.channel);
	const { publishedAt, channelId, channelTitle, description, title } =
		snippet;
	const { viewCount, likeCount, dislikeCount, commentCount } = statistics;
	useEffect(() => {
		dispatch(getChannelDetails(channelId));
		if (accessToken) {
			dispatch(checkSubscriptionChannel(channelId));
		}
	}, [dispatch, channelId, accessToken]);
	return (
		<div className='videoMetaData py-2'>
			<div className='videoMetaData__title'>
				<h6>{title}</h6>
				<div className='d-flex justify-content-between align-items-center py-1'>
					<span>
						<RemoveRedEyeOutlinedIcon />
						{' ' + numeral(viewCount).format('0.a')} views •&nbsp;
						{moment(publishedAt).fromNow()}
					</span>

					<div className='videoMetaData__info'>
						<span className='me-3'>
							<ThumbUpAltOutlinedIcon />
							{numeral(likeCount).format('0.0a')}
						</span>

						<span className='me-3'>
							<ThumbDownOutlinedIcon />
							{numeral(dislikeCount).format('0.a')}
						</span>
					</div>
				</div>
			</div>
			<div className='videoMetaData__channel d-flex justify-content-between align-items-center py-3 my-2'>
				<div className='d-flex'>
					<img
						src={channelSnippet?.thumbnails?.default?.url}
						alt=''
						className='rounded-circle me-3'
					/>
					<div className='d-flex flex-column'>
						<span>{channelTitle}</span>
						<span>
							{' ' +
								numeral(
									channelStatistics?.subscriberCount,
								).format('0,a')}{' '}
							subscribers
						</span>
					</div>{' '}
				</div>
				{!accessToken ? (
					<PopOver>
						<button className='rounded border-0 p-2 m-2'>
							SUBSCRIBE
						</button>
					</PopOver>
				) : isSubscribed ? (
					<button className='button-subscribed rounded border-0 p-2 m-2'>
						SUBSCRIBED
					</button>
				) : (
					<button className='rounded border-0 p-2 m-2'>
						SUBSCRIBE
					</button>
				)}
			</div>
			<div className='videoMetaData__description'>
				<ShowMoreText
					lines={2}
					more='Show More'
					less='Show Less'
					expanded={false}
					anchorClass='showMoreText'
					truncatedEndingComponent={<br />}>
					{description}
				</ShowMoreText>
			</div>
			<hr className='videoMetaData__hr' />
		</div>
	);
};

export default VideoMetaData;
