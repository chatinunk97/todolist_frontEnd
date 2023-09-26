import { Outlet, Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <div className="flex justify-between py-5 px-4  bg-blue-500 text-white">
        <h1 className="font-bold text-2xl">Todo List App</h1>
        <ul className="flex gap-5 items-center">
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"login"}>Login</Link>
          </li>
          <li>
            <Link to={"/"}>Logout</Link>
          </li>
          <li>
            <Link to={"register"}>Register</Link>
          </li>
        </ul>
      </div>
      <div className="p-8 max-w-xl mx-auto">
        <Outlet />
      </div>
    </>
  );
}
