import React from 'react';
// import { useLoaderData } from 'react-router';
import ImageSlider from './ImageSlider';
import { useLoaderData } from 'react-router';
import TopFoods from './TopFoods';
import MeetOurChief from './MeetOurChief';
import StatsSection from './StatsSection';

const Home = () => {

    const foods = useLoaderData();
    console.log(foods);

    return (
        <div className="max-w-screen-xl mx-auto px-4 md:px-6 lg:px-8">

        <ImageSlider></ImageSlider> 

        {/* Header */}
      <h1 className="text-center font-bold text-2xl md:text-3xl lg:text-4xl mt-6 mb-10 text-green-500">
        Top 6 Most Purchased Foods 
      </h1>

      {/* New Plants Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {foods?.map((food) => (
          <TopFoods key={food._id} food={food} />
        ))}
      </div>

        


        <div className='mx-auto'>
            <MeetOurChief></MeetOurChief>
            <StatsSection></StatsSection>
        </div>
            
        </div>
    );
};

export default Home;