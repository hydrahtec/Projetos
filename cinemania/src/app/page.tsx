import MovieCard from '@/components/MovieCard';
import styles from './page.module.css';
import { tmdb } from '@/api/tmdbApi';
import { useState } from 'react';

const TMBD = tmdb;

export default function Home() {
  const [topMovies, setTopMovies] = useState([]);

  const getMovies = async (url: string) => {
    const res = await fetch(url);
    const data = await res.json();

    setTopMovies(data);
  };

  return (
    <main className={styles.main}>
      <section className={styles.header}>
        <div>
          <h2>Titulo do filme</h2>
          <p className={styles.clasification}>Quantidade de estrelas</p>
          <p className={styles.decript}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi non
            assumenda maxime vero. A in, sequi quis, fugit dolorum optio,
            reprehenderit natus nesciunt odit doloremque obcaecati quos?
            Distinctio, nobis doloribus.
          </p>
          <button className={styles.header_info}>
            <a href="#">Mais informações</a>
          </button>
        </div>
      </section>

      <section className={styles.top_rated}>
        <h3 className={styles.title_sec}>Filmes mais procurados:</h3>
        <div className={styles.movie_container}>
          <MovieCard />
          <MovieCard />
          <MovieCard />
        </div>
      </section>
    </main>
  );
}
