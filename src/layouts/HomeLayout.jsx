import React from "react";
import { Outlet } from "react-router";
import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";



//import leaf from "../assets/Animation - 1747909681766.json";
const HomeLayout = () => {
  //const {state} = useNavigation()

  return (
    <div className="flex flex-col min-h-screen">
      {/* <header className="space-y-5 "> */}
        <Navbar></Navbar>

        {/* slider */}

       

      {/* </header> */}

      <main className="flex-grow">
        {/* middle part */}

        <Outlet></Outlet>
      </main>

      <Footer></Footer>
    </div>
  );
};

export default HomeLayout;
