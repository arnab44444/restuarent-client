import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import HomeAnimation from "./HomeAnimation";

const ImageSlider = () => {
  const slides = [
    { type: "component", content: <HomeAnimation /> },
    { type: "image", content: "https://i.ibb.co/Mxdf8fsX/vintage-illustration-cafe-terrace-1015-72-1.jpg" },
    { type: "image", content: "https://i.ibb.co/DP4BjvP9/360-F-294263329-1-Igvq-Ng-Dbhm-QNg-Dxkhl-W433u-OFu-IDar4.jpg" },
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
        {slides.map((slide, idx) => (
          <SwiperSlide key={idx} className="rounded-lg">
            {slide.type === "image" ? (
              <img
                src={slide.content}
                alt={`slide-${idx}`}
                className="w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px] xl:h-[600px] rounded-lg object-cover"
              />
            ) : (
              slide.content // directly render the component (like <HomeAnimation />)
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ImageSlider;
