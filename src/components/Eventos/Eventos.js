import React from "react";
import Card from "../Card/Card";
import images1 from "../../assets/images1.png";
import images2 from "../../assets/images2.png";
import images3 from "../../assets/images3.png";
import Select from "../Select/Select";

const Eventos = () => {
   return (
      <div className="mt-24">
         <div className="flex justify-center sm:justify-between flex-wrap gap-2 items-center mb-14">
            <h1 className="sect-title text-4xl md:text-5xl text-center sm:text-start">Eventos destacados</h1>
            <div className="flex flex-col justify-end items-end relative">
               <Select title="Order by" button>
                  <li>Destacados</li>
                  <li>Mas Vendidos</li>
                  <li>Mas Recientes</li>
                  <li>Mas Antiguos</li>
                  <li>Alfabeticamente, A-Z</li>
                  <li>Alfabeticamente, Z-A</li>
               </Select>
            </div>
         </div>
         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
            <Card image={images1}></Card>
            <Card image={images2}></Card>
            <Card image={images3}></Card>
         </div>
      </div>
   );
};

export default Eventos;
