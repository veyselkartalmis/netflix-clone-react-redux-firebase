import React from 'react';
import './App.css';
import HomeScreen from "./screens/HomeScreen/HomeScreen";
import LoginScreen from "./screens/LoginScreen/LoginScreen";
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";

function App() {
  const user = null;

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
