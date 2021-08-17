import firebase from 'firebase/app';
import 'firebase/auth';

export const firebaseConfig = {
	apiKey: 'AIzaSyD1iMchM3D9-eFyotVWl-VLquSze-bC2vA',
	authDomain: 'clone-react-c4897.firebaseapp.com',
	projectId: 'clone-react-c4897',
	storageBucket: 'clone-react-c4897.appspot.com',
	messagingSenderId: '777433895352',
	appId: '1:777433895352:web:6584cf81774371a4317f4d',
};

firebase.initializeApp(firebaseConfig);

export default firebase.auth();
