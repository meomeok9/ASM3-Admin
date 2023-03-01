import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import useFetch from "../hooks/useFetch";

const Logout = () => {
  const navigate = useNavigate();
  const { sendGetRequest } = useFetch();
  const isLogin = useSelector((state) => state.login.isLogin);

  useEffect(() => {
    if (!isLogin) navigate("/login");
    sendGetRequest("/signout", () => {});
    navigate("/login");
  }, [isLogin, sendGetRequest]);
  return <div></div>;
};

export default Logout;
