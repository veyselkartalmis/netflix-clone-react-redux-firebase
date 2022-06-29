import React, { useEffect } from "react";
import "./App.css";
import HomeScreen from "./screens/HomeScreen/HomeScreen";
import LoginScreen from "./screens/LoginScreen/LoginScreen";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { auth } from "./firebase";
import { useDispatch } from "react-redux";
import { login, logout } from "./features/userSlice";

function App() {
	const user = null;
	const dispatch = useDispatch();

	useEffect(() => {
		const unsubscribe = auth.onAuthStateChanged((userAuth) => {
			if (userAuth) {
				//Logged In
				dispatch(login({
					uid: userAuth.uid,
					email: userAuth.email,
				}));
			} else {
				//Logged Out
				dispatch(logout);
			}
		});

		return unsubscribe;
	}, []);

	return (
		<div className="app">
			{!user ? (
				<LoginScreen />
			) : (
				<BrowserRouter>
					<Routes>
						<Route exact path="/" element={<HomeScreen />}></Route>
					</Routes>
				</BrowserRouter>
			)}
		</div>
	);
}

export default App;
