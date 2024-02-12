import { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';
import {BsGraphUp, BsWallet2, BsHourglassSplit, BsFillFileEarmarkTextFill} from 'react-icons/bs';

import MovieCard from  '../components/MovieCard';

import './css/movie.css';

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

export const Movie = () => {
    const {id} = useParams();
    cosnt [moviesURL, setMovie] = useState(null);
    
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
       <div classname='movie-page'>
        {Movie && (
            <>
                
            </>
        )}
       </div> 
    );
};