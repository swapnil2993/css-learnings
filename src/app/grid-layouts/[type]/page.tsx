import CenterWithGrid from "./components/center-with-grid/Center";
import Center from "./components/center/Center";
import "./page.css";

const componentMapParams = new Map<string, () => JSX.Element>([
  ["center", Center],
  ["center-grid", CenterWithGrid],
]);

const FallbackComponent = () => <div>Component not found</div>;

export default function GridLayouts({ params }: { params: { type: string } }) {
  const Component = componentMapParams.get(params.type) || FallbackComponent;
  return (
    <main>
      <div className="wrapper">
        <Component />
      </div>
    </main>
  );
}
