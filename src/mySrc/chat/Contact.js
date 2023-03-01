import { useDispatch } from "react-redux";
import { activeActions } from "../store/active-action";
import { ChatActions } from "../store/chat-actions";
import "./Contact.css";
const Contact = (props) => {
  const data = props.data;
  const blue = props.blue; // make difference color user
  const active = props.active;
  const dispatch = useDispatch();
  const clickHandler = () => {
    dispatch(ChatActions.deactive(data.userId));
    dispatch(activeActions.off());
    props.showMessage(data._id);
  };

  return (
    <button
      className={`${blue ? "blue" : "red"} ${
        active ? "active" : ""
      } contact_btn`}
      type="button"
      onClick={clickHandler}
    >
      {data.useName}
    </button>
  );
};
export default Contact;
