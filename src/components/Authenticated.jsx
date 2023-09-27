import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

export default function Authenticated(props) {
  const ctx = useContext(AuthContext);
  if (!ctx.user) {
    return<Navigate to={"/login"}></Navigate>;
  }
  return props.children;
}
