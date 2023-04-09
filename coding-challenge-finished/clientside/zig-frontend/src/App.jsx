import React ,{} from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from './Home';
import MovieDetails from './MovieDetails';
import NotFound from './components/NotFound';

function App() {


  return (
    <Router>
    <div >
      <Routes>
        
        <Route path="/" element={<HomePage />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
      
      </Routes>
    </div>
  </Router>
  );
}


export default App;
