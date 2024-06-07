import { ChatForm } from "../components/Form";
import ChatList from "../components/List/ChatList";
import { PageNav } from "../components/Navbar";
import io from "socket.io-client";

export default function ChatPage() {
  const token = sessionStorage.getItem("token");
  if (!token) window.location.href = "/login";

  const socket = io({
    extraHeaders: {
      authorization: `Bearer ${token}`,
    },
  });

  return (
    <>
      <PageNav></PageNav>
      <ChatList socket={socket}></ChatList>
      <ChatForm socket={socket}></ChatForm>
    </>
  );
}
