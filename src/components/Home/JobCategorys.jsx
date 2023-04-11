import React, { useEffect, useState } from "react";
import Category from "./Category";

const JobCategorys = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("jobCategory.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  return (
    <div className="my-32 bg-white text-center ">
      <h2 className="text-5xl">Job Category List</h2>
      <p className="my-4">
        Explore thousands of job opportunities with all the information you
        need. Its your future
      </p>
      <div className="grid justify-center gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 ">
        {categories.map((category) => (
          <Category key={category.id} category={category} />
        ))}
      </div>
    </div>
  );
};

export default JobCategorys;
