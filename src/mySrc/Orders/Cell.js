import { Fragment } from "react";
import useFixUrl from "../hooks/useFixUrl";
import "./Cell.css";

const Cell = (props) => {
  const { fix } = useFixUrl();
  const isHead = props.isHead;
  const button = props.button;
  const img = props.img;
  const width = props.width;
  const src = props.src;
  return (
    <div
      className={`${isHead ? "cell_head" : "cell_detail"} cell_container`}
      style={{ width: width }}
    >
      {!button && !img && <p>{props.title}</p>}
      {button && (
        <button
          className="order_detail_button"
          type="button"
          onClick={props.clickHandler}
        >
          {props.title}
        </button>
      )}
      {img && src && (
        <Fragment>
          <img
            style={{ width: "24%" }}
            src={fix(props.src[0])}
            alt={props.title}
          />
          <img
            style={{ width: "24%" }}
            src={fix(props.src[1])}
            alt={props.title}
          />
          <img
            style={{ width: "24%" }}
            src={fix(props.src[2])}
            alt={props.title}
          />
          <img
            style={{ width: "24%" }}
            src={fix(props.src[3])}
            alt={props.title}
          />
        </Fragment>
      )}
    </div>
  );
};
export default Cell;
