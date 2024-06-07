import * as _ from "lodash";
import { userApi } from "../../apis";
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
      <ul className="list-group">
        {users.map((user: AnyObject) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </>
  );
}
