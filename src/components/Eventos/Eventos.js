import React from "react";
import Card from "../Card/Card";
import images1 from "../../assets/images1.png";
import images2 from "../../assets/images2.png";
import images3 from "../../assets/images3.png";
import Select from "../Select/Select";

const Eventos = () => {
   return (
      <div className="mt-24">
         <div className="flex flex-col sm:flex-row justify-center sm:justify-between flex-wrap gap-2 items-center mb-14">
            <h1 className="sect-title text-4xl md:text-5xl text-center sm:text-start">Eventos destacados</h1>
            <div className="flex flex-col justify-end items-end relative">
               <Select title="Order by" button>
                  <li className="options">Destacados</li>
                  <li className="options">Mas Vendidos</li>
                  <li className="options">Mas Recientes</li>
                  <li className="options">Mas Antiguos</li>
                  <li className="options">Alfabeticamente, A-Z</li>
                  <li className="options">Alfabeticamente, Z-A</li>
               </Select>
            </div>
         </div>
         <div className="grid grid-cols-1 place-items-center md:grid-cols-2 xl:grid-cols-3 gap-7">
            <Card image={images1}></Card>
            <Card image={images2}></Card>
            <Card image={images3}></Card>
         </div>
      </div>
   );
};

export default Eventos;
