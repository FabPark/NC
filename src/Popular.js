import React, { useState, useEffect } from 'react';
import './App.css'
import axios from 'axios';

const Popular = () => {
  const [data, setData] = useState(null);
  var imgUrl = 'https://image.tmdb.org/t/p/w92';

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=647298ce680820a1028160f696426edd&language=en-US&page=1');
        setData(response.data);
        console.log(response.data);
        console.log (response.data.results.poster_path);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);

  return (
    <div>
      {data && (
        <div className="container">
            {data.results.map(results => (
              <div className="box" key={results.id}>{results.title}
             <img src={`${imgUrl}${results.poster_path}`} alt={results.title}></img>
              </div>
            ))}
        </div>
      )}
    </div>
  );
}

export default Popular;