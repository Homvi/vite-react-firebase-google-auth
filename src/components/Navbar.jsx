import { Link } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const Navbar = () => {
  const { user, googleSignIn, logOut } = UserAuth();

  const handleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };

  const handleLogOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };

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
          {!user ? (
            <li>
              <div onClick={handleSignIn}>Sign In</div>
            </li>
          ) : (
            <li>
              <div onClick={handleLogOut}>Log out</div>
            </li>
          )}
          {user && (
            <li>
              <div>Hello, {user.displayName}</div>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
