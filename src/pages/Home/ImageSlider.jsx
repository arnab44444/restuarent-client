import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import HomeAnimation from "./HomeAnimation"; // Optional component slide

const ImageSlider = () => {
  const slides = [
    { type: "component", content: <HomeAnimation /> },
    { type: "image", content: "https://i.ibb.co/WWPd38XX/vegetables-set-left-black-slate.jpg" },
    { type: "image", content: "https://i.ibb.co/DP4BjvP9/360-F-294263329-1-Igvq-Ng-Dbhm-QNg-Dxkhl-W433u-OFu-IDar4.jpg" },
  ];

  const [sliderHeight, setSliderHeight] = useState("65vh");

  useEffect(() => {
    const updateHeight = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setSliderHeight("35vh");
      } else if (width < 1024) {
        setSliderHeight("65vh");
      } else {
        setSliderHeight("65vh");
      }
    };

    updateHeight(); // Set initially
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  return (
    <div className="w-full mt-12 py-4">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={10}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop
        className="rounded-lg"
        style={{ height: sliderHeight, maxHeight: "700px" }}
      >
        {slides.map((slide, idx) => (
          <SwiperSlide key={idx}>
            {slide.type === "image" ? (
              <img
                src={slide.content}
                alt={`slide-${idx}`}
                className="w-full h-full object-cover rounded-lg"
                style={{ minHeight: "400px" }}
              />
            ) : (
              <div
                className="w-full h-full rounded-lg overflow-hidden"
                style={{ minHeight: "400px" }}
              >
                {slide.content}
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ImageSlider;

// update