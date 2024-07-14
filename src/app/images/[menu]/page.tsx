import Common from "./components/Common";
import Gallery from "./components/Gallery";

import "./page.css";

const componentMapParams = new Map<string, () => JSX.Element>([
  ["common", Common],
  ["gallery", Gallery],
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
