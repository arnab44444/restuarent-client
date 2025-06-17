import React from "react";
import { motion } from "framer-motion";
import { FaUtensils } from "react-icons/fa";
import { Link } from "react-router"; 

const HomeAnimation = () => {
  return (
    <section className="w-full h-[300px] md:h-[500px] flex items-center justify-center bg-gradient-to-br from-[#FF8A00] to-[#E52E71] px-4 md:px-12 text-white">
      <div className="max-w-4xl text-center space-y-4 md:space-y-6">
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-2xl md:text-5xl font-extrabold leading-snug md:leading-tight">
            Welcome to <span className="text-yellow-300">FoodVerse</span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-sm md:text-xl"
        >
          Discover delicious meals, order your favorites, and experience the best of flavors.
        </motion.p>

        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.7, type: "spring", stiffness: 100 }}
          className="flex justify-center"
        >
          <FaUtensils size={50} className="md:size-[60px] text-white drop-shadow-lg" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          <Link
            to="/allFood"
            className="btn btn-warning mt-2 md:mt-4 px-4 md:px-6 py-1.5 md:py-2 text-sm md:text-lg font-medium text-white"
          >
            Explore Foods
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default HomeAnimation;
