import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Upcoming from './pages/Upcoming.js';
import MyNavbar from './navbar';
import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
import Popular from './pages/Popular.js';
import TopRated from './pages/TopRated.js';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Container from 'react-bootstrap/Container';
import Home from './pages/home.js';

export default function Main() { 

  return (
  
  
    <Container style={{ backgroundColor: "black"}}>
    <h1 style={{color: 'white'}}>
        
      </h1>

      <HashRouter>
      <MyNavbar />
      <Routes>
      <Route exact path="/" element={<Home />} />
        <Route path='/Upcoming' element= {<Upcoming />} />
        <Route path='/Popular' element= {<Popular />} />
        <Route path='/TopRated' element= {<TopRated />} />
        </Routes>
        {/* <Search onSearch={setMovies} />
        <Movies movies={movies} onMovies={setMovies}/> */}
      </HashRouter>
        
      
    </Container>
  );
}


