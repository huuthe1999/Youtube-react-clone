import React from 'react';
import { Navigate } from 'react-router-dom';
import PublicLayout from 'pages/layout/PublicLayout';
import Home from 'pages/home/Home';
import WatchScreen from 'pages/watchScreen/WatchScreen';
import Search from 'pages/search/Search';
import Subscription from 'pages/UnAuthenticated/subscription/Subscription';
import Like from 'pages/UnAuthenticated/like/Like';
import History from 'pages/UnAuthenticated/history/History';
import Channel from 'pages/channel/Channel';
import NotFound from 'pages/notFound/NotFound';
const publicRoutes = [
	{
		path: '/',
		element: <PublicLayout />,
		children: [
			{ path: '/', element: <Home /> },
			{ path: '/watch/:id', element: <WatchScreen /> },
			{ path: '/search/:query', element: <Search /> },
			{ path: '/feed/subscriptions', element: <Subscription /> },
			{ path: '/feed/like', element: <Like /> },
			// { path: '/feed/history', element: <History /> },
			{ path: '/channel/:channelId', element: <Channel /> },
			{ path: '/404', element: <NotFound /> },
			{ path: '*', element: <Navigate to='/404' /> },
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

export default publicRoutes;
