import './sidebar.scss';
// Icon
import SubscriptionsOutlinedIcon from '@material-ui/icons/SubscriptionsOutlined';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import VideoLibraryOutlinedIcon from '@material-ui/icons/VideoLibraryOutlined';
import ThumbUpOutlinedIcon from '@material-ui/icons/ThumbUpOutlined';
const Sidebar = ({ isToggleSidebar, handleToggleSidebar }) => {
	return (
		<nav
			className={isToggleSidebar ? 'sidebar toggle' : 'sidebar'}
			onClick={() => handleToggleSidebar(false)}>
			<li>
				<HomeOutlinedIcon />
				<span>Home</span>
			</li>
			<li>
				<WhatshotIcon />
				<span>Trending</span>
			</li>
			<li>
				<SubscriptionsOutlinedIcon />
				<span>Subscription</span>
			</li>
			<li>
				<VideoLibraryOutlinedIcon />
				<span>Library</span>
			</li>
			<li>
				<ThumbUpOutlinedIcon />
				<span>Liked Videos</span>
			</li>
		</nav>
	);
};

export default Sidebar;
