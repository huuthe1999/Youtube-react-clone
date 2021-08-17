import './sidebar.scss';
// Icon
import SubscriptionsOutlinedIcon from '@material-ui/icons/SubscriptionsOutlined';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import VideoLibraryOutlinedIcon from '@material-ui/icons/VideoLibraryOutlined';
import ThumbUpOutlinedIcon from '@material-ui/icons/ThumbUpOutlined';
import ExitToAppOutlinedIcon from '@material-ui/icons/ExitToAppOutlined';
import { useDispatch } from 'react-redux';
import { log_out } from 'redux/actions/auth';

const Sidebar = ({ isToggleSidebar, handleToggleSidebar }) => {
	const dispatch = useDispatch();
	const handleLogOut = () => {
		dispatch(log_out());
	};
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
			<hr />
			<li onClick={handleLogOut}>
				<ExitToAppOutlinedIcon />
				<span>Log Out</span>
			</li>
			<hr />
		</nav>
	);
};

export default Sidebar;
