import './header.scss';
import { useState } from 'react';
import { useSelector } from 'react-redux';
// Icon
import { FaBars } from 'react-icons/fa';
import { AiOutlineSearch } from 'react-icons/ai';
import { MdNotifications, MdApps } from 'react-icons/md';
// Image
import logo from 'assets/images/logo.png';
import { useNavigate, Link } from 'react-router-dom';

const PrivateHeader = ({ handleToggleSidebar }) => {
	const navigate = useNavigate();
	const [text, setText] = useState('');

	const handleChange = (e) => {
		setText(e.target.value);
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		navigate(`/search/${text}`);
	};
	const { user } = useSelector((state) => state.auth);
	return (
		<div className='header'>
			<FaBars
				className='header__menu'
				size={26}
				onClick={() => handleToggleSidebar()}
			/>
			<Link end to={'/'}>
				<img src={logo} alt='' className='header__logo' />
			</Link>
			<form onSubmit={handleSubmit}>
				<input
					type='text'
					placeholder='Search'
					onChange={handleChange}
				/>
				<button type='submit'>
					<AiOutlineSearch size={22} />
				</button>
			</form>

			<div className='header__icons'>
				<MdNotifications size={28} />
				<MdApps size={28} />
				<img src={user?.avatar} alt='Avatar' />
			</div>
		</div>
	);
};

export default PrivateHeader;
