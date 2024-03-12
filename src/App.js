import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout";
import AuthenticationPage, {
  action as authAction,
} from "../src/pages/AuthenticationPage";
import { action as logoutAction } from "./pages/Logout";
import { tokenLoader } from "./auth/auth";

function App() {
  const publicUrl = process.env.PUBLIC_URL; // Get the base path from PUBLIC_URL

  const router = createBrowserRouter([
    {
      path: `${publicUrl}/`,
      id: "root",
      loader: tokenLoader,
      element: <Layout />,
    },
    {
      path: `${publicUrl}/auth`,
      element: <AuthenticationPage />,
      action: authAction,
    },
    {
      path: `${publicUrl}/logout`,
      action: logoutAction,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
