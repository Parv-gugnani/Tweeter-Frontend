import React from "react";

const Header = () => {
  return (
    <header className="bg-black text-white p-3">
      <div className="flex items-center space-x-10">
        {" "}
        {/* Adjust space-x-8 as needed for more or less spacing */}
        <h1 className="text-xl font-bold">For you</h1>
        <h1 className="text-xl font-bold">Following</h1>
        <h1 className="text-xl font-bold">Your community</h1>
      </div>
    </header>
  );
};

export default Header;
