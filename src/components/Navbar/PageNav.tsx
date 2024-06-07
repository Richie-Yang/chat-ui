import React from "react";
import { userApi } from "../../apis";
import Navbar from "./Navbar";

export default function PageNav() {
  const token = sessionStorage.getItem("token");
  if (!token) window.location.href = "/login";

  const items = [
    { name: "Home", onClickItem: () => window.location.replace("/") },
    {
      name: "LogOut",
      onClickItem: async (event: React.MouseEvent) => {
        event.preventDefault();
        await userApi.logout(token!);
        sessionStorage.removeItem("token");
        window.location.href = "/login";
      },
    },
  ];

  return (
    <div>
      <Navbar items={items} />
    </div>
  );
}
