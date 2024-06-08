import React from "react";
import { userApi } from "../../apis";
import Navbar from "./Navbar";

export enum NavItems {
  LOGIN = "Login",
  SIGN_UP = "Signup",
  USER_LIST = "User List",
  LOGOUT = "Logout",
}

interface Props {
  items: NavItems[];
}

export default function PageNav(props: Props) {
  const { items } = props;

  const settings = {
    [NavItems.SIGN_UP]: {
      name: NavItems.SIGN_UP,
      onClickItem: (event: React.MouseEvent) => {
        event.preventDefault();
        window.location.href = "/signup";
      },
    },
    [NavItems.USER_LIST]: {
      name: NavItems.USER_LIST,
      onClickItem: (event: React.MouseEvent) => {
        event.preventDefault();
        window.location.href = "/user-list";
      },
    },
    [NavItems.LOGIN]: {
      name: NavItems.LOGIN,
      onClickItem: async (event: React.MouseEvent) => {
        event.preventDefault();
        window.location.href = "/login";
      },
    },
    [NavItems.LOGOUT]: {
      name: NavItems.LOGOUT,
      onClickItem: async (event: React.MouseEvent) => {
        event.preventDefault();
        const token = sessionStorage.getItem("token");
        if (!token) window.location.href = "/login";
        await userApi.logout(token!);
        sessionStorage.removeItem("token");
        window.location.href = "/login";
      },
    },
  };
  const navItems = items.map((item) => settings[item]);

  return (
    <div>
      <Navbar items={navItems} />
    </div>
  );
}
