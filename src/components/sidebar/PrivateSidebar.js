import './sidebar.scss';
// Icon
import SubscriptionsOutlinedIcon from '@material-ui/icons/SubscriptionsOutlined';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import VideoLibraryOutlinedIcon from '@material-ui/icons/VideoLibraryOutlined';
import ThumbUpOutlinedIcon from '@material-ui/icons/ThumbUpOutlined';
import ExitToAppOutlinedIcon from '@material-ui/icons/ExitToAppOutlined';
import HistoryOutlinedIcon from '@material-ui/icons/HistoryOutlined';
import { useDispatch } from 'react-redux';
import { log_out } from 'redux/actions/auth';
import { NavLink } from 'react-router-dom';

const Sidebar = ({ isToggleSidebar, handleToggleSidebar }) => {
	const dispatch = useDispatch();
	const handleLogOut = () => {
		dispatch(log_out());
	};
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
			<NavLink to='/feed/subscriptions' activeClassName='activeLink'>
				<li>
					<SubscriptionsOutlinedIcon />
					<span>Subscription</span>
				</li>
			</NavLink>
			<NavLink to='/feed/like' activeClassName='activeLink'>
				<li>
					<ThumbUpOutlinedIcon />
					<span>Liked Videos</span>
				</li>
			</NavLink>
			{/* <hr />
			<NavLink to='/feed/history' activeClassName='activeLink'>
				<li>
					<HistoryOutlinedIcon />
					<span>History</span>
				</li>
			</NavLink> */}
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
