import React from "react";
import TopBanner from "../../components/TopBanner/TopBanner";
import arlene from "../../assets/arlene.png";
import darlene from "../../assets/darlene.png";
import henry from "../../assets/henry.png";

const Customer = () => {
   return (
      <div>
         <TopBanner></TopBanner>
         <div className="grid grid-cols-7 gap-1 lg:gap-10 lg:container lg:mx-auto mb-[100px]">
            <div className="col-span-7 lg:col-span-5 mx-1 lg:mx-0">
               <div className="coupon_container py-6">
                  <div className="datos pb-7 px-5 flex flex-wrap justify-center md:justify-between lg:justify-center xl:justify-between items-center gap-3">
                     <h2 className="uppercase text-center">DATOS DEL COMPRADOR</h2>
                     <button>Tiempo restante para finalizar la compra: 12:05</button>
                  </div>
                  <div className="px-5">
                     <div className="flex flex-col gap-6 my-[30px] datos_input">
                        <input type="text" placeholder="Nombre*" className="input w-full" />
                        <div className="grid sm:grid-cols-2 gap-7">
                           <input type="text" placeholder="correo*" className="input w-full" />
                           <input type="text" placeholder="Confirmar correo*" className="input w-full" />
                        </div>
                        <div className="grid sm:grid-cols-2 gap-7">
                           <input type="text" placeholder="DNI / Pasaporte / ID*" className="input w-full" />
                           <input type="text" placeholder="Fecha de Nacimiento*" className="input w-full" />
                        </div>
                        <input type="text" placeholder="Teléfono*" className="input w-full" />
                        <div className="grid md:grid-cols-2 gap-7">
                           <input type="text" placeholder="Código Postal*" className="input w-full" />
                           <div className="flex flex-wrap gap-4 items-center">
                              <p>Selección genero</p>
                              <div className="flex">
                                 <div className="form-control">
                                    <label className="label cursor-pointer gap-2">
                                       <span id="male_label" className="label-text">
                                          Male
                                       </span>
                                       <input type="radio" name="radio-10" className="radio checked:bg-[#9b65e4]" checked />
                                    </label>
                                 </div>
                                 <div className="form-control">
                                    <label className="label cursor-pointer gap-2">
                                       <span id="female_label" className="label-text">
                                          Female
                                       </span>
                                       <input type="radio" name="radio-10" className="radio checked:bg-[#9b65e4]" checked />
                                    </label>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="coupon second">
                     <div className="px-5 coupon_resume">
                        <div className="flex items-center gap-3">
                           <h3>Resumen del pedido</h3>
                           <hr className="border mt-[6px] border-[#E5ECFE] flex-grow" />
                        </div>
                        <div className="mt-[30px] flex flex-col gap-5">
                           <div className="flex flex-wrap justify-between">
                              <h4 className="resume_name">Price</h4>
                              <h4 className="resume_value">€1,725.00</h4>
                           </div>
                           <div className="flex flex-wrap justify-between">
                              <h4 className="resume_name">Discount 10%</h4>
                              <h4 className="resume_value discount">-€125.00</h4>
                           </div>
                           <div className="flex flex-wrap justify-between mb-[30px]">
                              <h4 className="resume_name">Total Price</h4>
                              <h4 className="resume_value">€1,600.00</h4>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="px-5 flex flex-col gap-5 mt-[30px]">
                     <div className="flex items-start">
                        <div className="mt-[3px]">
                           <input id="term" name="term" type="checkbox" className="h-5 w-5 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600" />
                        </div>
                        <label htmlFor="term" className="ml-2 block text-sm text-gray-900 check_label">
                           I agree to have my personal information collected and processed for future marketing, promotional and publicity purposes, according to the terms established in the Additional Information on Data Protection.
                        </label>
                     </div>
                     <div className="flex items-start">
                        <div className="mt-[3px]">
                           <input id="condition" name="term" type="checkbox" className="h-5 w-5 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600" />
                        </div>
                        <label htmlFor="condition" className="ml-2 block text-sm text-gray-900 check_label">
                           By clicking Continue, you agree to our terms and conditions and the information on Data Protection.
                        </label>
                     </div>
                     {/*  */}
                     <div className="flex flex-col-reverse sm:flex-row justify-center sm:justify-between items-center gap-3 mt-[30px] mb-4">
                        <button className="btn normal-case flex gap-2 w-64 lg:w-80 coupon_button cancel">Cancelar pedido</button>
                        <button className="btn border-0 normal-case flex gap-2 bg-[#9B65E4] w-64 lg:w-80 coupon_button">
                           <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path
                                 d="M0.75 0.75C0.335786 0.75 0 1.08579 0 1.5C0 1.91421 0.335786 2.25 0.75 2.25H2.08447C2.19367 2.25 2.3001 2.28436 2.38868 2.34821C2.47727 2.41206 2.54351 2.50217 2.57804 2.60576L5.05078 10.0254C5.16059 10.3548 5.17455 10.7095 5.09033 11.0464L4.88672 11.8623C4.58796 13.0573 5.51819 14.25 6.75 14.25H15.75C16.1642 14.25 16.5 13.9142 16.5 13.5C16.5 13.0858 16.1642 12.75 15.75 12.75H6.75C6.45796 12.75 6.27048 12.5104 6.34131 12.2271L6.49486 11.6138C6.52088 11.5099 6.58087 11.4176 6.66532 11.3517C6.74977 11.2858 6.85382 11.25 6.96094 11.25H15C15.3229 11.2502 15.6097 11.0436 15.7119 10.7373L17.7114 4.7373C17.8734 4.25146 17.5116 3.74977 16.9995 3.75H4.91602C4.80682 3.75 4.70039 3.71564 4.6118 3.65179C4.52321 3.58794 4.45696 3.49784 4.42243 3.39424L3.71191 1.2627C3.60972 0.956366 3.32293 0.749831 3 0.75H0.75ZM6 15C5.17157 15 4.5 15.6716 4.5 16.5C4.5 17.3284 5.17157 18 6 18C6.82843 18 7.5 17.3284 7.5 16.5C7.5 15.6716 6.82843 15 6 15ZM15 15C14.1716 15 13.5 15.6716 13.5 16.5C13.5 17.3284 14.1716 18 15 18C15.8284 18 16.5 17.3284 16.5 16.5C16.5 15.6716 15.8284 15 15 15Z"
                                 fill="currentColor"
                              />
                           </svg>
                           <span>Confirmar compra</span>
                        </button>
                     </div>
                  </div>
               </div>
            </div>
            <div className="col-span-7 lg:col-span-2 mx-2 lg:mx-0 mt-10 lg:mt-0">
               {/* <div className="coupon_container py-6 px-5 mt-1 lg:mt-10">
                  <div className="coupon second">
                     <h3>Resumen del pedido</h3>
                     <div className="mt-9 flex flex-col gap-5">
                        <div className="flex flex-wrap justify-between">
                           <h4 className="resume_name">Price</h4>
                           <h4 className="resume_value">€1,725.00</h4>
                        </div>
                        <div className="flex flex-wrap justify-between">
                           <h4 className="resume_name">Discount 10%</h4>
                           <h4 className="resume_value discount">-€125.00</h4>
                        </div>
                        <div className="flex flex-wrap justify-between mb-6">
                           <h4 className="resume_name">Total Price</h4>
                           <h4 className="resume_value">€1,600.00</h4>
                        </div>
                     </div>
                  </div>
                  <button className="btn border-0 w-full normal-case flex gap-2 mt-[177px] bg-[#9B65E4] coupon_button">
                     <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                           d="M0.75 0.75C0.335786 0.75 0 1.08579 0 1.5C0 1.91421 0.335786 2.25 0.75 2.25H2.08447C2.19367 2.25 2.3001 2.28436 2.38868 2.34821C2.47727 2.41206 2.54351 2.50217 2.57804 2.60576L5.05078 10.0254C5.16059 10.3548 5.17455 10.7095 5.09033 11.0464L4.88672 11.8623C4.58796 13.0573 5.51819 14.25 6.75 14.25H15.75C16.1642 14.25 16.5 13.9142 16.5 13.5C16.5 13.0858 16.1642 12.75 15.75 12.75H6.75C6.45796 12.75 6.27048 12.5104 6.34131 12.2271L6.49486 11.6138C6.52088 11.5099 6.58087 11.4176 6.66532 11.3517C6.74977 11.2858 6.85382 11.25 6.96094 11.25H15C15.3229 11.2502 15.6097 11.0436 15.7119 10.7373L17.7114 4.7373C17.8734 4.25146 17.5116 3.74977 16.9995 3.75H4.91602C4.80682 3.75 4.70039 3.71564 4.6118 3.65179C4.52321 3.58794 4.45696 3.49784 4.42243 3.39424L3.71191 1.2627C3.60972 0.956366 3.32293 0.749831 3 0.75H0.75ZM6 15C5.17157 15 4.5 15.6716 4.5 16.5C4.5 17.3284 5.17157 18 6 18C6.82843 18 7.5 17.3284 7.5 16.5C7.5 15.6716 6.82843 15 6 15ZM15 15C14.1716 15 13.5 15.6716 13.5 16.5C13.5 17.3284 14.1716 18 15 18C15.8284 18 16.5 17.3284 16.5 16.5C16.5 15.6716 15.8284 15 15 15Z"
                           fill="currentColor"
                        />
                     </svg>
                     <span>Continuar</span>
                  </button>
               </div> */}
               <div className="coupon_last">
                  <h2 className="mb-5">Artistas</h2>
                  <div className="flex gap-5 artist">
                     <div className="flex flex-col items-center gap-[14px]">
                        <img src={arlene} alt="artists_img" />
                        <p>Arlene McCoy</p>
                     </div>
                     <div className="flex flex-col items-center gap-[14px]">
                        <img src={darlene} alt="artists_img" />
                        <p>Darlene Robert</p>
                     </div>
                     <div className="flex flex-col items-center gap-[14px]">
                        <img src={henry} alt="artists_img" />
                        <p>Courtney Henry</p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         {/*  */}
         {/*  */}

         {/*  */}
         {/*  */}
      </div>
   );
};

export default Customer;
