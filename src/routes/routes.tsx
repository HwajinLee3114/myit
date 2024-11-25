import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { MainPage } from "../pages/main";
import { TodoPage } from "../pages/todo";
import { DefaultLayout } from "../components/layout/DefaultLayout";

const router = createBrowserRouter([
  {
    element: <DefaultLayout />,
    children: [
      {
        path: "/",
        element: <MainPage />,
      },
      {
        path: "/todo",
        element: <TodoPage />,
      },
      {
        path: "*",
        // element: <NotFoundPage />,
      },
    ],
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
