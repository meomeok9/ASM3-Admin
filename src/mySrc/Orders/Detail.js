import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Sidebar from "../components/Sidebar/Sidebar";
import useFetch from "../hooks/useFetch";
import useFormat from "../hooks/useFormat";
import OrderItemDetail from "./OrderItemDetail";
import "./Detail.css";
const Detail = () => {
  const params = useParams();
  const { sendPostRequest } = useFetch();
  const { format } = useFormat();
  const orderId = params.orderId;
  const [data, setData] = useState();
  const navigate = useNavigate();
  useEffect(() => {
    const getData = (d) => {
      setData(d);
      console.log("data :", d);
    };
    sendPostRequest(
      "/orderDetail",
      { orderId: orderId },
      (res) => {
        console.log(res);
      },
      getData
    );
  }, [orderId, sendPostRequest]);

  const returnHandler = () => {
    navigate("/");
  };
  return (
    <div className="detail_main_container">
      <Sidebar />
      <div>
        <div className="main_order_container">
          <div>
            <h2>Infomation Order</h2>
            <div>
              {data && <p>Full Name :{data.useName}</p>}
              {data && <p>Phone: {data.phoneNumber}</p>}
            </div>
            <div>
              {data && <p>Address: {data.address}</p>}
              {data && <p>Total: {format(data.total)} VND</p>}
            </div>
          </div>
          <button type="button" onClick={returnHandler}>
            Return
          </button>
        </div>
        <div className="order_detail_table">
          <div className="order_title">
            <h5 className="h5_14">PRODUCT ID</h5>
            <h5 className="h5_14">IMAGE</h5>
            <h5 className="longger_h5">Name</h5>
            <h5 className="h5_14">PRICE</h5>
            <h5 className="h5_14">QUANTITY</h5>
          </div>
          {data &&
            data.items.map((item) => {
              return (
                <OrderItemDetail
                  prodId={item.productId}
                  quan={item.quan}
                  key={item._id}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
};
export default Detail;
