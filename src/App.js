import './App.css';
import api from './api/axiosConfig';
import {useState, useEffect} from 'react';
import Layout from "./components/Layout";
import {Route, Routes, BrowserRouter as Router} from "react-router-dom";
import Home from "./components/home/Home";
import Header from './components/header/Header';
import Trailer from './components/trailer/Trailer';
import PublicOpinion from "./components/review/PublicOpinion";
import Construction from "./components/construction/Construction";


function App() {

  return (
    <Router basename="/">
        <div className="App">
            <Header />
            <Routes>
                <Route path = "/" element = {<Layout/>}>
                    <Route path = "/" element = {<Home />} />
                    <Route path = "/Trailer/:ytTrailerId" element = {<Trailer />} />
                    <Route path = "/Reviews/:movieId" element = {<PublicOpinion />} />
                    <Route path = "*" element = {<Construction />} />
                </Route>
            </Routes>
        </div>
    </Router>
  );
}

export default App;
