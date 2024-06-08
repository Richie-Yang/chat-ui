import React from "react";
import { ChatForm } from "../components/Form";
import ChatList from "../components/List/ChatList";
import { PageNav } from "../components/Navbar";
import io from "socket.io-client";
import { NavItems } from "../components/Navbar/PageNav";

const API_HOST = import.meta.env.VITE_REACT_APP_API_HOST as string;

export default function ChatPage() {
  const items = [NavItems.USER_LIST, NavItems.LOGOUT];

  const token = sessionStorage.getItem("token");
  if (!token) window.location.href = "/login";

  const socket = io(API_HOST, {
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
