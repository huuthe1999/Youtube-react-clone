import React, { useState } from 'react';
import Header from 'components/header/Header';
import Sidebar from 'components/sidebar/Sidebar';
import { Container } from 'react-bootstrap';
import { Route, Switch, useRoutes } from 'react-router-dom';
import Home from 'pages/home/Home';
import 'app.scss';
import privateRoutes from 'configs/routes/privateRoute';
import publicRoutes from 'configs/routes/publicRoute';
import { useSelector } from 'react-redux';

const App = () => {
	// const [isToggleSidebar, setIsToggleSidebar] = useState(false);
	// const handleToggleSidebar = () => {
	// 	setIsToggleSidebar(!isToggleSidebar);
	// };
	// return (
	// 	<>
	// 		<Header handleToggleSidebar={handleToggleSidebar} />
	// 		<div className='app_container'>
	// 			<Sidebar
	// 				isToggleSidebar={isToggleSidebar}
	// 				handleToggleSidebar={handleToggleSidebar}
	// 			/>
	// 			<Container fluid className='app_main'>
	// 				<Home />
	// 			</Container>
	// 		</div>
	// 	</>
	// );
	const { accessToken } = useSelector((state) => state.auth);
	const routeListProtected = useRoutes(privateRoutes);
	const routeListPublic = useRoutes(publicRoutes);
	return <>{accessToken ? routeListProtected : routeListPublic}</>;
};

export default App;
