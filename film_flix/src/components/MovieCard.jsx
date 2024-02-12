import {Link} from 'react-router-dom';

import {FaStar} from 'react-icons/fa';

const imagesURL = import.meta.env.VITE_IMG;

export const MovieCard = () => {
    return (
        <div className='movie-card'>
            <img src={imagesURL + MovieCard.poster_path} alt={MovieCard.title} />

            <h2>{MovieCard.title}</h2>

            <p>
               <FaStar /> {MovieCard.vote_average} 
            </p>

            {showLink && <Link to={`/movie/${movie.id}`}>Detalhes</Link>}
        </div>
    );
};