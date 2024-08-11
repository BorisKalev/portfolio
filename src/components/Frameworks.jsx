import React from "react";

const Frameworks = ({ children }) => {
  return (
    <button className="cursor-default rounded-md text-blue-600 border border-blue-600 px-2 mt-3">
      {children}
    </button>
  );
};

export default Frameworks;
