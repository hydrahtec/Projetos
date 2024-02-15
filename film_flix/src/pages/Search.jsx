import { Environment } from '../environment/Environment';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import {MovieCard} from '../components/MovieCard';

import './css/MoviesGrid.css';

const searchURL = Environment.API_SEARCH;
const apiKey = Environment.API_KEY;

export const Search = () => {
    const [searchParams] = useSearchParams();

    const [movies, setMovies] = useState([]);
    const query = searchParams.get('q');

    const getSearchedMovies = async (url) => {
        const res = await fetch(url);
        const data = await res.json();
        setMovies(data.results);
    };

    useEffect(() => {
        const searchWithQueryURL = `${searchURL}?language=pt-BR&${apiKey}&query=${query}`;
        getSearchedMovies(searchWithQueryURL);
    }, [query]);

    return(
        <div className="container">
            <h2 className="title">
                Resultados para: <span className="query-text">{query}</span>
            </h2>
            <div className="movies-container">
                {movies.length > 0 &&
                movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
            </div>
        </div>
    );
};