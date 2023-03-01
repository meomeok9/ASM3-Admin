import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Icon from "../components/Icon/Icon";
import "./ProductList.css";
import ProductListContent from "./ProductListContent";
import ProductListHead from "./ProductListHead";

const ProductList = (props) => {
  const data = props.data;
  const navigate = useNavigate();
  const [page, setPage] = useState(1);
  const totalPages = Math.ceil(data.length / 8);
  const nextPgHandler = () => {
    if (page < totalPages) setPage(page + 1);
  };
  const prePgHandler = () => {
    if (page > 1) setPage(page - 1);
  };

  const toAddNew = () => {
    navigate("/newProduct");
  };
  return (
    <div className="product_list_container">
      <div className="product_list_head">
        <h2>ProductList List</h2>{" "}
        <button type="button" onClick={toAddNew}>
          Add New
        </button>
      </div>
      <div className="product_table">
        <ProductListHead />

        {data &&
          data.map((d, i) => {
            if ((page - 1) * 8 <= i && i < 8 * page)
              return (
                <ProductListContent
                  data={d}
                  key={d._id}
                  onDelete={props.onDelete}
                  onEdit={props.onEdit}
                />
              );
          })}
      </div>
      <div>
        <hr />
        <div className="trans_page">
          <p>
            {1 + (page - 1) * 8} -{" "}
            {data.length < 8 * page ? data.length + 1 : 8 * page} of{" "}
            {totalPages}
          </p>
          <span onClick={prePgHandler}>
            <Icon name="faAngleLeft" />
          </span>
          <span onClick={nextPgHandler}>
            <Icon name="faAngleRight" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
