import Form from "./Form";
import { signupSubmit } from "./method";

export default function SignupForm() {
  const fields = [
    { label: "name", type: "text" },
    { label: "email", type: "email" },
    { label: "password", type: "password" },
  ];
  const submitButton = { label: "submit", onSubmit: signupSubmit };

  return (
    <div>
      <Form fields={fields} submitButton={submitButton} />
    </div>
  );
}
