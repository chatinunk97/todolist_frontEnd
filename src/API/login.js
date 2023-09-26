import axios from "axios";
import Swal from "sweetalert2";

export default async (username, password) => {
  const { data } = await axios.post("http://localhost:8088/user/login", {
    username,
    password,
  });
  if (data.message === true) {
    console.log('accessToken : ' , data.accessToken)
    return Swal.fire("Login Successful !", `Welcome Back ${username}`, "success");
  }
  return Swal.fire("Login Failed", data.message, "error");
};
