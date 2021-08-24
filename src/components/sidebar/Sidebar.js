import './sidebar.scss';
import { NavLink } from 'react-router-dom';
// Icon
import SubscriptionsOutlinedIcon from '@material-ui/icons/SubscriptionsOutlined';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import VideoLibraryOutlinedIcon from '@material-ui/icons/VideoLibraryOutlined';
import ThumbUpOutlinedIcon from '@material-ui/icons/ThumbUpOutlined';
import HistoryOutlinedIcon from '@material-ui/icons/HistoryOutlined';
const Sidebar = ({ isToggleSidebar, handleToggleSidebar }) => {
	return (
		<nav
			className={isToggleSidebar ? 'sidebar toggle' : 'sidebar'}
			onClick={() => handleToggleSidebar(false)}>
			<NavLink end to='/' activeClassName='activeLink'>
				<li>
					<HomeOutlinedIcon />
					<span>Home</span>
				</li>
			</NavLink>
			<li>
				<WhatshotIcon />
				<span>Trending</span>
			</li>
			<NavLink to='/feed/subscriptions' activeClassName='activeLink'>
				<li>
					<SubscriptionsOutlinedIcon />
					<span>Subscription</span>
				</li>
			</NavLink>
			<li>
				<ThumbUpOutlinedIcon />
				<span>Liked Videos</span>
			</li>
			<hr />
			<NavLink to='/feed/library' activeClassName='activeLink'>
				<li>
					<VideoLibraryOutlinedIcon />
					<span>Library</span>
				</li>
			</NavLink>
			<NavLink to='/feed/history' activeClassName='activeLink'>
				<li>
					<HistoryOutlinedIcon />
					<span>History</span>
				</li>
			</NavLink>
			<hr />
		</nav>
	);
};

export default Sidebar;
