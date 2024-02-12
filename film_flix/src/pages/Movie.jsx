import { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';
import {BsGraphUp} from 'react-icons/bs';

import MovieCard from  '../components/MovieCard';

import './css/movie.css';

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

export const Movie = () => {
    const {id} = useParams();
    cosnt [moviesURL, setMovie] = useState(null);
    
    const getMovie = async (url) => {
        
    };
    
    return(
        teste
    );
};