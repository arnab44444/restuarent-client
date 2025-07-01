import React from "react";
import { motion } from "framer-motion";

const offers = [
  {
    title: "Weekend Biryani Blast 🍗",
    desc: "Flat 20% OFF on Chicken & Mutton Biryani every Friday & Saturday!",
    image: "https://i.ibb.co/FbXj7v7L/chicken-biryani-kerala-style-chicken-dhum-biriyani-made-using-jeera-rice-spices-arranged-667286-4606.jpg",
    badge: "20% OFF",
  },
  {
    title: "Burger Buddy Combo 🍔",
    desc: "Buy 1 Smashburger, Get 1 Soft Drink Free every Friday !",
    image: "https://i.ibb.co/YFwcYhYj/Smashburger-recipe-120219.jpg",
    badge: "BOGO",
  },
  {
    title: "Hot Dog Happy Hour 🌭",
    desc: "Flat 15% OFF on Hot Dogs from 4PM - 6PM in online order!",
    image: "https://i.ibb.co/mVH8VvP0/SEA-best-grilled-hot-dogs-recipe-hero-02-9d245c0d43874a3da13a7228682b0dce.jpg",
    badge: "15% OFF",
  },
  {
    title: "Pizza Party Deal 🍕",
    desc: "Order 2 Pizzas & get 30% OFF on the 3rd one!",
    image: "https://i.ibb.co/5W6d9ghK/Pizza-BBQ-Chicken.jpg",
    badge: "30% OFF",
  },
];

const SpecialOffers = () => {
  return (
    <section className="bg-gradient-to-b from-orange-50 via-white to-orange-100 py-16 px-4 md:px-10">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-xl md:text-3xl font-bold text-orange-600 mb-3">🔥 Special Offers & Discounts</h2>
        <p className="text-lg text-black">Enjoy exclusive deals and tasty treats, just for you!</p>
      </div>

      {/* Offers Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {offers.map((offer, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 border border-red-200"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <img src={offer.image} alt={offer.title} className="w-full h-70 " />
              <div className="absolute top-3 left-3 bg-red-500 text-white px-3 py-1 text-xs font-semibold rounded-full shadow-md">
                {offer.badge}
              </div>
            </div>
            <div className="p-3 space-y-3">
              <h3 className="text-sm font-bold text-red-700">{offer.title}</h3>
              <p className="text-black text-sm">{offer.desc}</p>
              <button className="btn btn-sm bg-red-500 text-white hover:bg-red-600 mt-2">
                Grab Offer
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default SpecialOffers;
