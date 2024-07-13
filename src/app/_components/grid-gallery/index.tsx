/* eslint-disable @next/next/no-img-element */
import HighLightCode from "../Codesnippet";
import "./styles.css";
const Gallery = () => {
  return (
    <>
      <section className="m-4">
        <h2 className="dark:text-white mb-4 ml-4 text-lg tracking-tight font-bold text-gray-900">
          Playing with images
        </h2>
        <div className="grid">
          <div className="outline-with-inset">
            <img src="https://picsum.photos/id/143/300" alt="photo" />
          </div>
          <div className="outline-with-inset">
            <img src="https://picsum.photos/id/22/300" alt="photo" />
          </div>
          <div className="outline-with-inset">
            <img src="https://picsum.photos/id/56/500" alt="photo" />
          </div>
          <div className="outline-with-inset">
            <img src="https://picsum.photos/id/44/300" alt="photo" />
          </div>
          <div className="outline-with-inset">
            <img src="https://picsum.photos/id/25/300" alt="photo" />
          </div>
          <div className="filter">
            <img src="https://picsum.photos/id/16/300" alt="photo" />
          </div>
        </div>
      </section>
      <section className="m-4">
        <h2 className="dark:text-white mb-4 ml-4 text-lg tracking-tight font-bold text-gray-900">
          Key points
        </h2>
        <div className="flex gap-4">
          <HighLightCode
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
                <b>inset: 0</b> shorthand sets top, right, bottom, and left to 0
              </li>
              <li>
                transform: scale(0.85);: This scales the pseudo-element down to
                85% of its original size, shrinking it towards its center.
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Gallery;
