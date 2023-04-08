import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Banner from "../../components/Banner/Banner";
import Eventos from "../../components/Eventos/Eventos";
import Evento from "../../components/Evento/Evento";
import Footer from "../../components/Footer/Footer";

const Home = () => {
   return (
      <div className="drawer">
         <input id="my-drawer" type="checkbox" className="drawer-toggle" />
         <div className="drawer-content">
            <Navbar></Navbar>
            <Banner></Banner>
            <div className="sm:container sm:mx-auto">
               <Eventos></Eventos>
               <Evento></Evento>
            </div>
            <Footer></Footer>
            {/* <label className="btn btn-primary drawer-button">
                  Open drawer
               </label> */}
         </div>
         <div className="drawer-side">
            <label htmlFor="my-drawer" className="drawer-overlay"></label>
            <ul className="menu p-4 w-80 bg-base-100 text-base-content">
               <li>
                  <a href="/">Home</a>
               </li>
               <li>
                  <a href="">About</a>
               </li>
               <li>
                  <a href="">Profile</a>
               </li>
            </ul>
         </div>
      </div>
   );
};

export default Home;
