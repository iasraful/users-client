/** @format */

import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AddUser from "./components/AddUser";
import Users from "./components/Users";
import UpdateUsers from "./components/UpdateUsers";
import Nav from "./components/Nav";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Users />,
      loader: () => fetch("https://api-user-alpha.vercel.app/users"),
    },
    {
      path: "/users/add",
      element: <AddUser />,
    },
    {
      path: "/update/:id",
      element: <UpdateUsers />,
      loader: ({ params }) =>
        fetch(`https://api-user-alpha.vercel.app/users/${params.id}`),
    },
  ]);
  return (
    <div>
      <Nav />
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}
