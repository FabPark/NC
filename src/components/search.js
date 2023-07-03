// import { useState } from 'react';
// import React from 'react';


// export default Search = ({ onSearch }) => {
// const [search, setSearch] = useState("");
// // search API used to search through database
// const searchUrl = "https://api.themoviedb.org/3/search/movie?api_key=647298ce680820a1028160f696426edd&query="

//  // Search form that fetches search API and returns results
//   const submitForm = (e) => {
//     e.preventDefault();
  
//   // API used to search for any movie in the database
//     fetch(searchUrl + search)
//       .then(res => res.json())
//       .then(data => {
//         onSearch(data.results);
//       })
//     setSearch("");}

//     return (
//       <form onSubmit={submitForm}>
//         <input type="text" value={search} onChange={e => setSearch(e.target.value)} />
//         <button type="submit">Search</button>
//       </form>
//     );
//   };
  