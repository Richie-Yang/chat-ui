import { userApi } from "../../apis";
import Swal, { SweetAlertOptions } from "sweetalert2";

export { loginSubmit, signupSubmit };

async function loginSubmit(data: Record<string, string>) {
  const res = await userApi.login(data);
  const error: SweetAlertOptions = {
    title: "Error!",
    text: "",
    icon: "error",
    confirmButtonText: "OK",
  };
  console.log(res);
  if (res.status === 401) error.text = "either email or password is incorrect";
  else if (res.status !== 200) error.text = data.message;
  if (error.text) {
    Swal.fire(error);
    return;
  }

  const id = res.data.id;
  const token = res.data.token;
  if (!id || !token) throw new Error("Invalid response");

  const authToken = `${id}:${token}`;
  sessionStorage.setItem("token", authToken);
  if (res.status === 200) window.location.href = "./user-list";
}

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
