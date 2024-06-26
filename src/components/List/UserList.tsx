import * as _ from "lodash";
import { chatApi, userApi } from "../../apis";
import { useEffect, useState } from "react";
import { AnyObject } from "../../type";

export default function UserList() {
  const [users, setUsers] = useState([]);
  const token = sessionStorage.getItem("token");
  if (!token) window.location.href = "/login";
  const id = _.get(token!.split(":"), "[0]", "");

  useEffect(() => {
    const fetchUsers = async () => {
      const res = await userApi.get(token!, {
        where: {
          and: [{ fieldKey: "id", operator: "neq", fieldValue: `${id}` }],
        },
      });
      setUsers(res.data);
    };

    fetchUsers();
  }, [id, token]);

  return (
    <>
      <h1>User List</h1>
      <ul className="user-list">
        {users.map((user: AnyObject) => (
          <li
            className="user-list-item"
            key={user.id}
            onClick={async () => {
              const res = await chatApi.create(token!, {
                fromId: id,
                toId: user.id,
              });
              sessionStorage.setItem("chatId", res.data.id);
              sessionStorage.setItem("fromId", id);
              sessionStorage.setItem("toId", user.id);
              window.location.href = `/chat/${user.id}`;
            }}
          >
            {user.name}
          </li>
        ))}
      </ul>
    </>
  );
}
