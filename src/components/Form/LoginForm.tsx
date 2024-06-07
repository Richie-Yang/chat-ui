import Form from "./Form";
import { loginSubmit } from "./method";

export default function LoginForm() {
  const fields = [
    { label: "email", type: "email" },
    { label: "password", type: "password" },
  ];
  const submitButton = { label: "Login", onSubmit: loginSubmit };

  return (
    <div>
      <Form fields={fields} submitButton={submitButton} />
    </div>
  );
}
