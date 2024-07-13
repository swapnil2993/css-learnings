/* eslint-disable @next/next/no-img-element */
import Codesnippet from "../Codesnippet";
import styles from "./styles.module.css";

const FilterHover = () => {
  return (
    <section>
      <h2>Filter Hover</h2>
      <p className="mb-4">Hover on the image</p>
      <div className="flex gap-4 flex-col md:flex-row">
        <div className={styles.filter}>
          <img
            src="https://picsum.photos/id/16/300"
            className={styles.img}
            alt="photo"
          />
        </div>
        <div>
          <Codesnippet
            content={`.filter {
        filter: grayscale(1) brightness(40%);
          &:hover {
            clip-path: 
              polygon(0 0, 100% 0, 100% 100%, 0 100%);
            filter: 
              grayscale(0) brightness(100%);
            transition: 
              filter 0.5s ease-in-out, clip-path 0.5s ease-in-out;
            cursor: pointer;
          }
        }`}
          />
        </div>
      </div>
    </section>
  );
};

export default FilterHover;
