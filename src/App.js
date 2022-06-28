import React, { useEffect } from "react";
import "./App.css";
import HomeScreen from "./screens/HomeScreen/HomeScreen";
import LoginScreen from "./screens/LoginScreen/LoginScreen";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { auth } from "./firebase";

function App() {
	const user = null;

	useEffect(() => {
		const unsubscribe = auth.onAuthStateChanged((userAuth) => {
			if (userAuth) {
				//Logged In
			} else {
				//Logged Out
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
