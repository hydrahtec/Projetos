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
          <button className={styles.header_info}><a href="#">Mais informações</a></button>
        </div>
      </section>
    </main>
  );
}
