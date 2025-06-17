import React from "react";
import { motion } from "framer-motion";

const chefs = [
  {
    name: "Chef Arman",
    specialty: "Italian Cuisine",
    image:
      "https://i.ibb.co/mVrxgcPM/chef-with-his-arms-crossed-white-background-1368-2792.webp",
    description:
      "Master of authentic pastas, pizzas, and rich Italian flavors with 12+ years of experience in fine dining.",
  },
  {
    name: "Chef Lina",
    specialty: "Pastry & Desserts",
    image:
      "https://i.ibb.co/TqFydPT3/young-confident-caucasian-cook-girl-chef-uniform-crosses-arms-isolated-green-wall-with-copy-space-14.webp",
    description:
      "Award-winning pastry chef known for creative desserts and artistic cake designs that melt hearts.",
  },
  {
    name: "Chef Tanvir",
    specialty: "Bangladeshi Traditional",
    image:
      "https://i.ibb.co/WNTqS05S/happy-young-cook-uniform-holding-salad-171337-5342.webp",
    description:
      "Passionate about Bangladeshi cuisine, blending tradition with modern twists in every dish.",
  },
];

const MeetOurChief = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-blue-50 text-center">
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold mb-4 text-gray-800"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Meet Our Chef
        </motion.h2>
        <motion.p
          className="mb-12 text-gray-600 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Our expert chefs bring years of experience and passion for food to
          every dish they create.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {chefs.map((chef, index) => (
            <motion.div
              key={index}
              className="card bg-white shadow-lg rounded-2xl overflow-hidden border border-blue-100"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
            >
              <figure className="h-64 overflow-hidden">
                <img
                  src={chef.image}
                  alt={chef.name}
                  className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
                />
              </figure>
              <div className="card-body p-6 text-left">
                <h3 className="text-2xl font-semibold text-gray-800">
                  {chef.name}
                </h3>
                <p className="text-sm text-blue-600 mt-1">{chef.specialty}</p>
                <p className="text-gray-600 text-sm mt-2">{chef.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MeetOurChief;
