import { UserAuth } from "../context/AuthContext";

const Protected = () => {
  const { user, googleSignIn } = UserAuth();

  const handleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        {user && (
          <img
            src="https://i.pravatar.cc/300"
            className="max-w-sm rounded-lg shadow-2xl"
          />
        )}

        <div>
          <h1 className="text-5xl font-bold">This is a protected route</h1>
          {user ? (
            <p className="py-6">You are alloved to see it {user.displayName}</p>
          ) : (
            <p className="py-6">Sign it to see</p>
          )}
          {!user && (
            <button onClick={handleSignIn} className="btn btn-primary">
              Sign in
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Protected;
