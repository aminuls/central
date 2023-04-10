import React from "react";
import TopBanner from "../../components/TopBanner/TopBanner";
import entra from "../../assets/entra.png";
import bonos from "../../assets/bonos.png";
import arlene from "../../assets/arlene.png";
import darlene from "../../assets/darlene.png";
import henry from "../../assets/henry.png";

const Customer = () => {
   return (
      <div>
         <TopBanner></TopBanner>
         <div className="grid grid-cols-7 gap-1 lg:gap-10 lg:container lg:mx-auto mb-[100px]">
            <div className="col-span-7 lg:col-span-5 py-1 mx-1 lg:mx-0 lg:py-2 xl:py-7 ">
               <div className="coupon_container py-6 px-5 mt-1 lg:mt-10">
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
      </div>
   );
};

export default Customer;
