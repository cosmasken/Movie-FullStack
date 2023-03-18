// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { Movie } from './types';

// const HomePage = () => {
//   const API_KEY = 'your-api-key-here';
//   const [nowPlayingMovies, setNowPlayingMovies] = useState([]);
//   const [popularMovies, setPopularMovies] = useState([]);
//   const [topRatedMovies, setTopRatedMovies] = useState([]);
//   const [upcomingMovies, setUpcomingMovies] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       const nowPlayingMoviesResponse = await axios.get(
//         `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}`
//       );
//       setNowPlayingMovies(nowPlayingMoviesResponse.data.results);

//       const popularMoviesResponse = await axios.get(
//         `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
//       );
//       setPopularMovies(popularMoviesResponse.data.results);

//       const topRatedMoviesResponse = await axios.get(
//         `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}`
//       );
//       setTopRatedMovies(topRatedMoviesResponse.data.results);

//       const upcomingMoviesResponse = await axios.get(
//         `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}`
//       );
//       setUpcomingMovies(upcomingMoviesResponse.data.results);
//     };
//     fetchData();
//   }, []);

//   return (
//     <div>
//       <div className="banner">
//         {nowPlayingMovies.length > 0 && (
//           <img
//             src={`https://image.tmdb.org/t/p/original/${nowPlayingMovies[0].backdrop_path}`}
//             alt={nowPlayingMovies[0].title}
//           />
//         )}
//       </div>
//       <div className="movie-section">
//         <h2>Popular Movies</h2>
//         <div className="movie-list">
//           {popularMovies.map((movie) => (
//             <div className="movie" key={movie.id}>
//               <img
//                 src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
//                 alt={movie.title}
//               />
//               <h3>{movie.title}</h3>
//             </div>
//           ))}
//         </div>
//       </div>
//       <div className="movie-section">
//         <h2>Top Rated Movies</h2>
//         <div className="movie-list">
//           {topRatedMovies.map((movie) => (
//             <div className="movie" key={movie.id}>
//               <img
//                 src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
//                 alt={movie.title}
//               />
//               <h3>{movie.title}</h3>
//             </div>
//           ))}
//         </div>
//       </div>
//       <div className="movie-section">
//         <h2>Upcoming Movies</h2>
//         <div className="movie-list">
//           {upcomingMovies.map((movie) => (
//             <div className="movie" key={movie.id}>
//               <img
//                 src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
//                 alt={movie.title}
//               />
//               <h3>{movie.title}</h3>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HomePage;
export default function Wai(){
  
};