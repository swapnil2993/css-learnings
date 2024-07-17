import Link from "next/link";
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
      <ul>
        <li>
          <Link href="/grid-layouts/center">Center with flex</Link>
        </li>
        <li>
          <Link href="/grid-layouts/center-grid">Center with grid</Link>
        </li>
        <li>
          <Link href="/grid-layouts/standard">Standard Responsive layout</Link>
        </li>
      </ul>
    </main>
  );
}
