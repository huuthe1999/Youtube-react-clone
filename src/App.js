import React from 'react';
import { useRoutes } from 'react-router-dom';
import 'app.scss';
import privateRoutes from 'configs/routes/privateRoute';
import publicRoutes from 'configs/routes/publicRoute';
import { useSelector } from 'react-redux';
const App = () => {
	const { accessToken } = useSelector((state) => state.auth);
	const routeListProtected = useRoutes(privateRoutes);
	const routeListPublic = useRoutes(publicRoutes);
	return <>{accessToken ? routeListProtected : routeListPublic}</>;
};

export default App;
