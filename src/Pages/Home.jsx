import { UserAuth } from "../context/AuthContext";

const Home = () => {
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
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">React-Vite-Firebase</h1>
          { user && <h1 className="text-3xl font-bold py-3">Hello, {user.displayName}</h1>}
          <p className="py-6">
            Fasten your seatbelts, this ain&apos;t your grandma&apos;s web app.
            Welcome to a seamless blend of React, Vite, and Firebase. Login with
            Google in a snap, explore your detailed profile, and exit with one
            click. All as smooth as jazz on a Sunday. Ready for the ride?
          </p>
          {user ? (
            <button onClick={handleLogOut} className="btn btn-primary">
              Log out
            </button>
          ) : (
            <button onClick={handleSignIn} className="btn btn-primary">
              Log in
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
