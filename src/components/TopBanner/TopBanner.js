import React from "react";
import image_bt from "../../assets/image_bt.png";

const TopBanner = () => {
   return (
      <div id="top" className="banner_two">
         <div>
            <div className="lg:container lg:mx-auto pt-40 pb-16 px-2 lg:pt-[202px] lg:pb-[100px] flex flex-col lg:flex-row justify-center lg:justify-between items-center gap-y-5">
               <div className="b_two_head text-center lg:text-start">
                  <p>From 15 March to June 29-2023</p>
                  <h3>Revelado a través del querido caminar abortivo</h3>
               </div>
               <div>
                  <button className="btn h-[54px] btn-outline text-white gap-2 text-lg font-semibold flex flex-nowrap">
                     <i>
                        <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path d="M6.25 12.25L1 7L6.25 1.75" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                     </i>{" "}
                     <span className="whitespace-nowrap">De vuelta a las compras</span>
                  </button>
               </div>
            </div>
         </div>
         <div className="lg:container lg:mx-auto">
            <div className="mt-[100px] mb-[188px] grid grid-cols-1 lg:grid-cols-2 gap-10 px-1 lg:px-0">
               <div>
                  <img className="h-full w-full" src={image_bt} alt="image_bt" />
               </div>
               <div>
                  <h2 className="text-2xl">Revelado a través del querido caminar abortivo</h2>
                  <div className="mt-3 flex flex-col gap-2">
                     <p>Su entrada al evento es su entrada a una experiencia inolvidable. Desde el momento en que ingrese al lugar, estará rodeado de las vistas, los sonidos y los olores que hacen que su evento sea único.</p>
                     <p>Tendrá acceso a todas las comodidades y actividades que el evento tiene para ofrecer, lo que le dará la oportunidad de crear recuerdos que durarán toda la vida. A medida que avanza por el lugar, tómese el tiempo para</p>
                     <p>apreciar todo el arduo trabajo que se ha realizado para que su evento sea un éxito. ¡Tu entrada es tu pase a una noche que nunca olvidarás! Su entrada al evento es su entrada a una experiencia inolvidable.</p>
                     <p>Desde el momento en que ingrese al lugar, estará rodeado de las vistas, los sonidos y los olores que hacen que su evento sea único. Desde el momento en que ingrese al lugar, estará rodeado de las vistas, los sonidos y los</p>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default TopBanner;
