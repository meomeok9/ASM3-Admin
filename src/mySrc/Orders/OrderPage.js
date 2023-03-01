import "./OrderPage.css";

import Sidebar from "../components/Sidebar/Sidebar";

import Orders from "../Orders/Orders";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const OrderPage = () => {
  const isLogin = useSelector((state) => state.login.isLogin);
  const navigate = useNavigate();
  useEffect(() => {
    if (!isLogin) navigate("/login");
  }, [isLogin]);
  return (
    <div className="mainAdmin">
      <Sidebar />
      <div className="homeContent">
        <h1>All Orders</h1>
        <Orders />
      </div>
    </div>
  );
};

export default OrderPage;
