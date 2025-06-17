import React, { use } from "react";
import MyOrderCard from "./MyOrderCard";

const FoodList = ({ myFoodPromise }) => {
  const initialFood = use(myFoodPromise);

  console.log(initialFood);

  const [orders, setOrders] = React.useState(initialFood);

  return (
    <div className="mx-auto">
      {/* Table Layout for Medium and Large Screens */}
      <div className="bg-base-200 hidden sm:block px-4 mt-10 rounded-lg shadow-md">
        <table className="table w-full">
          <thead>
            <tr className="text-primary">
              <th>Picture</th>
              <th>Food Name</th>
              <th>Quantity</th>
              <th>Buyer Name</th>
              <th>Price</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {orders.map((food) => (
              <MyOrderCard
                key={food._id}
                food={food}
                orders={orders}
                setOrders={setOrders}
              />
            ))}
          </tbody>
        </table>
      </div>

      {/* Card Layout for Small Screens */}
      <div className="sm:hidden px-4 mt-10 space-y-5">
        {orders.map((food) => (
          <div
            key={food._id}
            className="border border-base-300 rounded-xl p-4 shadow-sm bg-base-100"
          >
            <div className="flex items-center gap-4 mb-2">
              <img
                src={food.image}
                alt={food.name}
                className="h-14 w-14 rounded-xl object-cover"
              />
              <div>
                <h2 className="text-lg font-semibold text-primary">{food.name}</h2>
                <p className="text-sm text-secondary">{food.category}</p>
              </div>
            </div>
            <p className="font-semibold text-secondary">{food.origin}</p>

            <div className="mt-3">
              <a href={`/updateBook/${food._id}`}>
                <button className="btn w-full bg-primary hover:bg-secondary text-white transition-colors duration-300">
                  Update
                </button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FoodList;
