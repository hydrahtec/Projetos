'use client';

import styles from './style.min.module.css';
import Link from 'next/link';
import { tmdb } from '@/api/tmdbApi';
import { FaStar } from 'react-icons/fa';

interface TCard {
  movie: object;
  showMovie?: boolean;
}

const MovieCard = ({ movie, showMovie = true }: TCard) => {

  return (
    <div className={styles.movie_card}>
      <img src={tmdb.API_IMG + movie.poster_path} alt={movie.title} />
      <h2>{movie.title}</h2>
      <p>
        <FaStar />
        {movie.vote_average.toFixed(2)} - {`Votos: ${movie.vote_count}`}
      </p>
      <div className={styles.card_overview}>
        <p>
          {movie.overview}
        </p>
        <Link href="/">Detalhes</Link>
      </div>
    </div>
  );
};

export default MovieCard;
