import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout";
import AuthenticationPage, {
  action as authAction,
} from "../src/pages/AuthenticationPage";
import { action as logoutAction } from "./pages/Logout";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
    },
    {
      path: "auth",
      element: <AuthenticationPage />,
      action: authAction,
    },
    {
      path: "logout",
      action: logoutAction,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
