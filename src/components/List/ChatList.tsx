import * as _ from "lodash";
import { chatApi } from "../../apis";
import React, { useEffect, useState } from "react";
import { AnyObject } from "../../type";
import moment from "moment";
import image from "../../../public/images/default_avatar.png";
import { Socket } from "socket.io-client";

interface Props {
  socket: Socket;
  chatEndRef: React.RefObject<HTMLDivElement>;
}

export default function ChatList(props: Props) {
  const { socket, chatEndRef } = props;
  console.log(socket);

  const [messages, setMessages] = useState([{}]);

  const token = sessionStorage.getItem("token");
  const chatId = sessionStorage.getItem("chatId");
  const fromId = sessionStorage.getItem("fromId");
  const toId = sessionStorage.getItem("toId");
  if (!token) window.location.href = "/login";
  if (!chatId || !fromId || !toId) window.location.href = "/user-list";
  const id = _.get(token!.split(":"), "[0]", "");

  useEffect(() => {
    const fetchMessages = async () => {
      const res = await chatApi.getMessages(token!, chatId!, {
        limit: 10,
      });
      const parsedMessages = res.data.map((messageData: AnyObject) =>
        _parseMessage(messageData, fromId!)
      );
      setMessages(parsedMessages);
      window.scrollTo(0, document.body.scrollHeight);
    };
    fetchMessages();
  }, [id, token, chatId, fromId, toId]);

  socket.on(chatId!, (messageData) => {
    const msg = _parseMessage(messageData, fromId!);
    const newMessages = [...messages, msg];
    setMessages(newMessages);
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  });

  const switchSource = (source: string) => `message ${source}`;

  return (
    <>
      <ul className="chat-container">
        <ul id="messages" className="chat">
          {messages.map((message: AnyObject) => (
            <li key={message.at} className={switchSource(message.source)}>
              <img className="logo" src={image} />
              <p>{message.message}</p>
              <span>{message.at}</span>
            </li>
          ))}
        </ul>
      </ul>
    </>
  );
}

function _parseMessage(messageData: AnyObject, fromId: string) {
  const { content, from, createdAt } = messageData;
  const datetime = moment(createdAt * 1000).format("YYYY-MM-DD HH:mm:ss");
  const source = fromId === from.id ? "right" : "left";
  const talker = source === "right" ? "You" : from.name;
  return {
    source,
    message: `${talker}:\n${content}`,
    at: datetime,
  };
}

// function _appendMessage(msg: AnyObject, messages: HTMLElement) {
//   const { source, message, at } = msg;
//   const item = document.createElement("li");
//   item.classList.add("message", source);

//   const image = document.createElement("img");
//   image.classList.add("logo");
//   image.setAttribute("src", "./public/images/default_avatar.png");

//   const text = document.createElement("p");
//   text.textContent = message;
//   const time = document.createElement("span");
//   time.textContent = at;

//   const elements = [image, text, time];
//   for (const element of elements) item.appendChild(element);
//   messages.appendChild(item);
//   window.scrollTo(0, document.body.scrollHeight);
// }
