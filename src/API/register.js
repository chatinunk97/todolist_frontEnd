import axios from "axios";
import Swal from "sweetalert2";

export default async (username, password) => {
  const { data } = await axios.post("http://localhost:8088/user/register", {
    username,
    password,
  });
  if (data.message === true) {
    return Swal.fire("Register Completed !", `Welcome aboard ${username}`, "success");
  }
  return Swal.fire("Register Failed", data.message, "error");
};
