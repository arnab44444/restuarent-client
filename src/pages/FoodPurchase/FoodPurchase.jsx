import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { AuthContext } from "../../Provider/AuthProvider";
import { useLoaderData } from "react-router";
import Swal from "sweetalert2";

const FoodPurchase = () => {
  const food = useLoaderData();
  console.log(food);

  const { _id, name, price, quantity, purchasedCount = 0 } = food;

  const [foods, setFoods] = useState(food);
  const [hasOrdered, setHasOrdered] = useState(false);
  const [inputQuantity, setInputQuantity] = useState(1);

  const { user } = useContext(AuthContext);
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const now = new Date();
    const formattedTime = now.toLocaleString("en-BD", {
      timeZone: "Asia/Dhaka",
      hour12: true,
      weekday: "short",
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
    setCurrentTime(formattedTime);
  }, []);

  const confirmOrder = () => {
    if (food.addedByEmail === user.email) {
      Swal.fire("Error", "You cannot order your own food!", "error");
      return;
    }

    const purchaseData = {
      foodId: _id,
      name,
      price,
      quantity: inputQuantity,
      buyerName: user.displayName,
      buyerEmail: user.email,
      orderTime: currentTime,
    };

    axios
      .post(`http://localhost:3000/place-order/${_id}`, purchaseData)
      .then(() => {
        toast.success("Purchase successful");
        setFoods((prev) => ({
          ...prev,
          quantity: prev.quantity - inputQuantity,
          purchasedCount: (prev.purchasedCount || 0) + inputQuantity,
        }));
        setHasOrdered(true);
      })
      .catch((err) => {
        toast.error(err.response?.data?.message || "Something went wrong");
      });
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 shadow-lg rounded-lg bg-base-100">
      <h2 className="text-3xl font-bold mb-6 text-primary text-center">
        🍛 Confirm Food Purchase
      </h2>

      <div className="space-y-5">
        <div>
          <label className="label font-semibold text-secondary">Food Name</label>
          <input
            type="text"
            value={name}
            className="input input-bordered w-full bg-base-200 cursor-not-allowed"
            readOnly
          />
        </div>

        <div>
          <label className="label font-semibold text-secondary">Price</label>
          <input
            type="number"
            value={price}
            className="input input-bordered w-full bg-base-200 cursor-not-allowed"
            readOnly
          />
        </div>

        <div>
          <label className="label font-semibold text-secondary">Quantity</label>
          <input
            type="number"
            min="1"
            max={quantity}
            value={inputQuantity}
            onChange={(e) => setInputQuantity(Number(e.target.value))}
            className="input input-bordered w-full"
          />
          <p className="text-sm text-error mt-1">
            Available quantity: {quantity}
          </p>
        </div>

        <div>
          <label className="label font-semibold text-secondary">Buyer Name</label>
          <input
            type="text"
            value={user.displayName}
            className="input input-bordered w-full bg-base-200 cursor-not-allowed"
            readOnly
          />
        </div>

        <div>
          <label className="label font-semibold text-secondary">Buyer Email</label>
          <input
            type="email"
            value={user.email}
            className="input input-bordered w-full bg-base-200 cursor-not-allowed"
            readOnly
          />
        </div>

        <div>
          <label className="label font-semibold text-secondary">Order Time</label>
          <input
            type="text"
            value={currentTime}
            readOnly
            className="input input-bordered w-full bg-base-200 cursor-not-allowed"
          />
        </div>

        <button
          onClick={confirmOrder}
          className="btn bg-orange-600 text-white w-full mt-4"
          disabled={inputQuantity > quantity || inputQuantity <= 0 || hasOrdered}
        >
          Confirm Purchase
        </button>
      </div>
    </div>
  );
};

export default FoodPurchase;

// purchase