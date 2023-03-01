import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar/Sidebar";
import useFetch from "../hooks/useFetch";
import "./Products.css";
import ProductList from "./ProductList";
import { useSelector } from "react-redux";
const Products = () => {
  const { sendGetRequest, sendPostRequest, sendDelRequest } = useFetch();
  const [data, setData] = useState();
  const navigate = useNavigate();
  const isLogin = useSelector((state) => state.login.isLogin);

  useEffect(() => {
    if (!isLogin) return navigate("/login");
    const getData = (d) => {
      setData(d);
    };
    sendGetRequest("/admin/getProducts", getData);
  }, [sendGetRequest, isLogin]);

  const deleteHandler = (id) => {
    const getRes = (res) => {
      alert(res);
    };
    const getData = (d) => {
      setData(d);
    };
    sendDelRequest("/admin/deleteProduct", { _id: id }, getRes, getData);
  };
  const editHandler = (id) => {
    navigate(`/editProduct/${id}`);
  };

  return (
    <div className="mainAdmin">
      <Sidebar />
      {data && (
        <ProductList
          data={data}
          onDelete={deleteHandler}
          onEdit={editHandler}
        />
      )}
      {!data && (
        <div className="loading">
          <h1>Loading...</h1>
        </div>
      )}
    </div>
  );
};
export default Products;
