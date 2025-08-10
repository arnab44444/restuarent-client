import React from "react";
// import { useLoaderData } from 'react-router';
import ImageSlider from "./ImageSlider";
import { useLoaderData } from "react-router";
import TopFoods from "./TopFoods";
import MeetOurChief from "./MeetOurChief";
import StatsSection from "./StatsSection";
import HappyUsers from "./HappyUsers";
import Gallery from "./Gallery";
import SpecialOffers from "./SpecialOffers";
import AboutWebsite from "./AboutWebsite";

const Home = () => {
  const foods = useLoaderData();
  console.log(foods);

  return (
    <div>
      <ImageSlider></ImageSlider>

      <div className="container mx-auto px-4 md:px-5 lg:px-8 xl:px-10">
        {/* Header */}
        <h1 className="text-center font-bold text-2xl md:text-3xl lg:text-4xl mt-6 mb-10 text-orange-600">
          Top 6 Most Purchased Foods
        </h1>

        {/* New Plants Grid */}
        <div className="pl-8 grid  grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {foods?.map((food) => (
            <TopFoods key={food._id} food={food} />
          ))}
        </div>

        <div className=" space-y-10">
          <SpecialOffers></SpecialOffers>

          <MeetOurChief></MeetOurChief>

          <Gallery></Gallery>

          <HappyUsers></HappyUsers>

          <AboutWebsite></AboutWebsite>

          <StatsSection></StatsSection>
        </div>
      </div>
    </div>
  );
};

export default Home;

// home page