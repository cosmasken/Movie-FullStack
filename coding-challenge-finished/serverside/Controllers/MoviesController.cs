using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Newtonsoft.Json;
using System.Collections.Generic;
using System.Net;
using System.Net.Http;
using System.Text.Json;
using System.Threading.Tasks;


namespace ServerSide.Controllers
{
    [ApiController]
    [Route("api/")]
    public class MoviesController : ControllerBase
    {
        private readonly IConfiguration _config;
        private readonly HttpClient _client;

        public MoviesController(IConfiguration config, HttpClient client)
        {
            _config = config;
            _client = client;
        }

        [HttpGet("popular")]
        public async Task<ActionResult<IEnumerable<Movie>>> GetPopularMovies()
        {
            var apiKey = _config.GetValue<string>("MovieDbApiKey");
            var response = await _client.GetAsync($"https://api.themoviedb.org/3/movie/popular?api_key={apiKey}");
            var json = await response.Content.ReadAsStringAsync();
            var movies = JsonConvert.DeserializeObject<MovieDbResponse>(json).Results;
            return Ok(movies);
        }

        [HttpGet("upcoming")]
        public async Task<ActionResult<IEnumerable<Movie>>> GetUpcomingMovies()
        {
            var apiKey = _config.GetValue<string>("MovieDbApiKey");
            var response = await _client.GetAsync($"https://api.themoviedb.org/3/movie/upcoming?api_key={apiKey}");
            var json = await response.Content.ReadAsStringAsync();
            var movies = JsonConvert.DeserializeObject<MovieDbResponse>(json).Results;
            return Ok(movies);
        }

        [HttpGet("nowplaying")]
        public async Task<ActionResult<IEnumerable<Movie>>> GetNowPlaying()
        {
            var apiKey = _config.GetValue<string>("MovieDbApiKey");
            var response = await _client.GetAsync($"https://api.themoviedb.org/3/movie/now_playing?api_key={apiKey}");
            var json = await response.Content.ReadAsStringAsync();
            var movies = JsonConvert.DeserializeObject<MovieDbResponse>(json).Results;
            return Ok(movies);
        }

        [HttpGet("toprated")]
        public async Task<ActionResult<IEnumerable<Movie>>> GetTopRated()
        {
            var apiKey = _config.GetValue<string>("MovieDbApiKey");
            var response = await _client.GetAsync($"https://api.themoviedb.org/3/movie/top_rated?api_key={apiKey}");
            var json = await response.Content.ReadAsStringAsync();
            var movies = JsonConvert.DeserializeObject<MovieDbResponse>(json).Results;
            return Ok(movies);
        }


        [HttpGet("search")]
        public async Task<ActionResult<IEnumerable<Movie>>> SearchMovies(string query)
        {
            var apiKey = _config.GetValue<string>("MovieDbApiKey");
            var encodedQuery = WebUtility.UrlEncode(query);
            var response = await _client.GetAsync($"https://api.themoviedb.org/3/search/movie?api_key={apiKey}&query={encodedQuery}");
            var json = await response.Content.ReadAsStringAsync();
            // var options = new JsonSerializerOptions { PropertyNameCaseInsensitive = true };
            // var movies = JsonSerializer.Deserialize<MovieDbResponse>(json, options).Results;
            var movies = JsonConvert.DeserializeObject<MovieDbResponse>(json).Results;

            return Ok(movies);
        }

        [HttpGet("movie/{id}")]
        public async Task<ActionResult<Movie>> GetMovie(int id)
        {
            // Get the MovieDB API key from configuration
            var apiKey = _config.GetValue<string>("MovieDbApiKey");

            // Make the API request to get the movie details by ID
            var apiUrl = $"https://api.themoviedb.org/3/movie/{id}?api_key={apiKey}";
            var response = await _client.GetAsync(apiUrl);

            // Check if the response was successful
            if (response.IsSuccessStatusCode)
            {
                // Deserialize the JSON response into a Movie object
                var json = await response.Content.ReadAsStringAsync();
                var movie = JsonConvert.DeserializeObject<Movie>(json);

                // Check if the movie was found
                if (movie != null)
                {
                    return Ok(movie);
                }
                else
                {
                    return NotFound();
                }
            }
            else
            {
                // Handle the case where the API request was not successful
                var statusCode = (int)response.StatusCode;
                var errorResponse = await response.Content.ReadAsStringAsync();
                return StatusCode(statusCode, errorResponse);
            }
        }

    }

    public class Movie
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Overview { get; set; }
        public string ReleaseDate { get; set; }
        public string Poster_path { get; set; }
        public float Popularity { get; set; }
        public float Homepage { get; set; }
        public int Vote_count { get; set; }
        public bool Video { get; set; }
        public bool Adult { get; set; }
        public string Backdrop_path { get; set; }
        public string Original_language { get; set; }
        public string Original_title { get; set; }
        public List<int> Genre_ids { get; set; }
        public float Vote_average { get; set; }
    }


    public class MovieDbResponse
    {
        public int Page { get; set; }
        public int Total_results { get; set; }
        public int Total_pages { get; set; }
        public List<Movie> Results { get; set; }
    }

}
