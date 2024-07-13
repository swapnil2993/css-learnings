import Center from "./components/center/Center";
import "./page.css";

const componentMapParams = new Map<string, () => JSX.Element>([
  ["center", Center],
]);

const FallbackComponent = () => <div>Component not found</div>;

export default function GridLayouts({ params }: { params: { type: string } }) {
  const Component = componentMapParams.get(params.type) || FallbackComponent;
  return (
    <main>
      <Component />
    </main>
  );
}
