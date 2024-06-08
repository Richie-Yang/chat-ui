import { PageNav } from "../components/Navbar";
import UserList from "../components/List/UserList";
import { NavItems } from "../components/Navbar/PageNav";

export default function UserListPage() {
  const items = [NavItems.USER_LIST, NavItems.LOGOUT];

  return (
    <>
      <PageNav items={items}></PageNav>
      <UserList></UserList>
    </>
  );
}
