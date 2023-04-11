import React from "react";

const Header = ({ children }) => {
  return (
    <div className="mb-32 flex items-center justify-center h-96 w-full header">
      <h2 className="text-center text-3xl  font-bold">{children}</h2>
    </div>
  );
};

export default Header;
