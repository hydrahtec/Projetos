'use client';
import { useEffect, useState } from 'react';
import styles from './page.module.css';
import MovieCard from '@/components/MovieCard';
import { tmdb } from '@/api/tmdbApi';
import { FaStar } from 'react-icons/fa';

const TMBD = tmdb;

export default function Home() {
  const [topMovies, setTopMovies] = useState([]);
  const [priMv, setPrimv] = useState({});

  const getMovies = async (url: string) => {
    const res = await fetch(url);
    const data = await res.json();

    setTopMovies(data.results);

    setPrimv(data.results[0]);

    if (!priMv) {
      return;
    } else {
      const urlposter = priMv.poster_path;

      if (urlposter) {
        const imgH = TMBD.API_IMG + urlposter;

        mudaFundo(imgH);
      }
    }
  };

  const mudaFundo = (urlImg: string) => {
    const headerImg = document.getElementById('header') as HTMLElement;

    headerImg.style.backgroundImage = `url('${urlImg}')`;
  };

  useEffect(() => {
    const topRated = TMBD.API_TOP_RATED;

    getMovies(topRated);
  }, []);

  return (
    <main className={styles.main}>
      <section id="header" className={styles.header}>
        <div>
          <h2>{priMv.title}</h2>
          <p className={styles.clasification}>
            {priMv.vote_average} <FaStar /> - {`Votos: ${priMv.vote_count}`}
          </p>
          <p className={styles.decript}>{priMv.overview}</p>
          <button className={styles.header_info}>
            <a href="#">Mais informações</a>
          </button>
        </div>
      </section>

      <section className={styles.top_rated}>
        <h3 className={styles.title_sec}>Filmes mais procurados:</h3>
        <div className={styles.movie_container}>
          {topMovies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </section>
    </main>
  );
}
