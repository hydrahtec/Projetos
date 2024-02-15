import { useEffect, useState } from 'react';
import {MovieCard} from '../components/MovieCard';
import { Environment } from '../environment/Environment';

import './css/MoviesGrid.css';

const moviesURL = Environment.API_URL;
const apiKey = Environment.API_KEY;

export const Home = () => {
    const [topMovies, setTopMovies] = useState([]);

    const getTopRatedMovies = async (url) => {
        const res = await fetch(url);
        const data = await res.json();
        setTopMovies(data.results);
    };

    useEffect(() => {
        const topRatedUrl = `${moviesURL}top_rated?language=pt-BR&${apiKey}`;
        getTopRatedMovies(topRatedUrl);
    }, []);

    console.log(topMovies);

    return(
        <div className='container'>
            <h2 className='title'>Melhores filmes:</h2>
            <div className='movies-container'>
                {topMovies.length > 0 && 
                    topMovies.map((movie) => <MovieCard key={movie.id} movie={movie} />)
                }
            </div>
        </div>
    );
};