/* eslint-disable @next/next/no-img-element */

import Gallery from "./_components/images";
import FilterHover from "./_components/images/FilterHover";
import "./page.css";

export default function Images() {
  return (
    <main>
      <Gallery />
      <FilterHover />
    </main>
  );
}
