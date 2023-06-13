import React, { useState, useEffect } from 'react';
import './App.css'
import axios from 'axios';

const TopRated = () => {
  const [movies, setMovies] = useState(null);
  var imgUrl = 'https://image.tmdb.org/t/p/w92';

  const click = event => {
    console.log(event.target);
    console.log('Image clicked');
  }

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get('https://api.themoviedb.org/3/movie/top_rated?api_key=647298ce680820a1028160f696426edd&language=en-US&page=1');
        setMovies(response.data);
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="container text-center">
      <div className="row">
        {movies && (
          <>
            {movies.results.length > 0 &&
              movies.results.reduce((rows, movie, index) => {
                if (index % 3 === 0) {
                  rows.push([]);
                }
                rows[Math.floor(index / 3)].push(movie);
                return rows;
              }, []).map((row, rowIndex) => (
                <div className="row" key={rowIndex}>
                  {row.map((movie) => (
                    <div className="col" key={movie.id}>
                      <div>
                        {movie.title}
                        <img
                          src={`${imgUrl}${movie.poster_path}`}
                          alt={movie.title}
                          style={{ backgroundImage: `url(${imgUrl})` }}
                          className="imgbox"
                          onClick={click}
                        ></img>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
          </>
        )}
      </div>
    </div>
  )}
                  
//   return (
//     <div>
//       {data && (
//         <div className="container">
//           {data.results.map(results => (
//             <div className="box" key={results.id}>
//               {results.title}
//               <img src={`${imgUrl}${results.poster_path}`} alt={results.title}></img>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }

export default TopRated;