import { useState } from "react";
import Icon from "../components/Icon/Icon";
import Cell from "./Cell";
import DetailRow from "./DetailRow";
import "./OrderDetail.css";

const OrderDetail = (props) => {
  const data = props.data;
  const [page, setPage] = useState(1);
  const totalPages = Math.ceil(data.length / 10);
  const nextPgHandler = () => {
    if (page < totalPages) setPage(page + 1);
  };
  const prePgHandler = () => {
    if (page > 1) setPage(page - 1);
  };
  return (
    <div className="detail_container">
      <div className="detail_head ">
        <Cell isHead={true} width="15%" title="User ID" />
        <Cell isHead={true} width="15%" title="Name" />
        <Cell isHead={true} width="10%" title="Phone" />
        <Cell isHead={true} width="10%" title="Address" />
        <Cell isHead={true} width="10%" title="Total" />
        <Cell isHead={true} width="10%" title="Delivery" />
        <Cell isHead={true} width="10%" title="Status" />
        <Cell isHead={true} width="12%" title="Order Date" />
        <Cell isHead={true} width="8%" title="Detail" />
      </div>

      {data &&
        data.length > 0 &&
        data.map((item, i) => {
          if ((page - 1) * 8 <= i && i <= 8 * page)
            return <DetailRow item={item} key={item._id} />;
        })}
      <div>
        <hr />
        <div className="trans_page">
          <p>
            {1 + (page - 1) * 8} -{" "}
            {data.length < 8 * page ? data.length : 8 * page} of {totalPages}
          </p>
          <span onClick={prePgHandler}>
            <Icon name="faAngleLeft" />
          </span>
          <span onClick={nextPgHandler}>
            <Icon name="faAngleRight" />
          </span>
        </div>
      </div>
      {data && data.length === 0 && <h1>No Orders</h1>}
      {!data && <h1>Loading ...</h1>}
    </div>
  );
};
export default OrderDetail;
