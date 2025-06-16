// components/ImageSlider.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import HomeAnimation from "./HomeAnimation";

const ImageSlider = () => {
  const images = [
     "https://i.ibb.co/rKBXdqxF/inspire-a-love-of-reading-header-the-reading-roundup-1.jpg",
    // <HomeAnimation></HomeAnimation>,
    "https://i.ibb.co/mFM7NdvG/library-slider-img-3-1653482722.jpg",
    "https://i.ibb.co/bRqqMWwG/WHAT-IS-THE-PURPOSE-OF-A-LIBRARY-MANAGEMENT-SYSTEM-min.png",
  ];

  return (
    <div className="w-full max-w-screen-xl mx-auto px-2 py-4">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={10}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop
        className="rounded-lg"
      >
        {images.map((url, idx) => (
          <SwiperSlide key={idx}>
            <img
              src={url}
              alt={`slide-${idx}`}
              className="w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px] xl:h-[600px]  rounded-lg"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ImageSlider;
