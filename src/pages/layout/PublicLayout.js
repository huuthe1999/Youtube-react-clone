import React, { useState } from 'react';
import Header from 'components/header/Header';
import Sidebar from 'components/sidebar/Sidebar';
import { Container } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';

const PublicLayout = () => {
	const [isToggleSidebar, setIsToggleSidebar] = useState(false);
	const handleToggleSidebar = () => {
		setIsToggleSidebar(!isToggleSidebar);
	};
	return (
		<>
			<Header handleToggleSidebar={handleToggleSidebar} />
			<div className='app_container'>
				<Sidebar
					isToggleSidebar={isToggleSidebar}
					handleToggleSidebar={handleToggleSidebar}
				/>
				<Container fluid className='app_main'>
					<Outlet />
				</Container>
			</div>
		</>
	);
};

export default PublicLayout;
