import CenterWithGrid from "./components/center-with-grid/Center";
import Center from "./components/center/Center";
import Standard from "./components/standard/Standard";
import style from "./page.module.css";

const componentMapParams = new Map<string, () => JSX.Element>([
  ["center", Center],
  ["center-grid", CenterWithGrid],
  ["standard", Standard],
]);

const FallbackComponent = () => <div>Component not found</div>;

export default function GridLayouts({ params }: { params: { type: string } }) {
  const Component = componentMapParams.get(params.type) || FallbackComponent;
  return (
    <main>
      <div className={style.wrapper}>
        <Component />
      </div>
    </main>
  );
}
