import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export default function LoginPage() {
  const [input, setInput] = useState({
    username: "",
    password: "",
  });
  const [isLoading, setLoading] = useState(false);
  const navigate = useNavigate();
  const ctx = useContext(AuthContext);
  const handleSubmitForm = (event) => {
    event.preventDefault();
    setLoading(true);
    axios
      .post("http://localhost:8099/user/login", input)
      .then((res) => {
        const token = res.data.accessToken;
        console.log("TOKENHERE", token);
        localStorage.setItem("accessToken", token);
        ctx.setUser(true);
        Swal.fire(
          "Login Completed!",
          `Welcome back ${input.username}`,
          "success"
        );
        navigate("/");
      })
      .catch((err) => {
        Swal.fire("Login Failed", err.response.data.message, "error");
      })
      .finally(() => {
        setTimeout(() => {
          setLoading(false);
        }, 900);
      });
  };

  if (isLoading) {
    return (
      <div className="spinner">
        <div className="loader"></div>
      </div>
    );
  }
  return (
    <form
      className="flex flex-col gap-4 p-4 shadow-lg bg-white rounded-xl"
      onSubmit={handleSubmitForm}
    >
      <div>
        <label htmlFor="username" className="block mb-1 font-semibold">
          Username
        </label>
        <input
          id="username"
          value={input.username}
          type="text"
          className="w-full border outline-none px-3 py-1.5 rounded-md focus:ring-2 focus:ring-blue-500"
          onChange={(event) => {
            setInput((prev) => {
              prev.username = event.target.value;
              return { ...prev };
            });
          }}
        />
      </div>
      <div>
        <label htmlFor="password" className="block mb-1 font-semibold">
          Password
        </label>
        <input
          id="password"
          value={input.password}
          type="password"
          className="w-full border outline-none px-3 py-1.5 rounded-md focus:ring-2 focus:ring-blue-500"
          onChange={(event) => {
            setInput({ ...input, password: event.target.value });
          }}
        />
      </div>

      <button className="flex items-center justify-center   bg-blue-500 px-3 py-1.5  text-white rounded-md">
        Login
      </button>
    </form>
  );
}
