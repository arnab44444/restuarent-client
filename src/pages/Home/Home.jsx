import React from 'react';
// import { useLoaderData } from 'react-router';
import ImageSlider from './ImageSlider';

const Home = () => {

    // const books = useLoaderData();
    // console.log(books);

    return (
        <div>

        {/* <Banner></Banner> */}

        {/* <HomeAnimation></HomeAnimation> */}

        <ImageSlider></ImageSlider> 

        


        <div className='mx-auto'>
            {/* <Categories></Categories>
            <BookReviewSection></BookReviewSection>
            <About></About> */}
        </div>
            
        </div>
    );
};

export default Home;