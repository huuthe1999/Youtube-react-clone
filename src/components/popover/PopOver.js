// Popover
import { OverlayTrigger, Popover } from 'react-bootstrap';

const popover = ({ id }) => (
	<Popover id={`popover-positioned-${id}`}>
		<Popover.Title
			as='h6'
			style={{
				backgroundColor: '#16181b',
				fontSize: '16px',
				padding: '0.5rem 0.5rem',
			}}>
			Want to subscribe to this channel?
		</Popover.Title>
		<Popover.Content
			style={{
				color: '#b1bdb4',
				fontSize: '15px',
				padding: '0.5rem 0.5rem',
				backgroundColor: '#16181b',
			}}>
			<p>Sign in to subscribe to this channel.</p>
			<div className='videoMetaData__login-button'>
				<button>Sign In</button>
			</div>
		</Popover.Content>
	</Popover>
);

const PopOver = ({ children }) => {
	return (
		<OverlayTrigger
			rootClose
			trigger='click'
			placement='top-start'
			overlay={popover('top-start')}>
			{children}
		</OverlayTrigger>
	);
};

export default PopOver;
