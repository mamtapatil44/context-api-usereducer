import { useContext } from "react";
import { AuthContext } from "../contexts/authContext";

const Profile = () => {
  const { state, dispatch } = useContext(AuthContext);
  const { user } = state;
  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };
  return (
    <div>
      <h1>Welcome!!!!, {user?.name}</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Profile;
