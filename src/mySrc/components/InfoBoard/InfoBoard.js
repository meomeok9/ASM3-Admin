import { Fragment, useEffect, useState } from "react";
import { useSelector } from "react-redux";

import useFetch from "../../hooks/useFetch";
import useFormat from "../../hooks/useFormat";
import "./InfoBoard.css";
const InfoBoard = () => {
  const [data, setData] = useState();
  const { sendGetRequest } = useFetch();
  const { format } = useFormat();
  const isLogin = useSelector((state) => state.login.isLogin);
  useEffect(() => {
    if (!isLogin) return;
    const getData = (d) => {
      setData(d);
    //  console.log("infomation :", d);
    };
    sendGetRequest("/admin/getInfomation", getData);
  }, [sendGetRequest, isLogin]);

  return (
    <Fragment>
      {data && (
        <div className="inforbar_container">
          <div>
            <h3>Total Users</h3>
            <p>{data.totalUser}</p>
          </div>
          <div>
            <h3>Total Orders</h3>
            <p>{data.totalOrder}</p>
          </div>
          <div>
            <h3>Total Earning</h3>
            <p>{format(data.totalEarning)} VND</p>
          </div>
          <div>
            <h3>Order This Month</h3>
            <p>{data.ordersThisMonth}</p>
          </div>
          <div>
            <h3>Earning This Month</h3>
            <p>{format(data.earningThisMonth)} VND</p>
          </div>
        </div>
      )}
    </Fragment>
  );
};
export default InfoBoard;
