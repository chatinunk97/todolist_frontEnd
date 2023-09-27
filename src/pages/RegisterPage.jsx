import { useState } from "react";
import Joi from "joi";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const schema = Joi.object({
  username: Joi.string().min(3).max(30).required(),
  password: Joi.string().min(4).alphanum().required(),
  confirmPassword: Joi.string().valid(Joi.ref("password")).required(),
});

export default function RegisterPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [stateError, setError] = useState({
    username: "",
    password: "",
    confirmPassword: "",
  });
  const [isLoading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleSubmitForm = (event) => {
    event.preventDefault();
    const { value, error } = schema.validate(
      { username, password, confirmPassword },
      { abortEarly: false }
    );

    if (error) {
      const nextError = {
        username: "",
        password: "",
        confirmPassword: "",
      };

      for (let item of error.details) {
        nextError[item.path[0]] = item.message;
      }

      setError(nextError);

      return;
    }
    setError({
      username: "",
      password: "",
      confirmPassword: "",
    });
    setLoading(true);
    axios
      .post("http://localhost:8099/user/register", {
        username,
        password,
      })
      .then((res) => {
        console.log(res.data);
        alert(res.data.message);
        navigate("/login");
      })
      .catch((err) => {
        console.log("ERROR#######", err);
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
          value={username}
          type="text"
          className={`w-full border outline-none px-3 py-1.5 rounded-md focus:ring-2 ${
            stateError.username ? "focus:ring-pink-500" : "focus:ring-blue-500"
          }`}
          onChange={(event) => {
            setUsername(event.target.value);
          }}
        />
        {stateError.username && (
          <span className="text-pink-500">{stateError.username}</span>
        )}
      </div>
      <div>
        <label htmlFor="password" className="block mb-1 font-semibold">
          Password
        </label>
        <input
          id="password"
          value={password}
          type="password"
          className={`w-full border outline-none px-3 py-1.5 rounded-md focus:ring-2 ${
            stateError.password ? "focus:ring-pink-500" : "focus:ring-blue-500"
          }`}
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
        {stateError.password && (
          <span className="text-pink-500">{stateError.password}</span>
        )}
      </div>
      <div>
        <label htmlFor="confirmPassword" className="block mb-1 font-semibold">
          Confirm Password
        </label>
        <input
          id="confirmPassword"
          value={confirmPassword}
          type="password"
          className={`w-full border outline-none px-3 py-1.5 rounded-md focus:ring-2 ${
            stateError.confirmPassword
              ? "focus:ring-pink-500"
              : "focus:ring-blue-500"
          }`}
          onChange={(event) => {
            setConfirmPassword(event.target.value);
          }}
        />
        {stateError.confirmPassword && (
          <span className="text-pink-500">{stateError.confirmPassword}</span>
        )}
      </div>
      <button className="flex items-center justify-center   bg-blue-500 px-3 py-1.5  text-white rounded-md">
        Sign Up
      </button>
    </form>
  );
}
