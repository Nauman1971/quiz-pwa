import firebase from 'firebase/app';
import 'firebase/messaging';
import 'firebase/analytics';

const firebaseConfig = {
    apiKey: "AIzaSyDqWUevxsVTHxo1XMDaE92PCdw_DToLbHs",
    authDomain: "ts-quiz-app.firebaseapp.com",
    projectId: "ts-quiz-app",
    databaseURL: 'https://ts-quiz-app-default-rtdb.firebaseio.com',
    storageBucket: "ts-quiz-app.appspot.com",
    messagingSenderId: "1031743419892",
    appId: "1:1031743419892:web:fe8812f8979c9f95ec35a1"
};

firebase.initializeApp(firebaseConfig);

export default firebase;

// firebase.analytics()
const messaging = firebase.messaging();
export const requestFirebaseNotificationPermission = () =>

    new Promise((resolve, reject) => {
        messaging
        .getToken({vapidKey: "BLIcM5mKYzexnwXQw9gnye1IqLZMm5SZH_4QsHBkdum-U2jUxhkIl20N4KcCJ2QwteO9UvQ8BBG06vO_qukFhiw"})
        .then((firebaseToken) => {
            resolve(firebaseToken);
        })
        .catch((err) => {
            reject(err);
        });
    });

    export const onMessageListener = () =>
    new Promise((resolve) => {
        messaging.onMessage((payload) => {
        resolve(payload);
        });
    });