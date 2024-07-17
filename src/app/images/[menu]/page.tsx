import Common from "./components/Common";
import Gallery from "./components/Gallery";
import LazyLoad from "./components/BlurryLoadingImage";

import "./page.css";

const componentMapParams = new Map<string, () => JSX.Element>([
  ["common", Common],
  ["gallery", Gallery],
  ["lazy-load", LazyLoad],
]);

const FallbackComponent = () => <div>Component not found</div>;

export default function ImageMainPage({
  params,
}: {
  params: { menu: string };
}) {
  const Component = componentMapParams.get(params.menu) || FallbackComponent;
  return (
    <main>
      <Component />
    </main>
  );
}
