import { UserAuth } from "../context/AuthContext";

const Profile = () => {
  const { user } = UserAuth();
  
  return (
    <>
      {user && (
        <div className="container flex flex-col gap-3 p-5">
          <img className="w-24" src={user.photoURL} alt="photo" />
          <div>Name: {user.displayName}</div>
          <div>Email: {user.email}</div>
        </div>
      )}
    </>
  );
};

export default Profile;
