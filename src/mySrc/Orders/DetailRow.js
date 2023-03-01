import { useNavigate } from "react-router-dom";
import useConvertDate from "../hooks/useConvertDate";
import Cell from "./Cell";

const DetailRow = (props) => {
  const { convert } = useConvertDate();
  const item = props.item;
  const navigate = useNavigate();
  const clickHandler = () => {
    navigate(`/detail/${item._id}`);
  };

  return (
    <div className="detail_head" key={item._id}>
      <Cell isHead={false} width="15%" title={item.userId} />
      <Cell isHead={false} width="15%" title={item.userName} />
      <Cell isHead={false} width="10%" title={item.phoneNumber} />
      <Cell isHead={false} width="10%" title={item.address} />
      <Cell isHead={false} width="10%" title={item.total} />
      <Cell isHead={false} width="10%" title={item.delivery} />
      <Cell isHead={false} width="10%" title={item.state} />
      <Cell isHead={false} width="12%" title={convert(item.createdAt)} />
      <Cell
        isHead={false}
        width="8%"
        title="View"
        button={true}
        clickHandler={clickHandler}
      />
    </div>
  );
};
export default DetailRow;
