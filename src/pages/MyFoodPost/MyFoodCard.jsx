import React from "react";
import { Link } from "react-router";

const MyFoodCard = ({ food }) => {
  const { _id, image, name, category, origin, price } = food;

  return (
    <>
      {/* Table row for medium and large screens */}
      <tr className="hidden sm:table-row">
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle w-10 h-10 md:w-12 md:h-12">
                <img src={image} alt="Plant" className="object-cover" />
              </div>
            </div>
          </div>
        </td>
        <td className="font-semibold text-black">{name}</td>
        <td className="capitalize text-black">{category}</td>
        <td className="capitalize text-black">{origin}</td>
        <td className="text-left text-black">{price}</td>

        <td>
          <Link to={`/updateFood/${_id}`}>
            <button className="btn btn-sm md:btn-md bg-orange-600 text-white hover:bg-red-600 ">
              Update
            </button>
          </Link>
        </td>
      </tr>
    </>
  );
};

export default MyFoodCard;
