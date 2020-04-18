// database/firebaseDb.js

import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCH6Rbr0O21FyVyGvbFe1gr_hccCoeZBLY",
    authDomain: "tfstage-4a6e3.firebaseapp.com",
    databaseURL: "https://tfstage-4a6e3.firebaseio.com",
    projectId: "tfstage-4a6e3",
    storageBucket: "tfstage-4a6e3.appspot.com",
    messagingSenderId: "194128458508",
    appId: "1:194128458508:android:5fb22ff9ac9bd5d99c8f29"
};

firebase.initializeApp(firebaseConfig);

export default firebase;