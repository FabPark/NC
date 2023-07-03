import React, { useState, useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import {  Link, Routes, Route, useNavigate } from "react-router-dom";
import Portal from './Portal';
import PopUp from './PopUp';


const Upcoming = () => {
  // const [movies, setMovies] = useState(null);
  // var imgUrl = 'https://image.tmdb.org/t/p/w780';
    

  // moved handleclick to Portal

  // const handleclick =  async (event) => {
  //   var movieID = event.currentTarget.id;
  //   console.log(movieID);
  //   const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieID}?api_key=647298ce680820a1028160f696426edd`);
  //   console.log(response.data.title);
  //   console.log(response.data.overview);
  //   console.log(response.data.release_date);
  // };

  // moved useEffect to ModalContent

  // useEffect(() => {
  //   async function fetchData() {
  //     try {
  //       const response = await axios.get('https://api.themoviedb.org/3/movie/upcoming?api_key=647298ce680820a1028160f696426edd&language=en-US&page=1');
  //       setMovies(response.data);
  //       console.log(response.data);
  //       response.data.results.forEach((movie) => {
  //         console.log(movie.title);
  //       });
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   }
  //   fetchData();
  // }, []);

  return (
      <div className="clipping-container">
        {/* //Part A */}
        {/* {movies && (
          <>
            {movies.results.length > 0 &&
              movies.results.reduce((rows, movie, index) => {
                if (index % 4 === 0) {
                  rows.push([]);
                }
                rows[Math.floor(index / 4)].push(movie);
                return rows;
              }, []).map((row, rowIndex) => (
                <Row xs={1} md={4} className="g-4"key={rowIndex}>
                  {row.map((movie) => (
                    //On click is attached to the image 
                    // when on click happens we need the modal script to run 
                    // Modal script needs run in the handleclick function 
                    <div className= {"col"} key={movie.id} id={movie.id}> */}
                
                          {/* <Card className="text-center"> */}
                            <Portal />
      {/* <Image className= {"p-1 mb-3 shadow rounded"} variant="top" src={`${imgUrl}${movie.poster_path}`} /> */}
      {/* <Card.Title>{movie.title}</Card.Title>  */}
    {/* </Card> */}
    
    {/* //this is the test that we did  */}
    {/* <Routes>
          <Route path="/" element={<Movie />} />
        </Routes> */}
        
        {/* //Part B */}
                    {/* </div>
                  ))}
                </Row>
              ))}
          </>
        )} */}
      </div>
   
  );};

  // this was a test to see if we can have two functions/return in one page
  // function Movie () {
  //   return (
  //     <h1> hello this is awesome  </h1>
  //   )};

export default Upcoming;
