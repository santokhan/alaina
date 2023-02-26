import React from "react";

const SectionHeader = ({ title, description }) => {
  return (
    <div className="text-center w-3/4 mx-auto my-10 lg:mt-20">
      <h1 className="text-4xl lg:text-5xl font-medium capitalize text-gray-600">
        {title}
      </h1>
      <div className="flex justify-center items-center my-12 w-2/4 mx-auto">
        <div className="w-1/2 h-0.5 bg-gray-200"></div>
        <div className="w-2 h-2 rounded bg-gray-200 mx-1"></div>
        <div className="w-1/2 h-0.5 bg-gray-200"></div>
      </div>
      <p className="text-xl ">{description}</p>
    </div>
  );
};

export default SectionHeader;
