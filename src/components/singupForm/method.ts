import { userApi } from "../../apis";
import Swal, { SweetAlertOptions } from "sweetalert2";

export { signupSubmit };

async function signupSubmit(data: Record<string, string>) {
  const error: SweetAlertOptions = {
    title: "Error!",
    text: "",
    icon: "error",
    confirmButtonText: "OK",
  };

  const { name, email, password } = data;
  if (!name || !email || !password) {
    error.text = "Please fill out all fields";
    Swal.fire(error);
    return;
  }

  const res = await userApi.create(data);
  console.log(res);
  if (res.status !== 200) {
    error.text = res.message;
    Swal.fire(error);
    return;
  }
  window.location.href = "./login";
}
