import { useState } from 'react';
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
import { useNavigate } from 'react-router-dom';

const Header = ({ handleToggleSidebar }) => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [text, setText] = useState('');
	const handleLogin = () => {
		dispatch(login());
	};
	const handleChange = (e) => {
		setText(e.target.value);
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		navigate(`/search/${text}`);
	};
	return (
		<div className='header'>
			<FaBars
				className='header__menu'
				size={26}
				onClick={() => handleToggleSidebar()}
			/>
			<img src={logo} alt='' className='header__logo' />
			<form onSubmit={handleSubmit}>
				<input
					type='text'
					placeholder='Search'
					value={text}
					onChange={handleChange}
				/>
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
