import React from 'react';

const foodImages = [
  'https://i.ibb.co/FbXj7v7L/chicken-biryani-kerala-style-chicken-dhum-biriyani-made-using-jeera-rice-spices-arranged-667286-4606.jpg',
  'https://i.ibb.co/svQPw0Ld/mutton-biryani-25-people-wide.jpg',
  'https://i.ibb.co/M5NXvTbF/Soy-Sauce-Pan-Fried-Noodles-Takestwoeggs-sq.jpg',
  'https://i.ibb.co/CsTgFDmL/Quick-Chicken-Ramen-square-FS-22.jpg',
  'https://i.ibb.co/DHLJB1DT/club-sandwich-16496-16x9-jpg.webp',
  'https://i.ibb.co/5W6d9ghK/Pizza-BBQ-Chicken.jpg',
  'https://i.ibb.co/YFwcYhYj/Smashburger-recipe-120219.jpg',
  'https://i.ibb.co/mVH8VvP0/SEA-best-grilled-hot-dogs-recipe-hero-02-9d245c0d43874a3da13a7228682b0dce.jpg',
];

const Gallery = () => {
  return (
    <section className="py-10 bg-orange-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-orange-600 text-center mb-8">
          Food Gallery 🍕🍜🍔
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {foodImages.map((src, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
            >
              <img
                src={src}
                alt={`Food ${index + 1}`}
                className="w-full h-40 object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
