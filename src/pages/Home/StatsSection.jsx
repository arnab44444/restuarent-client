import React from 'react';
import CountUp from 'react-countup';
import { FaHamburger, FaSmile, FaUtensils } from 'react-icons/fa';
import { GiChefToque } from 'react-icons/gi';

const StatsSection = () => {
  const stats = [
    {
      icon: <FaUtensils className="text-5xl text-orange-500 group-hover:scale-110 transition-transform" />,
      label: "Total Dishes",
      value: 120,
    },
    {
      icon: <FaHamburger className="text-5xl text-yellow-500 group-hover:scale-110 transition-transform" />,
      label: "Orders Served",
      value: 3450,
    },
    {
      icon: <FaSmile className="text-5xl text-green-500 group-hover:scale-110 transition-transform" />,
      label: "Happy Customers",
      value: 2890,
    },
    {
      icon: <GiChefToque className="text-5xl text-red-500 group-hover:scale-110 transition-transform" />,
      label: "Expert Chefs",
      value: 15,
    },
  ];

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-orange-50 to-white">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-10">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="group bg-white/80 backdrop-blur-lg p-6 rounded-xl shadow-lg border border-orange-100 text-center transform transition duration-300 hover:shadow-orange-200 hover:-translate-y-2"
          >
            <div className="mb-4 text-center">{stat.icon}</div>
            <h2 className="text-sm font-extrabold text-neutral">
              <CountUp end={stat.value} duration={3} />+
            </h2>
            <p className="mt-2 text-base font-sm text-gray-600">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;
