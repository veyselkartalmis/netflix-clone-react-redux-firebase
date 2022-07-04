import React, { useEffect } from "react";
import "./App.css";
import HomeScreen from "./screens/HomeScreen/HomeScreen";
import LoginScreen from "./screens/LoginScreen/LoginScreen";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { auth } from "./firebase";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/userSlice";

function App() {

	const user = useSelector(selectUser);
	const dispatch = useDispatch();

	useEffect(() => {
		const unsubscribe = auth.onAuthStateChanged((userAuth) => {
			if (userAuth) {
				dispatch(login({
					uid: userAuth.uid,
					email: userAuth.email,
				}));
			} else {
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
