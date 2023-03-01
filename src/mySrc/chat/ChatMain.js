import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Icon from "../components/Icon/Icon";
import "./ChatMain.css";
import Contact from "./Contact";
import { ChatActions } from "../store/chat-actions";
import Message from "./Message";
const ChatMain = (props) => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.chat.data);
  const curRoomId = useSelector((state) => state.chat.curRoomId);
  const [reply, setReply] = useState("");

  const submitHanler = (e) => {
    e.preventDefault();
    if (!reply || reply.trim() === "") return;
    const mes = data.find((d) => d._id === curRoomId);
    const content = { toUser: mes.userId, message: reply, fromClient: false };

    props.sendReply(content);
    setReply("");
  };
  const showMessages = (_id) => {
    dispatch(ChatActions.setCurrentUser(_id));
  };
  const replyChangeHandler = (e) => {
    setReply(e.target.value);
  };

  const closeChatHandler = () => {
    if (window.confirm("Are you sure to end this conversation ?"))
      props.endChat(curRoomId);
  };
  return (
    <main className="chats_contenner">
      <div className="main_chat_content">
        <div className="chat_content">
          <div className="content_container">
            {curRoomId !== "" && <Message curRoomId={curRoomId} />}
            {curRoomId === "" && data.length === 0 && <h1>No Message</h1>}
            {curRoomId === "" && data.length > 0 && (
              <h1>Select user to start chat</h1>
            )}
          </div>
        </div>
        <div className="chat_contact">
          <div className="contact_container">
            {data.length > 0 &&
              data.map((d, i) => (
                <Contact
                  key={d._id}
                  blue={i % 2 === 0}
                  data={d}
                  active={d.active}
                  showMessage={showMessages}
                >
                  {d.useName}
                </Contact>
              ))}
          </div>
        </div>
      </div>
      <form className="chat_input" onSubmit={submitHanler}>
        <input type={"text"} value={reply} onChange={replyChangeHandler} />
        <button type="submit">
          <Icon name="faCommentSms" />
        </button>
        {curRoomId !== "" && (
          <button type="button" onClick={closeChatHandler}>
            <Icon name="faRightFromBracket" />
          </button>
        )}
      </form>
    </main>
  );
};
export default ChatMain;
