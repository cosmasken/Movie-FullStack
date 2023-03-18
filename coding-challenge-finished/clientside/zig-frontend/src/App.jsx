import React ,{} from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from './Home';
import MovieDetails from './MovieDetails';
import NotFound from './components/NotFound';
import MovieWebsite from './MovieWebsite';
import MovieDashboard from './components/MovieDashboard';

function App() {


  return (
    <Router>
    <div>
      <Routes>
        
        <Route path="/" element={<MovieDashboard />} />
        <Route path="/new" element={<MovieWebsite />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
      
      </Routes>
    </div>
  </Router>
  );
}


export default App;
