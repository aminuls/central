import React from "react";
import Banner from "../../components/Banner/Banner";
import Eventos from "../../components/Eventos/Eventos";
import Evento from "../../components/Evento/Evento";

const Home = () => {
   return (
      <div>
         <Banner></Banner>
         <div className="sm:container sm:mx-auto">
            <Eventos></Eventos>
            <Evento></Evento>
         </div>
      </div>
   );
};

export default Home;
