import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar/Sidebar";

import "./Chat.css";
import ChatMain from "./ChatMain";

const Chat = (props) => {
  const navigate = useNavigate();
  const isLogin = useSelector((state) => state.login.isLogin);
  useEffect(() => {
    if (!isLogin) return navigate("/login");
  }, [isLogin]);
  //socket.close();
  const sendReply = (rep) => {
    props.sendReply(rep);
  };
  const endChatHandler = (roomId) => {
    props.endChat(roomId);
  };
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <ChatMain sendReply={sendReply} endChat={endChatHandler} />
    </div>
  );
};
export default Chat;
