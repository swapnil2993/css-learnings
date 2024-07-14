import style from "./standard.module.css";

const Standard = () => {
  return (
    <>
      <p className="mb-4">
        Resize the page so get different layout for different screen sizes
      </p>
      <div className={style.layout}>
        <header className={style["main-head"]}>The header</header>
        <nav className={style["main-nav"]}>
          <ul className="flex gap-4">
            <li>
              <a href="">Nav 1</a>
            </li>
            <li>
              <a href="">Nav 2</a>
            </li>
            <li>
              <a href="">Nav 3</a>
            </li>
          </ul>
        </nav>
        <article className={style.content}>
          <h1>Main article area</h1>
          <p>
            In this layout, we display the areas in source order for any screen
            less that 500 pixels wide. We go to a two column layout, and then to
            a three column layout by redefining the grid, and the placement of
            items on the grid.
          </p>
        </article>
        <aside className={style.side}>
          <b>Sidebar</b>
          <br />
          The aside HTML tag is used to represent a section of a document that
          is tangentially related to the content around it. It's typically used
          for sidebars, pull quotes, advertisements, or any other content that
          is separate from the main content but still related
        </aside>
        <div className={style.ad}>Advertising</div>
        <footer className={style["main-footer"]}>The footer</footer>
      </div>
    </>
  );
};

export default Standard;
