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

const Evento = () => {
   return (
      <div className="mt-48">
         <div className="flex justify-center sm:justify-between flex-wrap gap-2 items-center mb-14">
            <h1 className="sect-title text-4xl md:text-5xl text-center sm:text-start">Seleccione el evento preferido</h1>
            <select className="select select-bordered select-field text-white">
               <option className="hidden" disabled selected>
                  Order by
               </option>
               <option>Destacados</option>
               <option>Mas Vendidos</option>
               <option>Mas Recientes</option>
               <option>Mas Antiguos</option>
               <option>Alfabeticamente, A-Z</option>
               <option>Alfabeticamente, Z-A</option>
            </select>
         </div>
         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7 place-items-center">
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
      </div>
   );
};

export default Evento;
