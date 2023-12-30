import { useAuthContext } from "../services/context/AuthContext";

const Profile = () => {
  const [auth] = useAuthContext();
  return (
    <>
      {auth && (
        <>
          <div>{auth.username}</div>
          <div>{auth?.birthDate}</div>
          <div>{auth?.profileImage}</div>
          <div>{auth.genre}</div>
        </>
      )}
    </>
  );
};

export default Profile;
