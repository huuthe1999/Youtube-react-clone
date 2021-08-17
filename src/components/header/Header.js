import './header.scss';
import { useDispatch } from 'react-redux';
// Actions
import { login } from 'redux/actions/auth';
// Icon
import { FaBars } from 'react-icons/fa';
import { AiOutlineSearch } from 'react-icons/ai';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
// Image
import logo from 'assets/images/logo.png';

const Header = ({ handleToggleSidebar }) => {
	const dispatch = useDispatch();

	const handleLogin = () => {
		dispatch(login());
	};

	return (
		<div className='header'>
			<FaBars
				className='header__menu'
				size={26}
				onClick={() => handleToggleSidebar()}
			/>
			<img src={logo} alt='' className='header__logo' />
			<form action=''>
				<input type='text' placeholder='Search' />
				<button type='submit'>
					<AiOutlineSearch size={22} />
				</button>
			</form>

			<div className='header__login-button'>
				<button onClick={handleLogin}>
					<AccountCircleOutlinedIcon className='icon' />
					Sign In
				</button>
			</div>
		</div>
	);
};

export default Header;
