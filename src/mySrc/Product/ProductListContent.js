import Icon from "../components/Icon/Icon";
import useFormat from "../hooks/useFormat";
import Cell from "../Orders/Cell";

import "./ProductListContent.css";

const ProductListContent = (props) => {
  const data = props.data;
  const { format } = useFormat();
  const editHandler = () => {
    props.onEdit(data._id);
  };
  const deleteHandler = () => {
    if (window.confirm("Are you sure to delete?")) props.onDelete(data._id);
  };
  return (
    <div className="hotels_container">
      <div className="transcheckbox">
        <input type="checkbox" />
      </div>
      <Cell isHead={false} title={data.name} width="20%" />
      <Cell isHead={false} title={data.inventory} width="15%" />
      <Cell isHead={false} title={`${format(data.price)} VND`} width="10%" />
      <Cell
        isHead={false}
        img={true}
        src={[data.img1, data.img2, data.img3, data.img4]}
        title={data.name}
        width="30%"
      />
      <Cell isHead={false} title={data.category} width="10%" />
      <div className="actionContainer">
        <button type="button" onClick={editHandler}>
          <Icon name="faScrewdriverWrench" /> Edit
        </button>
        <button type="button" onClick={deleteHandler}>
          <Icon name="faTrashCan" />
          delete
        </button>
      </div>
    </div>
  );
};
export default ProductListContent;
