import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyCsnacC3sVcvXuh8cUchsmfGA8qGc7jYcc",
    authDomain: "expensify-2e4f6.firebaseapp.com",
    databaseURL: "https://expensify-2e4f6.firebaseio.com",
    projectId: "expensify-2e4f6",
    storageBucket: "expensify-2e4f6.appspot.com",
    messagingSenderId: "130525043253"
};

firebase.initializeApp(config);

firebase.database().ref().set({
  name: 'sivarasan ponnuthurai'
});
