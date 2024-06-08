import { LoginForm } from "../components/Form";
import { PageNav } from "../components/Navbar";
import { NavItems } from "../components/Navbar/PageNav";

export default function LoginPage() {
  const items = [NavItems.SIGN_UP];

  return (
    <>
      <PageNav items={items}></PageNav>
      <LoginForm></LoginForm>
    </>
  );
}
