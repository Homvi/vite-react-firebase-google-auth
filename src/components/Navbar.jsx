import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          Authe-Firebase
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <details>
              <summary>Menu</summary>
              <ul className="p-2 bg-base-100">
                <li>
                  <Link to="/protected">Protected route</Link>
                </li>
                <li>
                  <Link to="/profile">Profile details</Link>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <a>Sign In</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
