import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseConfig = {
	apiKey: "AIzaSyCLQnjCGSZxMB5iyQssCuCtlSHkZ_ZkSR4",
	authDomain: "netflix-clone-6ae96.firebaseapp.com",
	projectId: "netflix-clone-6ae96",
	storageBucket: "netflix-clone-6ae96.appspot.com",
	messagingSenderId: "271069388357",
	appId: "1:271069388357:web:4f5a8975adfa8c80090d2c",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };

//Firebase üzerinden databaes ve stripe extension aktif edildi.