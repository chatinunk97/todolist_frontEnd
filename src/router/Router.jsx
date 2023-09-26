import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Header from "../components/Header";
import HomePage from "../pages/Homepage";
import LoginPage from "../pages/Loginpage";
import RegisterPage from "../pages/Registerpage";
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
      { path: "login", element: <LoginPage /> },
      { path: "register", element: <RegisterPage /> },
    ],
  },
]);

export default function Router() {
  return <RouterProvider router={router}></RouterProvider>;
}
