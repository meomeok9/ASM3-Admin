import { Route, Routes } from "react-router-dom";
import Login from "./mySrc/auth/Login";
import Logout from "./mySrc/auth/Logout";
import Home from "./mySrc/Home/Home";
import Products from "./mySrc/Product/Products";
import Detail from "./mySrc/Orders/Detail";

import NewProduct from "./mySrc/components/NewProduct/NewProduct";
import EditProduct from "./mySrc/components/NewProduct/EditProduct";
import OrderPage from "./mySrc/Orders/OrderPage";
import NotFound from "./mySrc/NotFound";
import Chat from "./mySrc/chat/Chat";
import io from "socket.io-client";
import { activeActions } from "./mySrc/store/active-action";
import { ChatActions } from "./mySrc/store/chat-actions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import useFetch from "./mySrc/hooks/useFetch";

function App() {
  const socket = io("https://asm3be17428.onrender.com", {
    transports: ["websocket"],
  });
  const dispatch = useDispatch();
  const { sendGetRequest } = useFetch();

  const isLogin = useSelector((state) => state.login.isLogin);
  useEffect(() => {
    const getData = (d) => {
      if (!isLogin) return;
      dispatch(ChatActions.getMessages({ data: d }));
    };
    sendGetRequest("/admin/getMessages", getData);
  }, [sendGetRequest, isLogin]);

  socket.on("send-back-from-server", (d) => {
    dispatch(ChatActions.getMessages({ data: d.data }));
    if (d.newPostId) {
      dispatch(activeActions.active());
      dispatch(ChatActions.active(d.newPostId));
    }
  });
  //console.log("all data ::: ", d);

  const replyHandler = (rep) => {
    socket.emit(`chatMessage`, rep);
  };
  const endChatHandler = (roomId) => {
    dispatch(ChatActions.setCurrentUser(""));
    const getData = (d) => {
      dispatch(ChatActions.getMessages({ data: d }));
    };
    sendGetRequest(`/admin/endChat/${roomId}`, getData);
  };

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/orders" element={<OrderPage />} />
        <Route path="/detail/:orderId" element={<Detail />} />
        <Route path="/products" element={<Products />} />
        <Route path="/newProduct" element={<NewProduct />} />
        <Route
          path="/chat"
          element={<Chat sendReply={replyHandler} endChat={endChatHandler} />}
        />
        <Route path="/editProduct/:_id" element={<EditProduct />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
