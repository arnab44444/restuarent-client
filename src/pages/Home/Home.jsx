import React, { useContext } from "react";
import ImageSlider from "./ImageSlider";
import TopFoods from "./TopFoods";
import MeetOurChief from "./MeetOurChief";
import StatsSection from "./StatsSection";
import HappyUsers from "./HappyUsers";
import Gallery from "./Gallery";
import SpecialOffers from "./SpecialOffers";
import AboutWebsite from "./AboutWebsite";
import { useLoaderData } from "react-router";
import { AuthContext } from "../../Provider/AuthProvider";
import LoginReminderModal from "./LoginReminderModal";

const Home = () => {
  const { user } = useContext(AuthContext); // 🔹 এখানে user পেলে modal কাজ করবে
  const foods = useLoaderData();

  return (
    <div>
      <LoginReminderModal user={user} /> {/* 👈 user pass করো */}
      <ImageSlider />

      <div className="container mx-auto px-4 md:px-5 lg:px-8 xl:px-10">
        <h1 className="text-center font-bold text-2xl md:text-3xl lg:text-4xl mt-6 mb-10 text-orange-600">
          Top 6 Most Purchased Foods
        </h1>

        <div className="pl-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {foods?.map((food) => (
            <TopFoods key={food._id} food={food} />
          ))}
        </div>

        <div className="space-y-10">
          <SpecialOffers />
          <MeetOurChief />
          <Gallery />
          <HappyUsers />
          <AboutWebsite />
          <StatsSection />
        </div>
      </div>
    </div>
  );
};

export default Home;
