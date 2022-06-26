import React from 'react';
import './App.css';
import HomeScreen from "./HomeScreen";
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<HomeScreen />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
