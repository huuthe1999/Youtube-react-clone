import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import PrivateSidebar from 'components/sidebar/PrivateSidebar';
import { Container } from 'react-bootstrap';
import PrivateHeader from 'components/header/PrivateHeader';

const PrivateLayout = () => {
	const [isToggleSidebar, setIsToggleSidebar] = useState(false);
	const handleToggleSidebar = () => {
		setIsToggleSidebar(!isToggleSidebar);
	};
	return (
		<>
			<PrivateHeader handleToggleSidebar={handleToggleSidebar} />
			<div className='app_container'>
				<PrivateSidebar
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

export default PrivateLayout;
