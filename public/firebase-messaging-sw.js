importScripts('https://www.gstatic.com/firebasejs/8.4.3/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.4.3/firebase-messaging.js');

var firebaseConfig = {
  apiKey: "AIzaSyDqWUevxsVTHxo1XMDaE92PCdw_DToLbHs",
    authDomain: "ts-quiz-app.firebaseapp.com",
    databaseURL: "https://ts-quiz-app-default-rtdb.firebaseio.com",
    projectId: "ts-quiz-app",
    storageBucket: "ts-quiz-app.appspot.com",
    messagingSenderId: "1031743419892",
    appId: "1:1031743419892:web:fe8812f8979c9f95ec35a1",
    measurementId: "G-L9R92ZMTYT"
}
firebase.initializeApp(firebaseConfig)
const messaging = firebase.messaging()

messaging.onBackgroundMessage((payload) => {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  // Customize notification here
  const notificationTitle = 'Background Message Title';
  const notificationOptions = {
    title: payload.notification.title,
    body: payload.notification.body,
    icon: './firebase-logo.png'
  };
  self.registration.showNotification(notificationTitle,
    notificationOptions);
});

// // eslint-disable-next-line no-restricted-globals
self.addEventListener('onnotificationclick', (event) => {
  console.log(event, 'notification click handler')
  // return event
  event.notification.close();
  event.waitUntil(self.clients.openWindow(event.notification.data));
})
