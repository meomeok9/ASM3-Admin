import "./Home.css";

import InfoBoard from "../components/InfoBoard/InfoBoard";
import Sidebar from "../components/Sidebar/Sidebar";

import Orders from "../Orders/Orders";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const isLogin = useSelector((state) => state.login.isLogin);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLogin) return navigate("/login");
  }, [isLogin]);
  return (
    <div className="mainAdmin">
      <Sidebar />
      <div className="homeContent">
        <InfoBoard />
        <Orders />
      </div>
    </div>
  );
};

export default Home;
