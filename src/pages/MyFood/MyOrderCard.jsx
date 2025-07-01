import React, { useState } from "react";
import Swal from "sweetalert2";

const MyOrderCard = ({ food, orders, setOrders }) => {
  const { _id, image, name, price, quantity, buyerName } = food;

  const [books, setBooks] = useState(food);

  const handleReturn = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "If any food is available then you get the order.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3b82f6",  // Tailwind primary default blue-500
      cancelButtonColor: "#ef4444",   // Tailwind red-500
      confirmButtonText: "Yes, cancel it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/cancel_order/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              Swal.fire({
                title: "Cancelled!",
                text: "Your order has been cancelled.",
                icon: "success",
                confirmButtonColor: "#3b82f6", // primary color
              });

              setBooks((prev) => ({
                ...prev,
                quantity: prev.quantity + 1,
              }));

              const remainingOrders = orders.filter((book) => book._id !== _id);
              setOrders(remainingOrders);
            }
          });
      }
    });
  };

  return (
    <>
      {/* Table row for medium and large screens */}
      <tr className="hidden sm:table-row">
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle w-10 h-10 md:w-12 md:h-12">
                <img src={image} alt={name} className="object-cover" />
              </div>
            </div>
          </div>
        </td>
        <td className="font-semibold text-black">{name}</td>
        <td className="capitalize text-black">{quantity}</td>
        <td className="capitalize text-black">{buyerName}</td>
        <td className="text-left text-black font-medium">{price}</td>

        <td>
          <button
            onClick={() => handleReturn(_id)}
            className="btn btn-sm md:btn-md bg-orange-600 text-white hover:bg-red-600  transition-colors duration-300"
          >
            Delete
          </button>
        </td>
      </tr>
    </>
  );
};

export default MyOrderCard;
