import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Banner from "../../components/Banner/Banner";
import Eventos from "../../components/Eventos/Eventos";
import Evento from "../../components/Evento/Evento";
import Footer from "../../components/Footer/Footer";

const Home = () => {
   return (
      <div>
         <Navbar></Navbar>
         <Banner></Banner>
         {/*  */}
         <div className="sm:container sm:mx-auto">
            <Eventos></Eventos>
            <Evento></Evento>
         </div>
         <Footer></Footer>
      </div>
   );
};

export default Home;
