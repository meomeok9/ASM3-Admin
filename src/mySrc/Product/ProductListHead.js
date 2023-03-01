import Cell from "../Orders/Cell";
import "./ProductListHead.css";
const ProductListHead = () => {
  return (
    <div className="product_head_container">
      <div className="transcheckbox">
        <input type="checkbox" />
      </div>
      <Cell isHead={true} title="Name" width="20%" />
      <Cell isHead={true} title="Quantity" width="15%" />
      <Cell isHead={true} title="Price" width="10%" />
      <Cell isHead={true} title="Image" width="30%" />
      <Cell isHead={true} title="Category" width="10%" />
      <Cell isHead={true} title="Actions" width="15%" />
    </div>
  );
};
export default ProductListHead;
