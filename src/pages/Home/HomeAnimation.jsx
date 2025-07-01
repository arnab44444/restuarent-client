import React from "react";
import { motion } from "framer-motion";
import { FaUtensils } from "react-icons/fa";
import { Link } from "react-router"; // Fixed: use react-router-dom

const HomeAnimation = () => {
  return (
    <section className="w-full  h-[320px] sm:h-[400px] md:h-[500px] flex items-center justify-center bg-gradient-to-br from-[#ff512f] via-[#dd2476] to-[#e52e71] px-4 md:px-12 text-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/food.png')] opacity-5" />
      <div className="max-w-4xl text-center space-y-4 md:space-y-6 z-10">
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-3xl -mt-15 sm:text-4xl md:text-3xl  font-extrabold ">
            Welcome to <span className="text-yellow-300">Crave House</span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-base md:text-lg lg:text-xl font-medium text-white/90"
        >
          Discover delicious meals, order your favorites, and experience the
          best of flavors.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          <Link
            to="/allFood"
            className="px-6 py-2 md:px-8 md:py-3 bg-white/10 backdrop-blur-md rounded-full text-white border border-white/30 hover:bg-yellow-400 hover:text-black transition-all duration-300 font-semibold shadow-lg"
          >
            🍽️ Explore Foods
          </Link>
        </motion.div>

        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.7, type: "spring", stiffness: 100 }}
          className="flex justify-center"
        >
          <FaUtensils
            size={60}
            className="text-white animate-pulse drop-shadow-2xl"
            style={{ filter: "drop-shadow(0 0 10px white)" }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HomeAnimation;
