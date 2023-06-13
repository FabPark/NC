import React, { useState, useEffect } from 'react';
import './pic.css'
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';


const Upcoming = () => {
  const [movies, setMovies] = useState(null);
  var imgUrl = 'https://image.tmdb.org/t/p/w780';
  
  const HandleClick = event => {
    useEffect(() => {
      async function fetchData() {
        try {
          const response = await axios.get('https://api.themoviedb.org/3/movie/upcoming?api_key=647298ce680820a1028160f696426edd&language=en-US&page=1');
          setMovies(response.data);
          console.log(response.data);
          response.data.results.forEach((movie) => {
            console.log("hello thi si si dsofjal;kfj");
          });
        } catch (error) {
          console.error(error);
        }
      }
      fetchData();
    }, [])};
  
  // const click = async (event) => {
  //   // console.log(event.target);
  //   // console.log('Image clicked');
  //   // response.data.results.forEach((movie) => {
  //     // console.log("hello");
  //   }
  
  
  // const movieID = event.target.dataset.movieID;
  // }

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get('https://api.themoviedb.org/3/movie/upcoming?api_key=647298ce680820a1028160f696426edd&language=en-US&page=1');
        setMovies(response.data);
        console.log(response.data);
        response.data.results.forEach((movie) => {
          console.log(movie.title);
        });
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);
  return (
      <>
        {movies && (
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
                    <div className="col" key={movie.id}>
                          <Card className="text-center">
      <Image className= "p-1 mb-3 shadow rounded" variant="top" src={`${imgUrl}${movie.poster_path}`} onClick = {HandleClick} />
        {/* <Card.Title>{movie.title}</Card.Title>  */}
    </Card>
                    </div>
                  ))}
                </Row>
              ))}
          </>
        )}
      </>
    
  );
}




  //     <div>
  //       {movies.results.map(results => (
  //         //we need results.length and divide by 3. 
  //         // Rows = total movies/ number of columns 
  //         <div class="col">
  //         <div 
  //         key={results.id}>
  //           {results.title}
  //           <img 
  //           src={`${imgUrl}${results.poster_path}`} 
  //           alt={results.title}
  //           style={{backgroundImage:`url(${imgUrl})`}}
  //           className="imgbox"
  //           onClick={click}
  //           ></img>
  //         </div></div>
  //       ))}
  //     </div>
  //   )}
  // </div>
  

 
        {/* <div className="container text-center">
            <div class="row">
            <div class="col">
              Colmn 1 
              </div>
              <div class="col">
              Colmn 2
              </div>
              <div class="col">
              Colmn 3
              </div>

            </div>
           */}
          {/* {movies && movies.results.map((movie) => (
            //Get 1 movie 
          <div key={movie.id} class="g-col-4">
            <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w92${movie.poster_path}`} alt={movie.title} />
            <Card.Body>
              <Card.Title>{movie.title}</Card.Title>
            </Card.Body>
          </div>
        ))} */}
      
  //         </div>
  //   );
  //  }



export default Upcoming;
