import { Fragment } from "react";
import { useSelector } from "react-redux";
import "./Message.css";
const Message = (props) => {
  const curRoomId = props.curRoomId;
  const data = useSelector((state) => state.chat.data);
  const mes = data.find((d) => d._id === curRoomId);
  return (
    <Fragment>
      {mes.message.map((m) => (
        <div
          key={Math.random()}
          className={`row_chat ${m.isUser ? "user_chat" : "reply"}`}
        >
          <p
            className={`${
              m.isUser ? "user_message" : "admin_reply"
            } messages_detail`}
          >
            <b>{`${m.isUser ? mes.useName : "👽"}: `}</b> {m.message}
          </p>
        </div>
      ))}
    </Fragment>
  );
};
export default Message;
