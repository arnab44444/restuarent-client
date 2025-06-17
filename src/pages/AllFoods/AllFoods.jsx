import React, { useState } from "react";
import { useLoaderData } from "react-router";

const AllFoods = () => {
  const foodsData = useLoaderData();
  const [foods, setFoods] = useState(foodsData || []);
  const [searchTerm, setSearchTerm] = useState("");

  // Filter foods based on search term (case-insensitive)
  const filteredFoods = foods.filter(food =>
    food.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Handle search button click (optional: here search runs automatically on typing, but button resets input)
  const handleSearchClick = () => {
    // You can add any special behavior on button click if needed,
    // but here filtering is already live, so no need to do anything.
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-center text-primary mb-6">All Foods</h1>

      {/* Search input and button */}
      <div className="flex justify-center mb-8 gap-2 max-w-md mx-auto">
        <input
          type="text"
          placeholder="Search food by name..."
          className="input input-bordered w-full"
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />
        <button
          onClick={handleSearchClick}
          className="btn btn-primary"
          type="button"
        >
          Search
        </button>
      </div>

      {/* Food cards grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredFoods.length > 0 ? (
          filteredFoods.map((food) => (
            <div
              key={food._id}
              className="card bg-base-100 shadow-sm w-full max-w-sm mx-auto"
            >
              <figure>
                <img
                  src={food.image}
                  alt={food.name}
                  className="h-52 w-full object-cover"
                />
              </figure>

              <div className="card-body">
                <h2 className="card-title">
                  {food.name}
                  <div className="badge badge-secondary">{food.origin}</div>
                </h2>

                <div className="card-actions justify-center mt-2">
                  <div className="badge badge-outline">{food.category}</div>
                  <div className="badge badge-outline">Quantity: {food.quantity}</div>
                </div>

                <div className="mt-4">
                  <a href={`/foodDetails/${food._id}`}>
                    <button className="btn btn-primary btn-sm w-full">
                      View Details
                    </button>
                  </a>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-secondary col-span-full">
            No foods found matching "{searchTerm}"
          </p>
        )}
      </div>
    </div>
  );
};

export default AllFoods;
