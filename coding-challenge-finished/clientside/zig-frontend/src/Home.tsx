import React,{useState,useEffect} from 'react';
import { Container,FormControl, Button, Row, Col, Navbar } from 'react-bootstrap';
import axios from 'axios';

import { ListGroup } from 'react-bootstrap';

import { Movie } from './types';
import { AddMoviesAction,addMovies } from './redux/actions/movieAction';
import store from './redux/store';
import { Link } from 'react-router-dom';
import Header from './Header';
import { useAxios } from './api/useAxios';
import NotFound from './components/NotFound';
import LoadingComponent from './components/loading/LoadingAnimation';



const IMAGE_BASE_URL: string = 'http://image.tmdb.org/t/p/';

const BACKDROP_SIZE: string = 'w440_and_h660_face/';
const SEARCH_SIZE: string = 'w92/';


function HomePage() {
  const [clickedIndex, setClickedIndex] = useState(1);
 
const movieCategories = [
  'Upcoming',
  'Popular',
  'NowPlaying',
  'TopRated',
];
const handleCategoryClick = (index: number) => {
  setClickedIndex(index);
  setCategory(movieCategories[index])
};

      const [query, setQuery] = useState("");
      const [category, setCategory] = useState(movieCategories[1]);
      const [loading, setLoading] = useState(false);
      const [results, setResults] = useState<Movie[]>([]);

      const [searchResults, isSearching, searchError] = useAxios<Movie[]>(
        `https://localhost:5001/api/search?query=${query}`
      );

      const [homeMovies, isLoading, error] = useAxios<Movie[]>(
        `https://localhost:5001/api/${category}/`
      );
      
      if (isLoading) {
        return <LoadingComponent/>
      }
      
      if (error) {
        return <div>Error: {error.message}</div>;
      }
      
      
      if (!homeMovies) {
        return <NotFound />
      }

      const handleSearch = async () => {

        setLoading(true);
        try {
          const response = await axios.get<Movie[]>(
            `https://localhost:5001/api/search?query=${query}`
          );
          setResults(response.data);
        } catch (error) {
          console.error(error);
        } finally {
          setLoading(false);
        }
  
      

      
      };

  
  return (
    
    <>
    
    <Container className="my-5">
  <Row className="justify-content-center">
    <Col sm={6} md={4}>
      <FormControl
        type="text"
        value={query}
       onChange={(e: { target: { value: React.SetStateAction<string>; }; }) => setQuery(e.target.value)}
        placeholder="Search movies"
        className="mr-2"
      />
    </Col>
    <Col sm={3} md={2}>
      <Button onClick={handleSearch} variant="primary" className="w-100">
        Search
      </Button>
     
    </Col>
  </Row>
</Container>


      <Container>

{loading && <p>Loading...</p>}
      {results.length > 0 && (
        <ListGroup >
          {results.map((result) => (
            <ListGroup.Item key={result.id} className="d-flex align-items-center">
            <img src={`${IMAGE_BASE_URL}${SEARCH_SIZE}${result.poster_path}`} alt="Poster"  />
            <div>
            
            <Link to={`/movie/${result.id}`}>
              <h5>{result.title}</h5>
             </Link>

              <div style={{ overflow: 'hidden', textOverflow: 'ellipsis',}}>
              <h5>{result.overview}</h5>
</div>
          
             
            </div>
          </ListGroup.Item>
          ))}
        </ListGroup>
      )}
    <Row>
  <Header name={'Movie Categories'} />
  {movieCategories.map((category, index) => (
    <Col sm={12} md={6} key={index}>
      <ListGroup>
      <ListGroup.Item
                  action
                  active={index === clickedIndex}
                  onClick={() => handleCategoryClick(index)}
                  style={{ backgroundColor: index === clickedIndex ? '#6c757d' : '#ffffff', color: '#000000' }}
                >
                  {category}
                </ListGroup.Item>
      </ListGroup>
    </Col>
  ))}
</Row>

        <Row>
          <Header name={'Popular Movies'}/>
          {homeMovies.map(item => (
           
            <Col sm={4} key={item.id}>
              
              <div className="card mb-4 mt=4">
          
              <img src={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${item.poster_path}`} className="card-img-top" alt="Poster"   />
              
                <div className="card-body">
                <Link to={`/movie/${item.id}`}>
                  
                  <h5 className="card-title">{item.title}</h5>
                  </Link>
                  
                </div>
              </div>
            </Col>
        
          ))}
        </Row>


        
      </Container>
   
    </>
      
  );
}

export default HomePage;
