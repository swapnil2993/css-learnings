import Link from "next/link";
import style from "./header.module.css";

const links = [
  {
    title: "Images",
    url: "/images",
  },
  {
    title: "Grid Common Layouts",
    url: "/",
  },
];

const Header = () => {
  return (
    <header className={style.header}>
      <h1 className="text-white text-xl font-bold">
        <span>
          <span className="text-amber-100 uppercase">FE</span>&nbsp;
          <span className="tracking-widest">Learnings</span>
        </span>
      </h1>
      <nav className={style.navbar}>
        <ul>
          {links.map((link) => (
            <li key={link.url} className="mr-4">
              <Link className="" href={link.url}>
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
