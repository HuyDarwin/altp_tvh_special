// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyCyr2-vF_xT3BwycefQ-OjzaUfxAJfvu8o",
    authDomain: "altp-cgv-con.firebaseapp.com",
    databaseURL: "https://altp-cgv-con-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "altp-cgv-con",
    storageBucket: "altp-cgv-con.appspot.com",
    messagingSenderId: "340289168041",
    appId: "1:340289168041:web:8b408936cf1676d3fcbfb8",
    measurementId: "G-ZJ72EQYXVP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
import { getDatabase, ref, set, update, onValue } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-database.js";
const db = getDatabase();
export function Reset(){
	set(ref(db), {
		question: '',
		answerA: '',
		answerB: '',
		answerC: '',
		answerD: '',
		questionReveal: 0
	})
}
export function Update(q,a,b,c,d,qr){
	update(ref(db), {
		question: q,
		answerA: a,
		answerB: b,
		answerC: c,
		answerD: d,
		questionReveal: qr
	})
}