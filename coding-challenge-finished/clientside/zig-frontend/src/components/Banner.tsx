// import React, { useState, useEffect } from "react";
// import axios from "./axios";
// import { Movie } from "../types";

// function Banner({}) {
//   // Setting up useState
//   const [movie, setMovie] = useState([]);
//   const [popularMovies, setPopularMovies] = useState<Movie[]>([]);

//   //   useEffect (short term memory)
//   useEffect(() => {
//     async function fetchData() {
//       setMovie(
//         // request.data.results[
//         //   Math.floor(Math.random() * request.data.results.length - 1)
//         // ]
//       );
//     }
//     // Pulling data from API
//     fetchData();
//   }, []);

//   //   console.log(movie);

//   // Showing less movie info (plot)
//   function truncate(str, n) {
//     return str?.length > n ? str.substr(0, n - 1) + "..." : str;
//   }

//   return (
//     //   Contents of header
//     <header
//       className="banner"
//       style={{
//         backgroundSize: "cover",
//         backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
//         backgroundPosition: "center center",
//       }}
//     >
//       <div className="banner__contents">
//         <h1 className="banner__title">
//           {movie?.title || movie?.name || movie?.original_name}
//         </h1>
//         <div className="banner__buttons">
//           <button className="banner__button">Play</button>
//           <button className="banner__button">My List</button>
//         </div>

//         <h1 className="banner__description">
//           {truncate(movie?.overview, 150)}
//         </h1>
//       </div>
//       {/* Empty fade div with bottom fade effect  */}
//       <div className="banner--fadeBottom"></div>
//     </header>
//   );
// }

// export default Banner;


import React, { useState, useEffect } from "react";
import axios from "./axios";
import { Movie } from "../types";

interface BannerProps {}

const Banner: React.FC<BannerProps> = (props: Movie) => {
  const [movie, setMovie] = useState<Movie | null>(null);
  const [popularMovies, setPopularMovies] = useState<Movie[]>([]);

  useEffect(() => {
    async function fetchData() {
      // Fetch and set movie data here
    }
    fetchData();
  }, []);

  // function truncate(str: string | undefined, n: number): string {
  //   return str?.length > n ? str.substr(0, n - 1) + "..." : str || '';
  // }

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">
          {props?.title || props?.original_title || props?.release_date}
        </h1>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>

        <h1 className="banner__description">
          {/* {truncate(props?.overview, 150)} */}
        </h1>
      </div>
      <div className="banner--fadeBottom"></div>
    </header>
  );
};

export default Banner;
