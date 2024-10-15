import React from "react";

const Sidebar = () => {
  return (
    <aside className="bg-black text-white w-60 min-h-screen p-4 border-r-2 border-gray-600">
      <ul>
        <li className="mb-4 text-right">
          <a href="#">Home</a>
        </li>
        <li className="mb-4">
          <a href="#">Explore</a>
        </li>
        <li className="mb-4">
          <a href="#">Notifications</a>
        </li>
        <li className="mb-4">
          <a href="#">Messages</a>
        </li>
        <li className="mb-4">
          <a href="#">Bookmarks</a>
        </li>
        <li className="mb-4">
          <a href="#">Lists</a>
        </li>
        <li>
          <a href="#">Profile</a>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
