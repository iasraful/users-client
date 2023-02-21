/** @format */

import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";

export default function UpdateUsers() {
  // Stored Selected User Data
  const storedUser = useLoaderData();
  const { name, email, sectors } = storedUser;

  const [user, setUser] = useState(storedUser);
  const handelUpdateUser = (e) => {
    e.preventDefault();
    console.log(user);
    // UPDATE user Data & send to the Server.
    fetch(`https://api-user-alpha.vercel.app/users/${storedUser._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          alert("User Updated Sucessfully");
        }
        // console.log(data);
      });
  };

  //   HGetting all the input Element and set in to the user > useState.

  const handelInputChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newUser = { ...user };
    newUser[field] = value;
    setUser(newUser);
    console.log(user);
  };

  return (
    <div className="flex flex-col items-center bg-gray-100 py-12 px-6 lg:px-8 h-screen">
      <img
        className="mx-auto h-16 w-auto"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"
        alt="Workflow"
      />
      <h3 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
        Update User Account
      </h3>

      <div className="mt-8">
        <div className="bg-white py-8 px-16 shadow rounded">
          <form onSubmit={handelUpdateUser} action="#">
            <div className="">
              <label
                className="block text-sm mt-2 font-medium text-gray-700"
                htmlFor="name"
              >
                Full Name
              </label>
              <div className="mt-1">
                <input
                  className="w-full border border-gray-300 px-3 py-1 rounded-lg shadow-sm outline-none focus:border-yellow-600 focus:ring-1 "
                  onChange={handelInputChange}
                  type="text"
                  name="name"
                  defaultValue={name}
                  required
                />
              </div>
              <label
                className="block text-sm mt-2 font-medium text-gray-700"
                htmlFor="name"
              >
                Email:
              </label>
              <div className="mt-1">
                <input
                  className="w-full border border-gray-300 px-3 py-1 rounded-lg shadow-sm outline-none focus:border-yellow-600 focus:ring-1 "
                  onChange={handelInputChange}
                  type="email"
                  name="email"
                  placeholder="Email"
                  defaultValue={email}
                  required
                />
              </div>
              <label
                className="block text-sm mt-2 font-medium text-gray-700"
                htmlFor="email"
              >
                Sectors:
              </label>
              <div className="mt-1">
                <select
                  onChange={handelInputChange}
                  name="sectors"
                  required
                  defaultValue={sectors}
                  className="w-full border border-gray-300 px-3 py-1 rounded-lg shadow-sm outline-none focus:border-yellow-500 focus:ring-1 "
                >
                  <option value="Manufacturing">Manufacturing</option>
                  <option value="Construction materials">
                    &nbsp;&nbsp;&nbsp;&nbsp;Construction materials
                  </option>
                  <option value="Electronics and Optics">
                    &nbsp;&nbsp;&nbsp;&nbsp;Electronics and Optics
                  </option>
                  <option value="Electronics and Optics">
                    &nbsp;&nbsp;&nbsp;&nbsp;Food and Beverage
                  </option>
                  <option value="Bakery & confectionery products">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Bakery &amp;
                    confectionery products
                  </option>
                  <option value="Beverages">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Beverages
                  </option>
                  <option value="Fish & Fish Products">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Fish &amp;
                    fish products
                  </option>
                  <option value="Meat products">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Meat &amp;
                    meat products
                  </option>
                  <option value="Milk & Dairy Products">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Milk &amp;
                    dairy products
                  </option>

                  <option value="Sweets & Snacks">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Sweets &amp;
                    Snacks
                  </option>
                </select>
              </div>
              <div className="flex items-center mt-4">
                <input
                  type="checkbox"
                  name="terms"
                  required
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  htmlFor="link-checkbox"
                  className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  I agree with the{" "}
                  <a
                    href="/"
                    className="text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    terms and conditions
                  </a>
                  .
                </label>
              </div>
            </div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm mt-4 text-sm font-medium text-black bg-yellow-300 hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
            >
              Update User
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
