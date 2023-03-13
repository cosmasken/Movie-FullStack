import React from 'react';
import { render, screen } from '@testing-library/react';
import HomePage from '../Home';
import { useAxios } from '../api/useAxios';

jest.mock('./api/useAxios', () => ({
  useAxios: jest.fn()
}));

describe('HomePage', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  test('renders search input and button', () => {
    useAxios.mockReturnValue([null, false, null]);
    render(<HomePage />);
    const searchInput = screen.getByPlaceholderText('Search movies');
    const searchButton = screen.getByRole('button', { name: 'Search' });
    expect(searchInput).toBeInTheDocument();
    expect(searchButton).toBeInTheDocument();
  });

  test('renders popular movies', () => {
    const mockMovies = [
      { id: 1, title: 'Movie 1' },
      { id: 2, title: 'Movie 2' },
      { id: 3, title: 'Movie 3' }
    ];
    useAxios.mockReturnValue([mockMovies, false, null]);
    render(<HomePage />);
    const movieTitles = screen.getAllByRole('heading', { level: 5 });
    expect(movieTitles).toHaveLength(mockMovies.length);
    expect(movieTitles[0]).toHaveTextContent(mockMovies[0].title);
    expect(movieTitles[1]).toHaveTextContent(mockMovies[1].title);
    expect(movieTitles[2]).toHaveTextContent(mockMovies[2].title);
  });

  test('renders search results', async () => {
    const mockResults = [
      { id: 1, title: 'Result 1' },
      { id: 2, title: 'Result 2' },
      { id: 3, title: 'Result 3' }
    ];
    useAxios.mockReturnValue([mockResults, false, null]);
    render(<HomePage />);
    const searchInput = screen.getByPlaceholderText('Search movies');
    const searchButton = screen.getByRole('button', { name: 'Search' });
    expect(searchInput).toBeInTheDocument();
    expect(searchButton).toBeInTheDocument();
    searchInput.value = 'Test search';
    await screen.findByText('Loading...');
    expect(useAxios).toHaveBeenCalledWith(expect.stringContaining('Test search'));
    const resultTitles = screen.getAllByRole('heading', { level: 5 });
    expect(resultTitles).toHaveLength(mockResults.length);
    expect(resultTitles[0]).toHaveTextContent(mockResults[0].title);
    expect(resultTitles[1]).toHaveTextContent(mockResults[1].title);
    expect(resultTitles[2]).toHaveTextContent(mockResults[2].title);
  });
});
