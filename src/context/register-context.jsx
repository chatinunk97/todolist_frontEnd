import { createContext } from "react";
import { useState } from "react";
import registerAPI from "../API/register";

const context = createContext("Default Context Valuez");

export default function LoginContext(props) {
  const [username, setUsername] = useState("");
  const [usernameNull, setUsernameNull] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordNull, setPasswordNull] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [comparePassword, setComparePassword] = useState(true);

  const handleUsername = (event) => {
    setUsername(event.target.value);
  };
  const handlePassword = (event) => {
    setPassword(event.target.value);
  };
  const handleConfirmPassword = (event) => {
    setConfirmPassword(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!username) {
      return setUsernameNull(true);
    }
    setUsernameNull(false)
    if (!password) {
      return setPasswordNull(true);
    }
    setPasswordNull(false)
    if (password !== confirmPassword) {
      return setComparePassword(false);
    }
    setComparePassword(true);
    registerAPI(username, password);
  };

  const sharedObj = {
    handleUsername,
    usernameNull,
    handlePassword,
    passwordNull,
    handleConfirmPassword,
    handleSubmit,
    comparePassword,
  };
  return (
    <context.Provider value={sharedObj}>{props.children}</context.Provider>
  );
}
export { context };
