/* eslint-disable @next/next/no-img-element */
import styles from "./styles.module.css";
const Gallery = () => {
  return (
    <>
      <section>
        <h2>Gallery</h2>
        <div className={styles.grid}>
          <img
            src="https://picsum.photos/id/143/300"
            className={styles.img}
            alt="photo"
          />

          <img
            src="https://picsum.photos/id/22/300"
            className={styles.img}
            alt="photo"
          />

          <img
            src="https://picsum.photos/id/56/500"
            className={styles.img}
            alt="photo"
          />

          <img
            src="https://picsum.photos/id/44/300"
            className={styles.img}
            alt="photo"
          />

          <img
            src="https://picsum.photos/id/25/300"
            className={styles.img}
            alt="photo"
          />

          <img
            src="https://picsum.photos/id/266/300"
            className={styles.img}
            alt="photo"
          />

          <img
            src="https://picsum.photos/id/133/300"
            className={styles.img}
            alt="photo"
          />
        </div>
      </section>
    </>
  );
};

export default Gallery;
