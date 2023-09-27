import { Outlet, Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
export default function Header() {
  const ctx = useContext(AuthContext);
  return (
    <>
      <div className="flex justify-between py-5 px-4  bg-blue-500 text-white">
        <h1 className="font-bold text-2xl">Todo List App</h1>
        <ul className="flex gap-5 items-center">
          {ctx.user && (
            <li>
              <Link to={"/"}>Home</Link>
            </li>
          )}
          {!ctx.user && (
            <li>
              <Link to={"login"}>Login</Link>
            </li>
          )}
          {ctx.user && (
            <li>
              <Link
                to={"login"}
                onClick={() => {
                  ctx.setUser(false);
                  localStorage.removeItem('token')
                }}
              >
                Logout
              </Link>
            </li>
          )}

          {!ctx.user && (
            <li>
              <Link to={"register"}>Register</Link>
            </li>
          )}
        </ul>
      </div>
      <div className="p-8 max-w-xl mx-auto">
        <Outlet />
      </div>
    </>
  );
}
