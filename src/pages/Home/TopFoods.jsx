import React from 'react';
import { Link } from 'react-router';

const TopFoods = ({ food }) => {
  const { _id, image, name, price, purchasedCount } = food;

  return (
    <div className="card w-80 bg-white shadow-xl hover:shadow-2xl transition-shadow duration-300 rounded-2xl overflow-hidden border border-gray-200">
      <figure className="h-52 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
        />
      </figure>
      <div className="card-body p-5 space-y-2">
        <h2 className="card-title text-xl font-bold text-gray-800">{name}</h2>

        <div className="flex justify-between items-center text-sm text-gray-600">
          <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full font-medium">
            Price :৳ {price}
          </span>
          <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full font-medium">
            Bought: {purchasedCount}
          </span>
        </div>

        <Link to={`/foodDetails/${_id}`}>
          <button className="btn btn-primary w-full mt-3 font-semibold tracking-wide">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default TopFoods;
