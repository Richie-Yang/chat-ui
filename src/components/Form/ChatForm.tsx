import { useState } from "react";
import { Socket } from "socket.io-client";

interface Props {
  socket: Socket;
}

export default function ChatForm(props: Props) {
  const { socket } = props;

  const [message, setMessage] = useState("");
  const token = sessionStorage.getItem("token");
  const chatId = sessionStorage.getItem("chatId");
  const fromId = sessionStorage.getItem("fromId");
  const toId = sessionStorage.getItem("toId");

  if (!token) window.location.href = "./login";
  if (!chatId || !fromId || !toId) window.location.href = "./user-list";

  return (
    <form
      id="form"
      action=""
      onSubmit={(event) => {
        event.preventDefault();
        console.log(message);
        if (!message) return;

        socket.emit("chat message", {
          fromId,
          toId,
          content: message,
          chatId,
        });
        setMessage("");
      }}
    >
      <input
        id="input"
        autoComplete="off"
        value={message}
        onInput={(event) => setMessage(event.currentTarget.value)}
      />
      <button>Send</button>
    </form>
  );
}
