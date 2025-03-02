import { useContext } from "react";
import { AuthContext } from "../contexts/authContext";

const Login = () => {
  const { dispatch } = useContext(AuthContext);
  const handleLogin = () => {
    console.log("login successfull");
    const uData = { email: "m@gmail.com", password: "12345", name: "mamta" };
    dispatch({ type: "LOGIN", payload: uData });
  };
  return (
    <div>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};
export default Login;
