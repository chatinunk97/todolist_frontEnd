import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Header from "../components/Header";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/Registerpage";
import LoginContext from "../context/login-context";
import RegisterContext from "../context/register-context";
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div className=" bg-gray-200 h-screen">
        <Header />
      </div>
    ),
    children: [
      { path: "/", element: <HomePage /> },
      {
        path: "login",
        element: (
          <LoginContext>
            <LoginPage />
          </LoginContext>
        ),
      },
      {
        path: "register",
        element: (
          <RegisterContext>
            <RegisterPage />
          </RegisterContext>
        ),
      },
    ],
  },
]);

export default function Router() {
  return <RouterProvider router={router}></RouterProvider>;
}
