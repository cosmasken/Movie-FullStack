import React from "react";
import "./MovieDashboard.css"
import Row from "./Row";
import Banner from "./Banner";
import "./Banner.css";
import Nav from "./Nav";

function MovieDashboard() {
  return (
    <div className="app">
      {/* Inserting design components and fetch param from tmdb API */}
      <Nav />
      <Banner />
      <Row
        title="NETFLIX ORGINALS"
        fetchURL={'api/popular'}
        isLargeRow={true}
      />
      {/* isLargeRow made up param -> row__posterLarge */}
      <Row title="Trending Now" fetchURL={'api/popular'} />
      <Row title="Trending Now" fetchURL={'api/popular'} />
      <Row title="Trending Now" fetchURL={'api/popular'} />
      <Row title="Trending Now" fetchURL={'api/popular'} />
      <Row title="Trending Now" fetchURL={'api/popular'} />
      <Row title="Trending Now" fetchURL={'api/popular'} />
      <Row title="Trending Now" fetchURL={'api/popular'} />
    </div>
  );
}

// Exporting App function. Making it available
export default MovieDashboard;
