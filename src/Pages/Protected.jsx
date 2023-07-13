import { UserAuth } from "../context/AuthContext";

const Protected = () => {
  const { user } = UserAuth();

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <img
          src="https://i.pravatar.cc/500"
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-5xl font-bold">This is a protected route</h1>
          {user ? (
            <p className="py-6">You are alloved to see it</p>
          ) : (
            <p className="py-6">Sign it to see</p>
          )}
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Protected;
