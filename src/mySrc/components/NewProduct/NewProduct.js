import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import Sidebar from "../Sidebar/Sidebar";
import AddProductForm from "./AddProductForm";
import "./NewProduct.css";
const NewProduct = () => {
  const navigate = useNavigate();
  const isLogin = useSelector((state) => state.login.isLogin);

  useEffect(() => {
    if (!isLogin) return navigate("/login");
  }, [isLogin]);
  const { sendPostRequest, sendFile } = useFetch();

  const submitHandler = (prd) => {
    sendPostRequest("/admin/addProducts", prd, () => {});
    console.log("photos:   ", prd.photos);
    const files = prd.photos ? [...prd.photos] : [];
    const data = new FormData();
    data.append("name", prd.name);
    data.append("category", prd.category);
    data.append("price", prd.price);
    data.append("short_desc", prd.short_desc);
    data.append("long_desc", prd.long_desc);
    data.append("inventory", prd.inventory);
    files.forEach((file, i) => {
      data.append(`image`, file, file.name);
    });

    sendFile("/admin/addProducts", data, (res) => {
      alert(res);
    });

    navigate("/products");
  };
  return (
    <div className="newRoom_container">
      <Sidebar />
      <AddProductForm onSubmit={submitHandler} />
    </div>
  );
};
export default NewProduct;
