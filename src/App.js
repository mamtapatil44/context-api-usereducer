import { useContext } from "react";
import Login from "./components/Login";
import Profile from "./components/Profile";
import { AuthContext } from "./contexts/authContext";
import "./styles.css";

export default function App() {
  const { state } = useContext(AuthContext);
  const { isAuthenticate } = state;
  console.log("user in app ", isAuthenticate);
  return (
    <div className="App">
      <h1>Context-APi with reducer</h1>
      {isAuthenticate ? <Profile /> : <Login />}
    </div>
  );
}
