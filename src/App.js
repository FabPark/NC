import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Upcoming from './components/Upcoming.js';
import MyNavbar from './navbar';
import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
import Popular from './Popular.js';
import Latest from './Latest.js';
import TopRated from './TopRated.js';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Container from 'react-bootstrap/Container';
// import Movies from "./components/movies";
// import Search from "./components/search";


//import logo from './logo.jpeg';


export default function Main() { 
  const [data, setData] = useState(null);
  // const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=647298ce680820a1028160f696426edd');
        setData(response.data);
        console.log (response.data);
        console.log (response.data.results);
        console.log (response.data.results.poster_path);
        

      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);

  return (
  
  
    <Container style={{ backgroundColor: "black"}}>
    <h1 style={{color: 'white'}}>
        
      </h1>

      <HashRouter>
      <MyNavbar />
      <Routes>
        <Route path='/Upcoming' element= {<Upcoming />} />
        <Route path='/Popular' element= {<Popular />} />
        <Route path='/Latest' element= {<Latest />} />
        <Route path='/TopRated' element= {<TopRated />} />
        </Routes>
        {/* <Search onSearch={setMovies} />
        <Movies movies={movies} onMovies={setMovies}/> */}
      </HashRouter>
        
      
    </Container>
  );
}


