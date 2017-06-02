// Initialize Firebase
var config = {
	apiKey: "AIzaSyCIZp816TudSCk9TTMlVkTtTHGalrlhdRk",
    authDomain: "etnische-repertoires-adam.firebaseapp.com",
    databaseURL: "https://etnische-repertoires-adam.firebaseio.com",
    projectId: "etnische-repertoires-adam",
    storageBucket: "etnische-repertoires-adam.appspot.com",
    messagingSenderId: "418594832261"
};
firebase.initializeApp(config);
var rootRef = firebase.database().ref();