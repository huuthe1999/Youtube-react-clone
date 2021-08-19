import React from 'react';
import { Navigate } from 'react-router-dom';
import PrivateLayout from 'pages/layout/PrivateLayout';
import Search from 'pages/search/Search';
import Home from 'pages/home/Home';
import WatchScreen from 'pages/watchScreen/WatchScreen';
const privateRoutes = [
	{
		path: '/',
		element: <PrivateLayout />,
		children: [
			{ path: '/', element: <Home /> },
			{ path: '/watch/:id', element: <WatchScreen /> },
			// { path: '/login', element: <LoginView /> },
			// { path: '/register', element: <RegisterView /> },
			// { path: '/forgot_password', element: <FogotPassWordView /> },
			// { path: "/active/:token", element: <ActiveAccountView /> },
			// { path: "/reset_password/:token", element: <ResetPassWordView /> },
			// { path: "/profile", element: <Navigate to="/login" /> },
			// { path: "/change_password", element: <Navigate to="/" /> },
			// { path: "/game/:id", element: <Navigate to="/login" /> },
			// { path: '/404', element: <NotFoundView /> },
			// { path: '*', element: <Navigate to="/404" /> },
		],
	},
];

export default privateRoutes;
