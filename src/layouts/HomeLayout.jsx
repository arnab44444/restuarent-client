import React from "react";
import { Outlet } from "react-router";
import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";



//import leaf from "../assets/Animation - 1747909681766.json";
const HomeLayout = () => {
  //const {state} = useNavigation()

  return (
    <div>
      <header className="space-y-5">
        <Navbar></Navbar>

        {/* slider */}
        

        {/* <div className="flex justify-center items-center">
          <Lottie animationData={leaf} className="h-[50px] w-[50px]" />
          <Lottie animationData={leaf} className="h-[50px] w-[50px]" />
          <Lottie animationData={leaf} className="h-[50px] w-[50px]" />
        </div> */}
      </header>

      <main className="">
        {/* middle part */}
        {/* 
                <section className='main col-span-6'>
                     {state == "loading" ? <span className="loading loading-bars loading-xl"></span>
                     : <Outlet></Outlet> }
                </section> */}

        <Outlet></Outlet>
      </main>

      <Footer></Footer>
    </div>
  );
};

export default HomeLayout;
