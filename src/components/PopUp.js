import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';



const PopUp = props => {
    const [movieData, setMovieData] = useState(null);
    // const [reviews, setReviews] = useState(null);
    var imgUrl = "https://image.tmdb.org/t/p/w780";

    // const imageStyle = {
    //   backgroundImage: `url(${imgUrl})`,
    //   backgroundSize: "cover",
    //   backgroundPosition: "center",
    //   backgroundRepeat: "no-repeat",
    //   width: "100%",
    //   height: "100%",
    //   position: "absolute",
    //   top: 0,
    //   left: 0,
    // };
  

        useEffect(() => {
          const fetchData = async () => {
              try {     
      
                const response = await axios.get(`https://api.themoviedb.org/3/movie/${props.gogo}?api_key=647298ce680820a1028160f696426edd`);
                setMovieData(response.data);
        //         const reviewsResponse = await fetch(`https://api.themoviedb.org/3/movie/${props.gogo}/reviews?language=en-US&page=1&api_key=647298ce680820a1028160f696426edd`);
        // const reviewsData = await reviewsResponse.json();
        // setReviews(reviewsData);
              } catch (error) {
                console.error(error);
              }
            }
            fetchData();
          }, [props.gogo]);
    
    const { setPopUp } = props 



    
    return (
        <div className="PopUp">
{/* <div
      className="modal show"
      style={{ display: 'block', position: 'initial' }}
    > */}
    <div
        className="modal show"
        style={{
          display: 'block',
          position: 'initial',
          backgroundImage: `url(${imgUrl})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
      <Modal.Dialog>
        <Modal.Header>
          <Modal.Title>Movie Info</Modal.Title>
        </Modal.Header>

        <Modal.Body>
        {/* <div style={imageStyle}></div> */}
        {movieData ? (
        // <div style={{ backgroundImage: `url(${movieData.backdrop_path})`, backgroundSize: `cover`}}>
        <div>
          <div>Title: {movieData.title}</div>
          <div>Overview: {movieData.overview}</div>
          <div>Release Date: {movieData.release_date}</div>
        </div>
      ) : (
        <div>No movie data available.</div>
      )}
             {/* {reviews ? (
              <div>
                <h3>Reviews:</h3>
                {reviews.results.map((review) => (
                  <div key={review.id}>
                    <p>{review.author}</p>
                    <p>{review.content}</p>
                    <hr />
                  </div>
                ))}
              </div>
            ) : (
              <div>No reviews available.</div>
            )} */}
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