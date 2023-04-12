// use local storage to manage cart data
const addToDb = (id) => {
  let appliedJobsData = getAppliedJobs();
  // add quantity
  const quantity = appliedJobsData[id];
  if (!quantity) {
    appliedJobsData[id] = 1;
  } else {
    const newQuantity = quantity + 1;
    appliedJobsData[id] = newQuantity;
  }
  localStorage.setItem("appliedJobsData", JSON.stringify(appliedJobsData));
};

const removeFromDb = (id) => {
  const shoppingCart = getAppliedJobs();
  if (id in shoppingCart) {
    delete shoppingCart[id];
    localStorage.setItem("appliedJobsData", JSON.stringify(shoppingCart));
  }
};

const getAppliedJobs = () => {
  let shoppingCart = {};

  //get the shopping cart from local storage
  const storedCart = localStorage.getItem("appliedJobsData");
  if (storedCart) {
    shoppingCart = JSON.parse(storedCart);
  }
  return shoppingCart;
};

const deleteShoppingCart = () => {
  localStorage.removeItem("appliedJobsData");
};

export { addToDb, removeFromDb, getAppliedJobs, deleteShoppingCart };
