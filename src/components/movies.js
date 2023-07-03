// import { Link } from 'react-router-dom';
// import { useState, useEffect } from "react";


// export default Movies = ( {movies, onMovies}) => {
// const images = "https://image.tmdb.org/t/p/w500/";

// // main API used to display trending page
// const apiUrl = `https://api.themoviedb.org/3/movie/now_playing?api_key=647298ce680820a1028160f696426edd&page=`;

// useEffect(() => {
//     fetch(apiUrl)
//       .then((res) => res.json())
//       .then((data)=> {
//         onMovies(data.results)
//       })
//   }, []);


//   return (
//     <section className="movieslist">
//       {movies.length > 0 ? movies.map((movie) => {
//         return (
//         <Link to={`/movie/${movie.id}`}>
//         <div className="moviePoster">
//             <img src={movie.poster_path ? `${images}${movie.poster_path}` : "https://www.movienewz.com/img/films/poster-holder.jpg"} alt={movie.title} />
//             <div className="movieInfo">
//                 <h2>{movie.title}</h2>
//             </div>

//         </div>
//         </Link>
//         );
//       }): <p class="noResults">No results found. Please try again?</p>}
//         </section>
//   ); // Maybe I should change this... but to what?
// };