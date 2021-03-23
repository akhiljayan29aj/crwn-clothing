import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
	apiKey: 'AIzaSyBEmyWV1txCwP3pxS1JiJJFKSnZD4NMqDg',
	authDomain: 'crwn-db-1eff7.firebaseapp.com',
	projectId: 'crwn-db-1eff7',
	storageBucket: 'crwn-db-1eff7.appspot.com',
	messagingSenderId: '902948436433',
	appId: '1:902948436433:web:99b4f50eaac45cac5348f0',
	measurementId: 'G-HTLBY8VW7J'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
