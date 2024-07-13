/* eslint-disable @next/next/no-img-element */
import Codesnippet from "../code-snippet/Codesnippet";
import styles from "./styles.module.css";
const ImageOutlineInset = () => {
  return (
    <>
      <section>
        <h2>Image outline inset</h2>
        <div className={styles.grid}>
          <div className={styles["outline-with-inset"]}>
            <img
              src="https://picsum.photos/id/143/300"
              className={styles.img}
              alt="photo"
            />
          </div>
          <div className={styles["outline-with-inset"]}>
            <img
              src="https://picsum.photos/id/22/300"
              className={styles.img}
              alt="photo"
            />
          </div>
          <div className={styles["outline-with-inset"]}>
            <img
              src="https://picsum.photos/id/56/500"
              className={styles.img}
              alt="photo"
            />
          </div>
          <div className={styles["outline-with-inset"]}>
            <img
              src="https://picsum.photos/id/44/300"
              className={styles.img}
              alt="photo"
            />
          </div>
          <div className={styles["outline-with-inset"]}>
            <img
              src="https://picsum.photos/id/25/300"
              className={styles.img}
              alt="photo"
            />
          </div>
        </div>

        <article>
          <h3>Key points</h3>
          <div className="flex gap-8 flex-wrap">
            <Codesnippet
              content={`.outline-with-inset {
        position: relative;
        width: 100%;
        height: 100%;
        &::after {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          content: "";
          background: transparent;
          transform: scale(0.85);
          outline: 5px solid #ffffff;
        }
      }`}
            />
            <div>
              <ul>
                <li>
                  Using position relative for the outline with inset, so that we
                  can keep the after pseudo element at absolute position.
                </li>
                <li>
                  <b>inset: 0</b> shorthand sets top, right, bottom, and left to
                  0
                </li>
                <li>
                  transform: scale(0.85);: This scales the pseudo-element down
                  to 85% of its original size, shrinking it towards its center.
                </li>
              </ul>
            </div>
          </div>
        </article>
      </section>
    </>
  );
};

export default ImageOutlineInset;
