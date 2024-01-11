import { useState, useEffect } from "react";
import axios from "axios";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import PopUp from "./PopUp.js";
import "./popupmodal.css";

export default function Portal({ category }) {
  const [movie, setMovie] = useState(null);
  var imgUrl = "https://image.tmdb.org/t/p/w780";
  const [popUp, setPopUp] = useState(false);
  const [movieID, setMovieID] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${category}?api_key=647298ce680820a1028160f696426edd&language=en-US&page=1`
        );
        setMovie(response.data);
        console.log(response.data);
        response.data.results.forEach((movie) => {
          console.log(movie.title);
        });
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, [category]);

  return (
    <div>
      {movie && (
        <>
          {movie.results.length > 0 &&
            movie.results
              .reduce((rows, movie, index) => {
                if (index % 4 === 0) {
                  rows.push([]);
                }
                rows[Math.floor(index / 4)].push(movie);
                return rows;
              }, [])
              .map((row, rowIndex) => (
                <Row xs={1} md={4} className="g-4" key={rowIndex}>
                  {row.map((movie) => (
                    <div
                      className="col"
                      key={movie.id}
                      id={movie.id}
                      onClick={() => {
                        setPopUp(true);
                        setMovieID(movie.id);
                      }}
                    >
                      <Card className="text-center">
                        <Image
                          className="p-1 mb-3 shadow rounded"
                          variant="top"
                          src={`${imgUrl}${movie.poster_path}`}
                        />
                        {/* <Card.Title>{movie.title}</Card.Title>  */}
                      </Card>
                    </div>
                  ))}
                </Row>
              ))}
        </>
      )}

      <div>
        {popUp && <PopUp setPopUp={setPopUp} gogo={movieID} />}
        {/* {popUp && <Portal setMovieId={setMovieId}/>} */}
      </div>
    </div>
  );
}
