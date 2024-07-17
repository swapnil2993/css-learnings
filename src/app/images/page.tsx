import Link from "next/link";
import styles from "./page.module.css";

const ImageTag = () => {
  return (
    <div className={styles["wrapper-max-width-char"]}>
      <h2 className="text-xl font-bold mb-4">
        &lt;img&gt;: The Image Embed Element
      </h2>
      <ul className="list-decimal">
        <li className="mb-4">
          An img element represents an image. The image given by the src
          attribute is the embedded content, and the value of the alt attribute
          is the img element's fallback content. The src attribute must be
          present, and must contain a valid non-empty URL potentially surrounded
          by spaces referencing a non-interactive, optionally animated, image
          resource that is neither paged nor scripted.
        </li>
        <li className="mb-4">
          Including height and width enables the aspect ratio of the image to be
          calculated by the browser prior to the image being loaded. This aspect
          ratio is used to reserve the space needed to display the image,
          reducing or even preventing a layout shift when the image is
          downloaded and painted to the screen. Reducing layout shift is a major
          component of good user experience and web performance.
        </li>
        <li className="mb-4">
          Use the <b>object-position</b> property to position the image within
          the element's box, and the <b>object-fit</b> property to adjust the
          sizing of the image within the box (for example, whether the image
          should fit the box or fill it even if clipping is required)
        </li>
        <li className="mb-4">
          <div className="mb-4">
            <span>Attribute</span>&nbsp;
            <span className="font-bold mr-4">loading:</span>
            <span>
              Indicates how the browser should load the image defaulting to
              eager
            </span>
          </div>
          <ul className="ml-2">
            <li className="mb-2">
              <b>
                <a
                  href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#eager"
                  target="_blank"
                >
                  eager:
                </a>
              </b>
              &nbsp;Loads the image immediately, regardless of whether or not
              the image is currently within the visible viewport
            </li>
            <li className="mb-2">
              <b>
                <a
                  href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#lazy"
                  target="_blank"
                >
                  lazy:
                </a>
              </b>
              &nbsp;Defers loading the image until it reaches a calculated
              distance from the viewport, as defined by the browser. The intent
              is to avoid the network and storage bandwidth needed to handle the
              image until it's reasonably certain that it will be needed. This
              generally improves the performance of the content in most typical
              use cases. The biggest downside to this basic lazy loading is that
              the user will see a blank space where the image should be until
              the image is downloaded. Added a unique random ID to each image to
              prevent browser caching, ensuring each image is downloaded
              individually to demonstrate lazy loading effects in developer
              tools.
            </li>
          </ul>
        </li>
      </ul>

      <ul>
        <li>
          <Link href="/images/common">Common</Link>
        </li>
        <li>
          <Link href="/images/gallery">Gallery</Link>
        </li>
      </ul>
    </div>
  );
};

export default ImageTag;
