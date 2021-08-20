import React from 'react';
import './videoMetaData.scss';
// Icon
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import ThumbDownOutlinedIcon from '@material-ui/icons/ThumbDownOutlined';
import RemoveRedEyeOutlinedIcon from '@material-ui/icons/RemoveRedEyeOutlined';
import numeral from 'numeral';
import moment from 'moment';
import ShowMoreText from 'react-show-more-text';
// Image
import avatar from 'assets/images/avatar.png';
const VideoMetaData = () => {
	return (
		<div className='videoMetaData py-2'>
			<div className='videoMetaData__title'>
				<h5>Video Title</h5>
				<div className='d-flex justify-content-between align-items-center py-1'>
					<span>
						<RemoveRedEyeOutlinedIcon />
						{' ' + numeral(10000).format('0.a')} views •&nbsp;
						{moment('2021-06-8').fromNow()}
					</span>

					<div className='videoMetaData__info'>
						<span className='me-3'>
							<ThumbUpAltOutlinedIcon />
							{numeral(1000099).format('0.0a')}
						</span>

						<span className='me-3'>
							<ThumbDownOutlinedIcon />
							{numeral(200).format('0.a')}
						</span>
					</div>
				</div>
			</div>
			<div className='videoMetaData__channel d-flex justify-content-between align-items-center py-3 my-2'>
				<div className='d-flex'>
					<img src={avatar} alt='' className='rounded-circle me-3' />
					<div className='d-flex flex-column'>
						<span>Clash Of Clan</span>
						<span>
							{' ' + numeral(2000).format('0,a')} subscribers
						</span>
					</div>
				</div>
				<button className='rounded border-0 p-2 m-2'>SUBSCRIBE</button>
			</div>
			<div className='videoMetaData__description'>
				<ShowMoreText
					lines={2}
					more='Show More'
					less='Show Less'
					expanded={false}
					anchorClass='showMoreText'
					truncatedEndingComponent={<br />}>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Dolore corrupti incidunt vel? Possimus libero tempora,
					tenetur molestias consequatur velit beatae itaque atque
					alias dignissimos laudantium eveniet odit aliquid numquam
					nobis minus quod minima maiores suscipit recusandae
					sapiente! Alias, omnis quo? Minus perferendis totam ex
					aperiam cupiditate fuga accusamus ipsum temporibus!
				</ShowMoreText>
			</div>
			<hr className='videoMetaData__hr' />
		</div>
	);
};

export default VideoMetaData;
