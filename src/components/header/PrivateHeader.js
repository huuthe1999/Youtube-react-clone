import './header.scss';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// Actions
import { login } from 'redux/actions/auth';
// Icon
import { FaBars } from 'react-icons/fa';
import { AiOutlineSearch } from 'react-icons/ai';
import { MdNotifications, MdApps } from 'react-icons/md';
// Image
import logo from 'assets/images/logo.png';
import avatar from 'assets/images/avatar.png';

const PrivateHeader = ({ handleToggleSidebar }) => {
	// const dispatch = useDispatch();
	// const { accessToken } = useSelector((state) => state.auth);

	// useEffect(() => {
	// 	if (accessToken) {
	// 		console.log('OKE');
	// 	} else {
	// 		console.log('Not OKE');
	// 	}
	// }, [accessToken]);
	const { user } = useSelector((state) => state.auth);
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

			<div className='header__icons'>
				<MdNotifications size={28} />
				<MdApps size={28} />
				<img src={user?.avatar} alt='Avatar' />
			</div>
		</div>
	);
};

export default PrivateHeader;
