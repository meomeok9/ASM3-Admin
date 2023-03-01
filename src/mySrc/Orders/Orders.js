import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import useFetch from "../hooks/useFetch";
import OrderDetail from "./OrderDetail";
import "./Orders.css";
const Orders = () => {
  const isLogin = useSelector((state) => state.login.isLogin);
  const { sendGetRequest } = useFetch();
  const [data, setData] = useState();

  useEffect(() => {
    if (!isLogin) return;
    const getData = (d) => {
      setData(d);
      //console.log(d);
    };
    sendGetRequest("/admin/getOrders", getData);
  }, [isLogin]);
  return (
    <div className="orders_container">
      {data && <OrderDetail data={data} />}
    </div>
  );
};
export default Orders;
