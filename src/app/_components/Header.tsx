import "./header.css";
const Header = () => {
  return (
    <header className="header">
      <h1>Grid Examples</h1>
      <nav>
        <ul>
          <li>
            <a href="/">Playing with images</a>
          </li>
          <li>
            <a href="/grid">Common Layouts</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
