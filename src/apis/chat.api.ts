import * as _ from "lodash";
import { AnyObject } from "../type";
import { HttpMethod } from "../variable";

export { create, getMessages };

const API_HOST = import.meta.env.VITE_REACT_APP_API_HOST as string;

async function create(token: string, data: Record<string, string>) {
  const { fromId, toId } = data;

  const response = await fetch(`${API_HOST}/api/chat`, {
    method: HttpMethod.POST,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ fromId, toId, content: "Hello" }),
  });
  return response.json();
}

async function getMessages(token: string, chatId: string, filter?: AnyObject) {
  const baseUrl = `${API_HOST}/api/chat/${chatId}/messages`;
  const uri =
    !_.isNil(filter) && !_.isEmpty(filter)
      ? `${baseUrl}?filter=${JSON.stringify(filter)}`
      : baseUrl;

  const response = await fetch(uri, {
    method: HttpMethod.GET,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  return response.json();
}
