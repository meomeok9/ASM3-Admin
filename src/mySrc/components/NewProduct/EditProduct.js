import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import Sidebar from "../Sidebar/Sidebar";
import AddProductForm from "./AddProductForm";

const EditProduct = () => {
  const _id = useParams();
  const navigate = useNavigate();
  const { sendPostRequest } = useFetch();

  const submitHandler = (h) => {
    h._id = _id;
    sendPostRequest("/admin/postEditProduct", h, () => {});
    navigate("/products");
  };

  return (
    <div className="newRoom_container">
      <Sidebar />
      <AddProductForm onSubmit={submitHandler} isEdit={true} id={_id} />
    </div>
  );
};

export default EditProduct;
