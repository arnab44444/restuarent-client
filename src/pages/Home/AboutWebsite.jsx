import React from "react";
import { motion } from "framer-motion";

const AboutWebsite = () => {
  return (
    <section className="py-16 px-4 md:px-20 bg-gradient-to-b from-orange-50 via-white to-orange-100">
      <motion.div
        className="max-w-4xl mx-auto text-center space-y-8"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-4xl font-bold text-orange-600">About Our Website 🍴</h2>
        <p className=" text-lg md:text-xl text-black leading-relaxed">
          Welcome to <span className="text-orange-500 font-semibold">FoodEase</span>, your all-in-one restaurant management platform. 
          From managing your delicious menu to tracking customer feedback, FoodEase is built to simplify your workflow and boost efficiency.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left  text-lg">
          <ul className="list-disc text-sm list-inside space-y-2 text-black">
            <li>🍛 Manage and update food items easily</li>
            <li>👨‍🍳 View and manage chefs & kitchen staff</li>
            <li>📅 Handle customer reservations smoothly</li>
            <li>📦 Track inventory and daily orders</li>
          </ul>
          <ul className="list-disc text-sm list-inside space-y-2 text-black">
            <li>💬 Collect and display customer reviews</li>
            <li>🎁 Create special offers and discounts</li>
            <li>📊 Monitor performance with live analytics</li>
            <li>🔒 Secure, user-friendly admin interface</li>
          </ul>
        </div>

        <p className="text-gray-600 mt-6">
          Whether you own a cozy café or a busy restaurant, FoodEase gives you the power to run everything from one dashboard.
        </p>
      </motion.div>
    </section>
  );
};

export default AboutWebsite;
