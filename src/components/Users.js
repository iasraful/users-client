/** @format */

import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

function Users() {
  const users = useLoaderData();
  const [displayUsers, setDisplayUsers] = useState(users);
  // DELETING Single User
  const handelDelete = (user) => {
    const agree = window.confirm(`Are you shure want to delete: ${user.name}`);
    if (agree) {
      //   console.log(`Deleting User With id: ${user._id}`);
      fetch(`https://api-user-alpha.vercel.app/users/${user._id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            // alert("User Deleted Sucessfully");
            const remainingUsers = displayUsers.filter(
              (usr) => usr._id !== user._id
            );
            setDisplayUsers(remainingUsers);
          }
        });
    }
  };

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <h1 className="my-6 text-center text-3xl font-extrabold text-gray-900">
        Users List
      </h1>
      <div className=" hidden md:block">
        <table className="w-full text-sm text-left text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50  ">
            <tr>
              <th
                scope="col"
                className="px-1 py-1 sm:px-4 sm:py-1 md:px-6 md:py-3 lg:px-6 lg:py-4 xl:px-8 xl:py-5 2xl:px-8 2xl:py-6"
              >
                User Name
              </th>
              <th
                scope="col"
                className="px-1 py-1 sm:px-4 sm:py-1 md:px-6 md:py-3 lg:px-6 lg:py-4 xl:px-8 xl:py-5 2xl:px-8 2xl:py-6"
              >
                Email:
              </th>
              <th
                scope="col"
                className="px-1 py-1 sm:px-4 sm:py-1 md:px-6 md:py-3 lg:px-6 lg:py-4 xl:px-8 xl:py-5 2xl:px-8 2xl:py-6"
              >
                Sector
              </th>

              <th
                scope="col"
                className="px-1 py-1 sm:px-4 sm:py-1 md:px-6 md:py-3 lg:px-6 lg:py-4 xl:px-8 xl:py-5 2xl:px-8 2xl:py-6"
              >
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {displayUsers.map((user) => (
              <tr key={user._id} className="bg-white border-b">
                <th
                  scope="row"
                  className="px-1 py-1  md:px-6 md:py-4 text-gray-900 whitespace-nowrap lg:px-6 lg:py-4 xl:px-8 xl:py-5 2xl:px-8 2xl:py-6"
                >
                  {user.name}
                </th>
                <td className="px-1 py-1  md:px-6 md:py-4 lg:px-6 lg:py-4 xl:px-8 xl:py-5 2xl:px-8 2xl:py-6">
                  {user.email}
                </td>
                <td className="px-1 py-1  md:px-6 md:py-4 lg:px-6 lg:py-4 xl:px-8 xl:py-5 2xl:px-8 2xl:py-6">
                  {user.sectors}
                </td>

                <td className="px-1 py-1 md:px-6 md:py-4 flex flex-col items-start">
                  <Link to={`/update/${user._id}`}>
                    <button className="font-medium text-blue-600 p-2 hover:underline">
                      Edit
                    </button>
                  </Link>
                  <button
                    onClick={() => handelDelete(user)}
                    className="font-medium text-red-600 p-2 hover:underline "
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {displayUsers.map((user) => (
        <div className="flex  md:hidden mb-6">
          <div className="flex-1 p-4 bg-gray-100 space-y-4">
            <h5 className="text-lg text-slate-700 font-semibold">
              Name: {user.name}
            </h5>
            <p>
              <span className="font-medium">Email:</span> {user.email}
            </p>
            <p>
              {" "}
              <span className="font-medium"> Sector: </span>
              {user.sectors}
            </p>
            <Link to={`/update/${user._id}`}>
              <button className="font-medium text-blue-600 p-2 hover:underline">
                Edit
              </button>
            </Link>
            <button
              onClick={() => handelDelete(user)}
              className="font-medium text-red-600 p-2 hover:underline "
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Users;
