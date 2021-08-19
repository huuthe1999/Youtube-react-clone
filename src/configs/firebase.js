import firebase from 'firebase/app';
import 'firebase/auth';

// export const firebaseConfig = {
// 	apiKey: 'AIzaSyD1iMchM3D9-eFyotVWl-VLquSze-bC2vA',
// 	authDomain: 'clone-react-c4897.firebaseapp.com',
// 	projectId: 'clone-react-c4897',
// 	storageBucket: 'clone-react-c4897.appspot.com',
// 	messagingSenderId: '777433895352',
// 	appId: '1:777433895352:web:6584cf81774371a4317f4d',
// };

export const firebaseConfig = {
	apiKey: 'AIzaSyDZjGdP6rxSYPGZCt3HDxRCoxpMvIniq-o',
	authDomain: 'react-clone-705a1.firebaseapp.com',
	projectId: 'react-clone-705a1',
	storageBucket: 'react-clone-705a1.appspot.com',
	messagingSenderId: '774125598700',
	appId: '1:774125598700:web:9c7571d734110578ed32c9',
	measurementId: 'G-Q7KYBTCS4T',
};

firebase.initializeApp(firebaseConfig);

export default firebase.auth();
