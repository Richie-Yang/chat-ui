import { SignupForm } from "../components/Form";
import PageNav, { NavItems } from "../components/Navbar/PageNav";

export default function SignPage() {
  const items = [NavItems.LOGIN];

  return (
    <>
      <PageNav items={items}></PageNav>
      <SignupForm></SignupForm>
    </>
  );
}
