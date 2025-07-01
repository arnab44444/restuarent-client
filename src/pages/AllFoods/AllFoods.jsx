import React, { useState } from "react";
import { useLoaderData } from "react-router";

const AllFoods = () => {
  const foodsData = useLoaderData();
  const [foods, setFoods] = useState(foodsData || []);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");
  const [viewMode, setViewMode] = useState("card");

  const handleSort = (criteria, order = sortOrder) => {
    let sortedFoods = [...foods];
    if (criteria === "category") {
      sortedFoods.sort((a, b) => a.category.localeCompare(b.category));
    } else if (criteria === "price") {
      sortedFoods.sort((a, b) => order === "asc" ? a.price - b.price : b.price - a.price);
    }
    setSortBy(criteria);
    setFoods(sortedFoods);
  };

  const handlePriceOrderChange = (e) => {
    const selectedOrder = e.target.value;
    setSortOrder(selectedOrder);
    handleSort("price", selectedOrder);
  };

  const filteredFoods = foods.filter((food) =>
    food.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h2 className="text-2xl mt-5 text-green-600 text-center font-bold">Here All Foods Data are showing</h2>

      {/* Filter Bar */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 px-6 mt-8">
        {/* Search Centered */}
        <div className="w-full md:w-1/2 flex justify-center">
          <input
            type="text"
            placeholder="Search by food name..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="input input-bordered w-full max-w-md"
          />
        </div>

        {/* Sort & View Toggle */}
        <div className="flex items-center gap-4">
          <div>
            <label className="mr-2 font-semibold">Sort by:</label>
            <select
              value={sortOrder}
              onChange={handlePriceOrderChange}
              className="select select-bordered w-40"
            >
              <option value="asc">Price: Ascending</option>
              <option value="desc">Price: Descending</option>
            </select>
          </div>

          {/* View Toggle - Only for large screens */}
          <div className="hidden md:flex items-center gap-2">
            <label className="font-semibold">View:</label>
            <button
              className={`btn btn-sm ${viewMode === "table" ? "bg-orange-600 text-white" : "btn-outline"}`}
              onClick={() => setViewMode("table")}
            >
              Table
            </button>
            <button
              className={`btn btn-sm ${viewMode === "card" ? "bg-orange-600 text-white" : "btn-outline"}`}
              onClick={() => setViewMode("card")}
            >
              Card
            </button>
          </div>
        </div>
      </div>

      {/* Table Layout - Only on large screens + if table view selected */}
      {viewMode === "table" && (
        <div className="hidden sm:block px-4 mt-10">
          <table className="table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Image</th>
                <th>Origin</th>
                <th>Category</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredFoods.map((food) => (
                <tr key={food._id}>
                  <td>{food.name}</td>
                  <td>
                    <img src={food.image} alt={food.name} className="w-20 h-16 object-cover" />
                  </td>
                  <td>{food.origin}</td>
                  <td>{food.category}</td>
                  <td>{food.quantity}</td>
                  <td>${food.price}</td>
                  <td>
                    <a href={`/foodDetails/${food._id}`}>
                      <button className="btn btn-sm bg-orange-600 hover:bg-red-600 text-white">View Details</button>
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Card Layout - Always for small device, or if selected on large */}
      <div
        className={`px-4 mt-10 gap-5 ${
          viewMode === "card" ? "grid sm:grid-cols-3 lg:grid-cols-4" : ""
        } ${viewMode !== "card" ? "sm:hidden" : ""}`}
      >
        {filteredFoods.map((food) => (
          <div
            key={food._id}
            className="border border-gray-200 dark:border-gray-700 rounded-xl p-4 shadow-sm bg-base-100"
          >
            <div className="flex items-center gap-4 mb-2">
              <img
                src={food.image}
                alt={food.name}
                className="h-14 w-14 rounded-xl object-cover"
              />
              <div>
                <h2 className="text-lg font-semibold">{food.name}</h2>
                <p className="text-sm text-gray-500">{food.category}</p>
              </div>
            </div>
            <p>
              <span className="font-normal">Origin:</span> {food.origin}
            </p>
            <p>
              <span className="font-normal">Quantity:</span> {food.quantity}
            </p>
            <p>
              <span className="font-semibold">Price:</span> ${food.price}
            </p>
            <div className="mt-3">
              <a href={`/foodDetails/${food._id}`}>
                <button className="btn bg-orange-600 text-white w-full">View Details</button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllFoods;
