import Link from 'next/link';
import styles from './page.module.css';

export default function Home() {
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
          <div className={styles.movie_card}>
            <img src="https://picsum.photos/200/250" alt="imagem do filme" />
            <h2>Titulo do filme</h2>
            <p>votos e views</p>
            <Link href="/">Detalhes</Link>
          </div>
          <div className={styles.movie_card}>
            <img src="https://picsum.photos/150/200" alt="imagem do filme" />
            <h2>Titulo do filme</h2>
            <p>votos e views</p>
            <Link href="/">Detalhes</Link>
          </div>
          <div className={styles.movie_card}>
            <img src="https://picsum.photos/150/200" alt="imagem do filme" />
            <h2>Titulo do filme</h2>
            <p>votos e views</p>
            <Link href="/">Detalhes</Link>
          </div>
          <div className={styles.movie_card}>
            <img src="https://picsum.photos/150/200" alt="imagem do filme" />
            <h2>Titulo do filme</h2>
            <p>votos e views</p>
            <Link href="/">Detalhes</Link>
          </div>
          <div className={styles.movie_card}>
            <img src="https://picsum.photos/150/200" alt="imagem do filme" />
            <h2>Titulo do filme</h2>
            <p>votos e views</p>
            <Link href="/">Detalhes</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
