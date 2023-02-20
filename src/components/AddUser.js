/** @format */

import React, { useState } from "react";

export default function AddUser() {
  const [user, setUser] = useState({});
  const handelSubmit = (e) => {
    e.preventDefault();
    // POST user to the Server

    fetch("https://api-user-alpha.vercel.app/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          alert("User Added Sucessfully");
          e.target.reset();
        }
      });
  };

  //   HGetting all the input Element and set in to the user > useState.

  const handelOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newUser = { ...user };
    newUser[field] = value;
    setUser(newUser);
    console.log(user);
  };
  let options = [
    { label: "Manufacturing", value: "manufacturing" },
    { label: "Construction materials", value: "construction materials" },
    { label: "Electronics and Optics", value: "electronics and optics" },
    { label: "Bakery & confectionery", value: "bakery and confectionery " },
    { label: "Beverages", value: "beverages" },
    { label: "Fish & Fish Products", value: "fish & fish products" },
    { label: "Meat products", value: "meat products" },
    { label: "Milk & Dairy Products", value: "milk & dairy products" },
  ];
  return (
    <div className="flex flex-col items-center justify-center bg-gray-100 px-6 lg:px-8 h-screen">
      <img
        className="mx-auto h-16 w-auto"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"
        alt="Workflow"
      />
      <h3 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
        Add User Account
      </h3>
      <p className="font-medium text-gray-900">
        Already registered?{" "}
        <a className="font-medium text-blue-500 hover:text-blue-700" href="/">
          Sigh in
        </a>
      </p>
      <div className="mt-8">
        <div className="bg-white py-8 px-16 shadow rounded">
          <form onSubmit={handelSubmit} action="#">
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
                  onBlur={handelOnBlur}
                  type="text"
                  name="name"
                  placeholder="Full Name"
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
                  onBlur={handelOnBlur}
                  type="email"
                  name="email"
                  placeholder="Email"
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
                  onChange={handelOnBlur}
                  name="sectors"
                  defaultValue={"Select Sector"}
                  required
                  className="w-full border border-gray-300 px-3 py-1 rounded-lg shadow-sm outline-none focus:border-yellow-500 focus:ring-1 "
                >
                  <option></option>

                  {options.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex items-center mt-4">
                <input
                  type="checkbox"
                  name="terms"
                  onChange={handelOnBlur}
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
              Add User
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
