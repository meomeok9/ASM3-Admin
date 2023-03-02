import { Fragment, useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";
import useFixUrl from "../../hooks/useFixUrl";

import "./AddProductForm.css";
const AddProductForm = (props) => {
  const { fix } = useFixUrl();
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [shortDesc, setShortDesc] = useState("");
  const [longDesc, setLongDesc] = useState("");
  const [category, setCategory] = useState("iphone");
  const [photos, setPhotos] = useState();
  const [inventory, setInventory] = useState(0);
  const [img1, setImg1] = useState();
  const [img2, setImg2] = useState();
  const [img3, setImg3] = useState();
  const [img4, setImg4] = useState();
  const isEdit = props.isEdit;

  const { sendPostRequest } = useFetch();

  useEffect(() => {
    if (isEdit) {
      const _id = props.id;
      const getData = (d) => {
        setName(d.name);
        setPrice(d.price);
        setCategory(d.category);
        setShortDesc(d.short_desc);
        setLongDesc(d.long_desc);
        setImg1(fix(d.img1));
        setImg2(fix(d.img2));
        setImg3(fix(d.img3));
        setImg4(fix(d.img4));

        if (d.inventory) setInventory(d.inventory);
      };
      sendPostRequest(`/admin/getEditProduct`, _id, () => {}, getData);
    }
  }, [isEdit, sendPostRequest, props.id]);

  const inputNameChange = (e) => {
    if (e.target.value.trim().length > 0) setName(e.target.value);
    else setName("");
  };
  const inputPriceChange = (e) => {
    if (e.target.value > 0) setPrice(e.target.value);
    else setPrice(0);
  };
  const inputQuantityChange = (e) => {
    if (e.target.value > 0) setInventory(e.target.value);
    else setInventory(0);
  };
  const inputShortDesChange = (e) => {
    if (e.target.value.trim().length > 0) setShortDesc(e.target.value);
    else setShortDesc("");
  };
  const inputLongDesChange = (e) => {
    if (e.target.value.trim().length > 0) setLongDesc(e.target.value);
    else setLongDesc("");
  };
  const inputCategoryChange = (e) => {
    if (e.target.value.trim().length > 0) setCategory(e.target.value);
    else setCategory("");
  };

  const inputPhotosChange = (e) => {
    console.log(e.target.files);
    if (e.target.files) setPhotos(e.target.files);
    else setPhotos("");
  };
  const submitHandler = (e) => {
    e.preventDefault();
    if (
      name === "" ||
      price === 0 ||
      inventory === 0 ||
      shortDesc === "" ||
      longDesc === "" ||
      category === "" ||
      (!isEdit && photos.length < 4)
    ) {
      alert("Some input infomations wrong!!");
      return;
    }
    props.onSubmit({
      name,
      price,
      inventory,
      category,
      photos,
      short_desc: shortDesc,
      long_desc: longDesc,
    });
  };

  return (
    <div className="addform_container">
      <h3>{isEdit ? "Edit" : "Add New"} Product</h3>
      <form onSubmit={submitHandler} enctype="multipart/form-data">
        <div className="addhotel_input_ctn">
          <div>
            <p>Product Name</p>
            <input
              type="text"
              onChange={inputNameChange}
              value={name}
              placeholder="Name"
            />
            <p>Product Price</p>
            <input
              type="number"
              onChange={inputPriceChange}
              value={price}
              min={0}
              placeholder="Price"
            />
            {!isEdit && (
              <Fragment>
                <p>Photos</p>
                <input
                  type="file"
                  multiple={true}
                  accept=".jpg, .jpeg, .png"
                  onChange={inputPhotosChange}
                />
              </Fragment>
            )}
            {isEdit && (
              <Fragment>
                <p>Photos</p>
                <div className="edit_product_imgs">
                  {img1 && <img src={img1} alt={name} />}
                  {img2 && <img src={img2} alt={name} />}
                  {img3 && <img src={img3} alt={name} />}
                  {img4 && <img src={img4} alt={name} />}
                </div>
              </Fragment>
            )}
          </div>
          <div>
            <p>Category</p>
            <select onChange={inputCategoryChange} value={category}>
              <option value="iphone">Iphone</option>
              <option value="ipad">Ipad</option>
              <option value="macbook">Macbook</option>
              <option value="airpod">Airpod</option>
              <option value="watch">Watch</option>
              <option value="mouse">Mouse</option>
              <option value="keybroad">Keybroad</option>
              <option value="other">Other</option>
            </select>
            <p>Short Description</p>
            <input
              type="text"
              onChange={inputShortDesChange}
              value={shortDesc}
              placeholder="Short Description"
            />
            <p>Quantity</p>
            <input
              type="number"
              onChange={inputQuantityChange}
              min={0}
              value={inventory}
              placeholder="Quantity"
            />
            <p>Long Description</p>
            <textarea
              onChange={inputLongDesChange}
              value={longDesc}
              placeholder="Long Description"
            />
          </div>
        </div>
        <button type="submit">Send</button>
      </form>
    </div>
  );
};
export default AddProductForm;
