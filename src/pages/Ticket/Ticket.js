import React from "react";
import TopBanner from "../../components/TopBanner/TopBanner";
import entra from "../../assets/entra.png";
import bonos from "../../assets/bonos.png";

const Ticket = () => {
   return (
      <div>
         <TopBanner></TopBanner>
         <div className="grid grid-cols-7 gap-1 lg:gap-10 lg:container lg:mx-auto mb-[188px]">
            <div className="col-span-7 lg:col-span-5 py-1 mx-1 lg:mx-0 lg:py-2 xl:py-7 en_bon">
               <div className="entra">
                  <div className="flex flex-wrap items-center">
                     <p className="uppercase ps-1 lg:ps-3 xl:ps-7">ENTRADAS</p>
                     <hr className="flex-grow mx-2 lg:ms-5 lg:me-7" />
                  </div>
                  <div className="grid grid-cols-7 justify-between gap-4 mt-4 pb-6 px-1 lg:px-3 xl:px-7 entra_box">
                     <img className="col-span-3 order-1 lg:col-span-1" src={entra} alt="entra_img" />
                     <div className="col-span-7 lg:col-span-4 xl:col-span-5 order-3 entra_left ms-1 xl:me-20">
                        <h3 className="mb-3">Revelado a través del querido caminar abortivo</h3>
                        <p>Su entrada al evento es su entrada a una experiencia inolvidable. Desde el momento en que ingrese al lugar, permiso paterno</p>
                     </div>
                     <div className="col-span-4 lg:col-span-2 xl:col-span-1 order-2 lg:order-4 entra_right">
                        <h2>€15.00</h2>
                        <p className="whitespace-nowrap">(+ 0,00€ g.d.g.)</p>
                        <div className="relative entra_inp_container mt-5 text-right">
                           <input type="number" className="entra_input" name="quantity" defaultValue="01" min="1" />
                           <div class="spinner-button inc-button">
                              <svg width="13" height="8" viewBox="0 0 13 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                 <path d="M1.64844 6.9442L6.75573 1.83691L11.863 6.9442" stroke="#7B788A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                              </svg>
                           </div>
                           <div class="spinner-button dec-button">
                              <svg width="13" height="8" viewBox="0 0 13 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                 <path d="M11.8633 1.0558L6.75599 6.16309L1.6487 1.05579" stroke="#7B788A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                              </svg>
                           </div>
                        </div>
                     </div>
                  </div>
                  {/*  */}
                  <div className="grid grid-cols-7 justify-between gap-4 mt-5 pb-6 px-1 lg:px-3 xl:px-7 entra_box">
                     <img className="col-span-3 order-1 lg:col-span-1" src={entra} alt="entra_img" />
                     <div className="col-span-7 lg:col-span-4 xl:col-span-5 order-3 entra_left ms-1 lg:me-5 xl:me-20">
                        <h3 className="mb-3">Revelado a través del querido caminar abortivo</h3>
                        <p>Su entrada al evento es su entrada a una experiencia inolvidable. Desde el momento en que ingrese al lugar, permiso paterno</p>
                     </div>
                     <div className="col-span-4 lg:col-span-2 xl:col-span-1 order-2 lg:order-4 entra_right">
                        <h2>€15.00</h2>
                        <p className="whitespace-nowrap">(+ 0,00€ g.d.g.)</p>
                        <div className="relative entra_inp_container text-right mt-5">
                           <input type="number" className="entra_input" name="quantity" defaultValue="01" min="1" />
                           <div class="spinner-button inc-button">
                              <svg width="13" height="8" viewBox="0 0 13 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                 <path d="M1.64844 6.9442L6.75573 1.83691L11.863 6.9442" stroke="#7B788A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                              </svg>
                           </div>
                           <div class="spinner-button dec-button">
                              <svg width="13" height="8" viewBox="0 0 13 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                 <path d="M11.8633 1.0558L6.75599 6.16309L1.6487 1.05579" stroke="#7B788A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                              </svg>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               {/* start */}
               <div className="entra mt-[30px]">
                  <div className="flex flex-wrap items-center">
                     <p className="uppercase ps-1 lg:ps-3 xl:ps-7">bonos</p>
                     <hr className="flex-grow mx-2 lg:ms-5 lg:me-7" />
                  </div>
                  <div className="grid grid-cols-7 justify-between gap-4 mt-4 pb-6 px-1 lg:px-3 xl:px-7 entra_box">
                     <img className="col-span-3 order-1 lg:col-span-1" src={bonos} alt="entra_img" />
                     <div className="col-span-7 lg:col-span-4 xl:col-span-5 order-3 entra_left ms-1 xl:me-20">
                        <h3 className="mb-3">Revelado a través del querido caminar abortivo</h3>
                        <p>Su entrada al evento es su entrada a una experiencia inolvidable. Desde el momento en que ingrese al lugar, permiso paterno</p>
                     </div>
                     <div className="col-span-4 lg:col-span-2 xl:col-span-1 order-2 lg:order-4 entra_right">
                        <h2>€15.00</h2>
                        <p className="whitespace-nowrap">(+ 0,00€ g.d.g.)</p>
                        <div className="relative entra_inp_container mt-5 text-right">
                           <input type="number" className="entra_input" name="quantity" defaultValue="01" min="1" />
                           <div class="spinner-button inc-button">
                              <svg width="13" height="8" viewBox="0 0 13 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                 <path d="M1.64844 6.9442L6.75573 1.83691L11.863 6.9442" stroke="#7B788A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                              </svg>
                           </div>
                           <div class="spinner-button dec-button">
                              <svg width="13" height="8" viewBox="0 0 13 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                 <path d="M11.8633 1.0558L6.75599 6.16309L1.6487 1.05579" stroke="#7B788A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                              </svg>
                           </div>
                        </div>
                     </div>
                  </div>
                  {/*  */}
                  <div className="grid grid-cols-7 justify-between gap-4 mt-5 pb-6 px-1 lg:px-3 xl:px-7 entra_box">
                     <img className="col-span-3 order-1 lg:col-span-1" src={bonos} alt="entra_img" />
                     <div className="col-span-7 lg:col-span-4 xl:col-span-5 order-3 entra_left ms-1 xl:me-20">
                        <h3 className="mb-3">Revelado a través del querido caminar abortivo</h3>
                        <p>Su entrada al evento es su entrada a una experiencia inolvidable. Desde el momento en que ingrese al lugar, permiso paterno</p>
                     </div>
                     <div className="col-span-4 lg:col-span-2 xl:col-span-1 order-2 lg:order-4 entra_right">
                        <h2>€15.00</h2>
                        <p className="whitespace-nowrap">(+ 0,00€ g.d.g.)</p>
                        <div className="relative entra_inp_container mt-5 text-right">
                           <input type="number" className="entra_input" name="quantity" defaultValue="01" min="1" />
                           <div class="spinner-button inc-button">
                              <svg width="13" height="8" viewBox="0 0 13 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                 <path d="M1.64844 6.9442L6.75573 1.83691L11.863 6.9442" stroke="#7B788A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                              </svg>
                           </div>
                           <div class="spinner-button dec-button">
                              <svg width="13" height="8" viewBox="0 0 13 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                 <path d="M11.8633 1.0558L6.75599 6.16309L1.6487 1.05579" stroke="#7B788A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                              </svg>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="grid grid-cols-7 justify-between gap-4 mt-5 pb-6 px-1 lg:px-3 xl:px-7">
                     <img className="col-span-3 order-1 lg:col-span-1" src={bonos} alt="entra_img" />
                     <div className="col-span-7 lg:col-span-4 xl:col-span-5 order-3 entra_left ms-1 xl:me-20">
                        <h3 className="mb-3">Revelado a través del querido caminar abortivo</h3>
                        <p>Su entrada al evento es su entrada a una experiencia inolvidable. Desde el momento en que ingrese al lugar, permiso paterno</p>
                     </div>
                     <div className="col-span-4 lg:col-span-2 xl:col-span-1 order-2 lg:order-4 entra_right">
                        <h2>€15.00</h2>
                        <p className="whitespace-nowrap">(+ 0,00€ g.d.g.)</p>
                        <div className="relative entra_inp_container mt-5 text-right">
                           <input type="number" className="entra_input" name="quantity" defaultValue="01" min="1" />
                           <div class="spinner-button inc-button">
                              <svg width="13" height="8" viewBox="0 0 13 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                 <path d="M1.64844 6.9442L6.75573 1.83691L11.863 6.9442" stroke="#7B788A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                              </svg>
                           </div>
                           <div class="spinner-button dec-button">
                              <svg width="13" height="8" viewBox="0 0 13 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                 <path d="M11.8633 1.0558L6.75599 6.16309L1.6487 1.05579" stroke="#7B788A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                              </svg>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               {/* end */}
            </div>
            <div className="col-span-2"></div>
         </div>
      </div>
   );
};

export default Ticket;
