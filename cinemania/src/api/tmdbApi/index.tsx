'use client';

const tmdb = {
  API_KEY: 'api_key=70662fd4135b92fe0fc87874e13356c4',
  API_URL: 'https://api.themoviedb.org/3/movie/',
  API_SEARCH: 'https://api.themoviedb.org/3/search/movie',
  API_IMG: 'https://image.tmdb.org/t/p/w500/',
  API_TOP_RATED:
    'https://api.themoviedb.org/3/movie/top_rated?api_key=70662fd4135b92fe0fc87874e13356c4',
};

const dadosMovie = {
  adult: false,
  backdrop_path: '/zfbjgQE1uSd9wiPTX4VzsLi0rGG.jpg',
  genre_ids: 0,
  id: 278,
  original_language: 'en',
  original_title: 'The Shawshank Redemption',
  overview:
    'Imprisoned in the 1940s for the double murder of his wife and her lover, upstanding banker Andy Dufresne begins a new life at the Shawshank prison, where he puts his accounting skills to work for an amoral warden. During his long stretch in prison, Dufresne comes to be admired by the other inmates -- including an older prisoner named Red -- for his integrity and unquenchable sense of hope.',
  popularity: 160.592,
  poster_path: '/9cqNxx0GxF0bflZmeSMuL5tnGzr.jpg',
  release_date: '1994-09-23',
  title: 'The Shawshank Redemption',
  video: false,
  vote_average: 8.705,
  vote_count: 26377,
};
export { tmdb };
