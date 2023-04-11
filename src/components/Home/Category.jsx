import React from "react";

const Category = ({ category }) => {
  const { category_name, category_logo, jobs_available } = category;
  return (
    <div className="header-bg-gradient flex flex-col p-10 justify-center items-center ">
      <img width="35px" src={category_logo} alt="" />
      <h2 className="mt-8 mb-2 font-semibold text-xl">{category_name}</h2>
      <p>{jobs_available} jobs available</p>
    </div>
  );
};

export default Category;
