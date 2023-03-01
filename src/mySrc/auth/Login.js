import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { loginActions } from "../store/login-action";
import "./Login.css";
const Login = () => {
  const [email, setEmail] = useState("");
  const [passWord, setPassWord] = useState("");
  const { sendPostRequest } = useFetch();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const nameChangeHandler = (e) => {
    if (e.target.value.trim().length > 0) setEmail(e.target.value);
    else setEmail("");
  };
  const passwordChangeHandler = (e) => {
    if (e.target.value.trim().length > 0) setPassWord(e.target.value);
    else setPassWord("");
  };
  const submitHandler = (e) => {
    e.preventDefault();
    if (email.length === 0 || passWord.length === 0) {
      alert("Enter User Name and Password!");
      return;
    }
    const getRes = (res) => {
      alert(res);
    };

    const getData = (d) => {
      dispatch(loginActions.onLogin(d.user));
      navigate("/");
    };

    const getStatus = (status) => {
      console.log("status code :::::::::", status);
      if (status === 200) {
        
      } else {
        alert("some thing wrong!!!");
      }
    };

    sendPostRequest(
      "/signin",
      { email, passWord, isAdminApp: true },
      getRes,
      getData,
      getStatus
    );
  };
  return (
    <div className="login_container">
      <h1>Admin App</h1>
      <form className="login_form" onSubmit={submitHandler}>
        <p>Email:</p>
        <input
          type="text"
          onChange={nameChangeHandler}
          placeholder="Enter Your Email"
        />
        <p>Password:</p>
        <input
          type="password"
          onChange={passwordChangeHandler}
          placeholder="Enter Your Password"
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};
export default Login;
