import React from "react";
import { ChatForm } from "../components/Form";
import ChatList from "../components/List/ChatList";
import { PageNav } from "../components/Navbar";
import io from "socket.io-client";
import { NavItems } from "../components/Navbar/PageNav";

export default function ChatPage() {
  const items = [NavItems.USER_LIST, NavItems.LOGOUT];

  const token = sessionStorage.getItem("token");
  if (!token) window.location.href = "/login";

  const socket = io("http://localhost:5001", {
    transports: ["websocket", "polling", "flashsocket"],
    auth: {
      token: `Bearer ${token}`,
    },
  });

  const chatEndRef = React.useRef<HTMLDivElement>(null);

  return (
    <>
      <PageNav items={items}></PageNav>
      <ChatList socket={socket} chatEndRef={chatEndRef}></ChatList>
      <ChatForm socket={socket}></ChatForm>
      <div ref={chatEndRef}></div>
    </>
  );
}
