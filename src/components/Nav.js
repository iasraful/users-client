/** @format */

import React from "react";

export default function Nav() {
  return (
    <div className="sticky top-0 z-50">
      <div className="p-4 bg-gray-100  border-gray-200 flex justify-start gap-2">
        <a
          className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
          href="/users/add/"
        >
          Add User
        </a>
        <a
          className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
          href="/"
        >
          Users
        </a>
      </div>
    </div>
  );
}
