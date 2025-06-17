import React, { useState } from "react";
import { Link } from "react-router";
import Swal from "sweetalert2";

const MyOrderCard = ({ food ,orders,setOrders}) => {
  const { _id, image, name, price,quantity,buyerName } = food;

   const [books, setBooks] = useState(food);

  const handleReturn = (_id) => {
      Swal.fire({
        title: "Are you sure?",
        text: "if any food is available then you get the order.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, cancel it!",
      }).then((result) => {
        if (result.isConfirmed) {
          fetch(
            `http://localhost:3000/cancel_order/${_id}`,
            {
              method: "DELETE",
            }
          )
            .then((res) => res.json())
            .then((data) => {
              if (data.deletedCount) {
                Swal.fire({
                  title: "Cancel!",
                  text: "Your order has been cancel.",
                  icon: "success",
                });
                // extra
  
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
      <tr className="  hidden sm:table-row">
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle w-10 h-10 md:w-12 md:h-12">
                <img src={image} alt="Plant" className="object-cover" />
              </div>
            </div>
          </div>
        </td>
        <td className="font-semibold text-blue-600 ">{name}</td>
        <td className="capitalize">{quantity}</td>
        <td className="capitalize">{buyerName}</td>
        <td className="text-left">{price}</td>

        <td>
          {/* <Link to={`/cancel_Order/${_id}`}>
            <button className="btn btn-sm md:btn-md bg-blue-500 hover:bg-blue-700">
             Delet
            </button>
          </Link> */}

          <button
          onClick={() => handleReturn(_id)}
          className="btn btn-sm md:btn-md bg-blue-500 hover:bg-blue-700"
        >
          Delet
        </button>
        </td>
      </tr>

      
    </>
  );
};

export default MyOrderCard;
