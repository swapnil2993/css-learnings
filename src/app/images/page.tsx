import FilterHover from "../components/images/FilterHover";
import ImageOutlineInset from "../components/images/ImageOutlineInset";
import "./page.css";

export default function Images() {
  return (
    <main>
      <ImageOutlineInset />
      <FilterHover />
      <h5 className="mt-6 mb-6">Todos:</h5>
      <ul className="list-decimal">
        <li>Progressive Image Rendering</li>
        <li>Image gallery</li>
        <li>Image gallery scrollable</li>
        <li>Slide show</li>
        <li>Hero Image</li>
      </ul>
    </main>
  );
}
