import React ,{} from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from './Home';
import MovieDetails from './MovieDetails';
import NotFound from './components/NotFound';

function App() {


  return (
    <Router>
    <div>
      <Routes>
        
        <Route path="/" element={<HomePage />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
      
      </Routes>
    </div>
  </Router>
  );
}


export default App;
