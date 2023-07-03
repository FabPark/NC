import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';



const PopUp = props => {
    const [movieData, setMovieData] = useState(null);
  

        useEffect(() => {
          const fetchData = async () => {
            // async function fetchData() {
              try {     
                // var movieID = props.movieId;
                // const movieID = props.movieId; //  passing movieId as a prop to the component
                // console.log(movieID);
                // console.log(props.movieID)
                const response = await axios.get(`https://api.themoviedb.org/3/movie/${props.gogo}?api_key=647298ce680820a1028160f696426edd`);
                setMovieData(response.data);
               // response.data.results.forEach((movie) => {
               //   console.log(movie.title);
               // });
              //  console.log(response.data.title);
              //  console.log(response.data.overview);
              //  console.log(response.data.release_date);
              } catch (error) {
                console.error(error);
              }
            }
            fetchData();
          }, [props.gogo]);
    
    // function that takes boolean as param to conditionally display popup
    const { setPopUp } = props 

    return (
        <div className="PopUp">
<div
      className="modal show"
      style={{ display: 'block', position: 'initial' }}
    >
      <Modal.Dialog>
        <Modal.Header>
          <Modal.Title>Movie Info</Modal.Title>
        </Modal.Header>

        <Modal.Body>
        {movieData ? (
        <div style={{ backgroundImage: `url(${movieData.backdrop_path})`, backgroundSize: `cover`}}>
          <div>Title: {movieData.title}</div>
          <div>Overview: {movieData.overview}</div>
          <div>Release Date: {movieData.release_date}</div>
        </div>
      ) : (
        <div>No movie data available.</div>
      )}
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={()=> setPopUp(false)} >Close</Button>
          {/* <Button variant="primary">Save changes</Button> */}

        </Modal.Footer>
      </Modal.Dialog>
    </div>
    </div>

    );
}

export default PopUp;