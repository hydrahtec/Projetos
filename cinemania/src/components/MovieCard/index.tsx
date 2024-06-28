'use client';

import styles from './style.min.module.css';
import Link from 'next/link';

interface TCard {
  movie: object[]
  showMovie?: boolean;
};

const MovieCard = ({movie, showMovie = true}: TCard) => {


  return (
    <div className={styles.movie_card}>
            <img src="https://picsum.photos/200/250" alt="imagem do filme" />
            <h2>Titulo do filme</h2>
            <p>votos e views</p>
            <div className={styles.card_overview}>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero,
                amet. Voluptatibus, dignissimos corrupti tempora error dolor
                sint est maiores quia molestiae reiciendis facere,
                reprehenderit, distinctio a sit quibusdam voluptatem
                repudiandae?
              </p>
              <Link href="/">Detalhes</Link>
            </div>
          </div>
  )
};

export default MovieCard;