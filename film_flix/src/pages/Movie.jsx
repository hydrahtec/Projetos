import { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';
import {BsGraphUp, BsWallet2, BsHourglassSplit, BsFillFileEarmarkTextFill} from 'react-icons/bs';

import {MovieCard} from  '../components/MovieCard';

import './css/movie.css';

import { Environment } from '../environment/Environment';

const moviesURL = Environment.API_URL;
const apiKey = Environment.API_KEY;

export const Movie = () => {
    const {id} = useParams();
    const [movie, setMovie] = useState(null);
    
    const getMovie = async (url) => {
        const res = await fetch(url);
        const data = await res.json();
        console.log(data);
        setMovie(data);
    };
    
    const formatCurrency = (number) => {
        return number.toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD'
        });
    };

    useEffect(() => {
        const movieUrl = `${moviesURL}${id}?${apiKey}`;
        getMovie(movieUrl);
    }, []);


    return(
        <div className='movie-page'>
            {Movie && (
                <>
                    <MovieCard movie={movie} showLink={false} />
                    <p className='tagline'>{movie.tagline}</p>

                    <div className='info'>
                        <h3>
                            <BsWallet2 /> Orçamento:
                        </h3>
                        <p>{formatCurrency(movie.budget)}</p>
                    </div>
                    <div className='info'>
                        <h3>
                            <BsGraphUp /> Receita:
                        </h3>
                        <p>{formatCurrency(movie.revenue)}</p>
                    </div>
                    <div className='info'>
                        <h3>
                            <BsHourglassSplit /> Duração:
                        </h3>
                        <p>{movie.runtime} minutos</p>
                    </div>
                    <div className='info description'>
                        <h3>
                            <BsFillFileEarmarkTextFill /> Descrição:
                        </h3>
                        <p>{movie.overview}</p>
                    </div>
                </>
            )}
        </div> 
    );
};