import CountUp from 'react-countup';
import { FaHamburger, FaSmile, FaUtensils } from 'react-icons/fa';
import { GiChefToque } from 'react-icons/gi'; // Chef hat icon

const StatsSection = () => {
  const stats = [
    {
      icon: <FaUtensils className="text-4xl text-primary" />,
      label: "Total Dishes",
      value: 120,
    },
    {
      icon: <FaHamburger className="text-4xl text-primary" />,
      label: "Orders Served",
      value: 3450,
    },
    {
      icon: <FaSmile className="text-4xl text-primary" />,
      label: "Happy Customers",
      value: 2890,
    },
    {
      icon: <GiChefToque className="text-4xl text-primary" />,
      label: "Expert Chefs",
      value: 15,
    },
  ];

  return (
    <div className="grid mt-10 grid-cols-1 md:grid-cols-4 gap-6 p-6 bg-gradient-to-br from-white to-orange-50 shadow rounded-box">
      {stats.map((stat, index) => (
        <div key={index} className="text-center space-y-2">
          <div className="flex justify-center">{stat.icon}</div>
          <h2 className="text-3xl font-bold text-neutral">
            <CountUp end={stat.value} duration={3} />+
          </h2>
          <p className="text-sm text-base-content">{stat.label}</p>
        </div>
      ))}
    </div>
  );
};

export default StatsSection;
