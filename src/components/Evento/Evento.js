import React from "react";
import Cards from "../Cards/Cards";
import images4 from "../../assets/images4.png";
import images5 from "../../assets/images5.png";
import images6 from "../../assets/images6.png";
import images7 from "../../assets/images7.png";
import images8 from "../../assets/images8.png";
import images9 from "../../assets/images9.png";
import images10 from "../../assets/images10.png";
import images11 from "../../assets/images11.png";
import images12 from "../../assets/images12.png";
import images13 from "../../assets/images13.png";
import images14 from "../../assets/images14.png";
import images15 from "../../assets/images15.png";
import images16 from "../../assets/images16.png";
import images17 from "../../assets/images17.png";
import images18 from "../../assets/images18.png";
import images19 from "../../assets/images19.png";
import images20 from "../../assets/images20.png";
import images21 from "../../assets/images21.png";
import images22 from "../../assets/images22.png";
import images23 from "../../assets/images23.png";
import Select from "../Select/Select";

const Evento = () => {
   return (
      <div className="mt-48">
         <div className="flex justify-center lg:justify-between flex-wrap gap-2 items-center mb-14 relative">
            <h1 className="sect-title text-4xl md:text-5xl text-center sm:text-start">Seleccione el evento preferido</h1>
            <Select title="Order by" button>
               <li className="options">Destacados</li>
               <li className="options">Mas Vendidos</li>
               <li className="options">Mas Recientes</li>
               <li className="options">Mas Antiguos</li>
               <li className="options">Alfabeticamente, A-Z</li>
               <li className="options">Alfabeticamente, Z-A</li>
            </Select>
         </div>
         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7 place-items-center">
            <Cards images={images4}></Cards>
            <Cards images={images5}></Cards>
            <Cards images={images6}></Cards>
            <Cards images={images7}></Cards>
            <Cards images={images8}></Cards>
            <Cards images={images9}></Cards>
            <Cards images={images10}></Cards>
            <Cards images={images11}></Cards>
            <Cards images={images12}></Cards>
            <Cards images={images13}></Cards>
            <Cards images={images14}></Cards>
            <Cards images={images15}></Cards>
            <Cards images={images16}></Cards>
            <Cards images={images17}></Cards>
            <Cards images={images18}></Cards>
            <Cards images={images19}></Cards>
            <Cards images={images20}></Cards>
            <Cards images={images21}></Cards>
            <Cards images={images22}></Cards>
            <Cards images={images23}></Cards>
         </div>
         <div className="mt-14 mb-16 py-1">
            <h2 className="text-[22px] font-semibold text-center load">
               Load More<i className="text-3xl font-serif dot">....</i>
            </h2>
         </div>
      </div>
   );
};

export default Evento;
