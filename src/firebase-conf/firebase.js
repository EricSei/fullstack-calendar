import firebase from 'firebase/app';
import 'firebase/auth';

var prodConfig = {
	apiKey: "AIzaSyD_TSgWacAv3tEOT9jHjfpwd5Fz73f5Sb4",
	authDomain: "spotify-events-af226.firebaseapp.com",
	databaseURL: "https://spotify-events-af226.firebaseio.com",
	projectId: "spotify-events-af226",
	storageBucket: "spotify-events-af226.appspot.com",
	messagingSenderId: "393182702525"
};

var devConfig = {
	apiKey: "AIzaSyD_TSgWacAv3tEOT9jHjfpwd5Fz73f5Sb4",
	authDomain: "spotify-events-af226.firebaseapp.com",
	databaseURL: "https://spotify-events-af226.firebaseio.com",
	projectId: "spotify-events-af226",
	storageBucket: "spotify-events-af226.appspot.com",
	messagingSenderId: "393182702525"
};
const config = process.env.NODE_ENV === 'production'
	? prodConfig
	: devConfig;

if (!firebase.apps.length) {
	firebase.initializeApp(config);
}

const auth = firebase.auth();
export {auth}; 
