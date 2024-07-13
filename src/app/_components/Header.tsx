import style from "./header.module.css";

const links = [
  {
    title: "Playing with images",
    url: "/",
  },
  {
    title: "Common Layouts",
    url: "/grid",
  },
];

const Header = () => {
  return (
    <header className={style.header}>
      <h1 className="text-white text-xl">Grid Examples</h1>
      <nav className={style.navbar}>
        <ul className="flex list-type-none">
          {links.map((link) => (
            <li key={link.url} className="mr-4">
              <a className="text-white" href={link.url}>
                {link.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
