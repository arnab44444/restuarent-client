import React from "react";
import { motion } from "framer-motion";

const HappyUsers = () => {
  return (
    <section className=" bg-gradient-to-b from-orange-50 via-white to-orange-100 rounded-xl">
      <h3 className="text-3xl md:text-4xl font-bold text-orange-600 text-center py-10">
        What Our Customers Say 🍽️
      </h3>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 px-6 md:px-10 lg:px-20 pb-16">
        {/* User 1 */}
        <motion.div
          className="card bg-white shadow-lg p-6 rounded-lg"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex justify-center">
            <div className="avatar">
              <div className="w-24 rounded-full ring ring-yellow-400 ring-offset-2 ring-offset-yellow-50">
                <img
                  src="https://randomuser.me/api/portraits/women/44.jpg"
                  alt="Sara Ahmed"
                />
              </div>
            </div>
          </div>
          <div className="card-body text-center space-y-4">
            <p className=" italic text-black">
              “The online ordering system is incredibly easy to use and reliable.
              Our team saves so much time managing orders and reservations!”
            </p>
            <div className="rating justify-center">
              {[...Array(5)].map((_, i) => (
                <input
                  key={i}
                  type="radio"
                  name="rating-1"
                  className="mask mask-star-2 bg-yellow-400"
                  defaultChecked
                  readOnly
                />
              ))}
            </div>
            <h6 className="font-bold text-yellow-700">Sara Ahmed</h6>
            <p className="text-sm text-yellow-600">Restaurant Owner</p>
          </div>
        </motion.div>

        {/* User 2 */}
        <motion.div
          className="card bg-white shadow-lg p-6 rounded-lg"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="flex justify-center">
            <div className="avatar">
              <div className="w-24 rounded-full ring ring-yellow-400 ring-offset-2 ring-offset-yellow-50">
                <img
                  src="https://randomuser.me/api/portraits/men/32.jpg"
                  alt="Jamal Khan"
                />
              </div>
            </div>
          </div>
          <div className="card-body text-center space-y-4">
            <p className=" italic text-black">
              “Managing reservations and table availability has never been easier.
              The dashboard is clean and intuitive, perfect for busy restaurants.”
            </p>
            <div className="rating justify-center">
              {[...Array(5)].map((_, i) => (
                <input
                  key={i}
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-yellow-400"
                  defaultChecked
                  readOnly
                />
              ))}
            </div>
            <h6 className="font-bold text-yellow-700">Jamal Khan</h6>
            <p className="text-sm text-yellow-600">Manager</p>
          </div>
        </motion.div>

        {/* User 3 */}
        <motion.div
          className="card bg-white shadow-lg p-6 rounded-lg"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="flex justify-center">
            <div className="avatar">
              <div className="w-24 rounded-full ring ring-yellow-400 ring-offset-2 ring-offset-yellow-50">
                <img
                  src="https://randomuser.me/api/portraits/women/68.jpg"
                  alt="Nadia Chowdhury"
                />
              </div>
            </div>
          </div>
          <div className="card-body text-center space-y-4">
            <p className=" italic text-black">
              “The analytics and reports helped us optimize our menu and improve customer satisfaction.
              A must-have tool for restaurant owners!”
            </p>
            <div className="rating justify-center">
              {[...Array(5)].map((_, i) => (
                <input
                  key={i}
                  type="radio"
                  name="rating-3"
                  className="mask mask-star-2 bg-yellow-400"
                  defaultChecked
                  readOnly
                />
              ))}
            </div>
            <h6 className="font-bold text-yellow-700">Nadia Chowdhury</h6>
            <p className="text-sm text-yellow-600">Marketing Head</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HappyUsers;
