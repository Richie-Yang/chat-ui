import * as _ from "lodash";
import { AnyObject } from "../type";
import { HttpMethod } from "../variable";

export { login, logout, create, get };

const API_HOST = import.meta.env.VITE_REACT_APP_API_HOST as string;

async function login(data: Record<string, string>) {
  const { email, password } = data;

  const response = await fetch(`${API_HOST}/api/user/login`, {
    method: HttpMethod.POST,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });
  return response.json();
}

async function logout(token: string) {
  const response = await fetch(`${API_HOST}/api/user/logout`, {
    method: HttpMethod.POST,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  return response.json();
}

async function create(data: Record<string, string>) {
  const { name, email, password } = data;

  const response = await fetch(`${API_HOST}/api/user`, {
    method: HttpMethod.POST,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, email, password }),
  });
  return response.json();
}

async function get(token: string, filter?: AnyObject) {
  const uri =
    !_.isNil(filter) && !_.isEmpty(filter)
      ? `${API_HOST}/api/user?filter=${JSON.stringify(filter)}`
      : `${API_HOST}/api/user`;

  const response = await fetch(uri, {
    method: HttpMethod.GET,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  return response.json();
}
