import { Fragment } from "react";
import { useState } from "react";
import { useEffect } from "react";
import useFetch from "../hooks/useFetch";
import useFixUrl from "../hooks/useFixUrl";
import useFormat from "../hooks/useFormat";

import CartOrder from "./CardOrder";
import "./OrderItemDetail.css";

const OrderItemDetail = (props) => {
  const { fix } = useFixUrl();
  const prodId = props.prodId;
  const [data, setData] = useState();
  const { sendPostRequest } = useFetch();
  const { format } = useFormat();
  useEffect(() => {
    const getData = (d) => {
      setData(d);
    };
    sendPostRequest("/getProduct", { id: prodId }, () => {}, getData);
  }, [prodId, sendPostRequest]);

  return (
    <Fragment>
      {data && (
        <div className="order_items_detail">
          <CartOrder
            margin_left={true}
            isHead={false}
            title={data._id}
            width="18%"
          />
          <div className="margin_left2">
            <img src={fix(data.img1)} width="100px" />
          </div>
          <CartOrder
            margin_left={true}
            isHead={false}
            title={data.name}
            width="20%"
          />
          <CartOrder
            margin_left={true}
            isHead={false}
            title={`${format(data.price)} VND`}
            width="18%"
          />
          <CartOrder
            margin_left={true}
            isHead={false}
            title={props.quan}
            width="18%"
          />
        </div>
      )}
    </Fragment>
  );
};
export default OrderItemDetail;
