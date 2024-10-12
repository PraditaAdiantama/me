import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-white shadow-xl w-full sticky py-4 rounded-xl">
      <nav>
        <ul className="flex items-center font-semibold gap-5 justify-center">
          <li>
            <Link to="#">Home</Link>
          </li>
          <li>
            <Link to="#">About Me</Link>
          </li>
          <li>
            <Link to="#">Contact Me</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
