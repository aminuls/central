import React from "react";
import banner from "../../assets/banner.png";
import downArrow from "../../assets/down-arrow.png";
import Select from "../Select/Select";

const Banner = () => {
   return (
      <div className="relative">
         <img src={banner} alt="" className="w-full object-cover object-left-top min-h-[80vh]" />
         <div className="sm:container px-1 sm:mx-auto">
            <div className="text-white absolute top-1/2 -translate-y-1/2 banner-text">
               <div className="flex flex-wrap items-baseline gap-3">
                  <h2 className="mb-6">Encuentra tus eventos</h2>
                  <hr className="flex-grow hidden sm:block"></hr>
               </div>
               <div className="bg-white rounded-2xl p-6">
                  <div>
                     <form action="" className="flex flex-wrap justify-center gap-6 banner-form">
                        <div className="w-full sm:w-0 sm:flex-grow">
                           <input type="text" placeholder="Concert.. |" class="input w-full font-semibold" />
                        </div>
                        <button type="submit" class="btn flex gap-2 font-semibold text-xl border-0">
                           <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                           </svg>
                           Search
                        </button>
                     </form>
                     <div className="text-col flex justify-between sm:justify-start flex-wrap gap-3 mt-5 lg:pe-36">
                        <div className="sm:pe-8 relative">
                           <p className="flex gap-2 items-center font-medium mb-1">
                              <span>
                                 <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                       d="M9 4.4375H16.5C16.6823 4.4375 16.8572 4.36507 16.9861 4.23614C17.1151 4.1072 17.1875 3.93234 17.1875 3.75C17.1875 3.56766 17.1151 3.3928 16.9861 3.26386C16.8572 3.13493 16.6823 3.0625 16.5 3.0625H9C8.81766 3.0625 8.6428 3.13493 8.51386 3.26386C8.38493 3.3928 8.3125 3.56766 8.3125 3.75C8.3125 3.93234 8.38493 4.1072 8.51386 4.23614C8.6428 4.36507 8.81766 4.4375 9 4.4375Z"
                                       fill="#7B788A"
                                       stroke="#7B788A"
                                       stroke-width="0.25"
                                    />
                                    <path
                                       d="M9 7.4375H15C15.1823 7.4375 15.3572 7.36507 15.4861 7.23614C15.6151 7.1072 15.6875 6.93234 15.6875 6.75C15.6875 6.56766 15.6151 6.3928 15.4861 6.26386C15.3572 6.13493 15.1823 6.0625 15 6.0625H9C8.81766 6.0625 8.6428 6.13493 8.51386 6.26386C8.38493 6.3928 8.3125 6.56766 8.3125 6.75C8.3125 6.93234 8.38493 7.1072 8.51386 7.23614C8.6428 7.36507 8.81766 7.4375 9 7.4375Z"
                                       fill="#7B788A"
                                       stroke="#7B788A"
                                       stroke-width="0.25"
                                    />
                                    <path
                                       d="M9 11.9375H16.5C16.6823 11.9375 16.8572 11.8651 16.9861 11.7361C17.1151 11.6072 17.1875 11.4323 17.1875 11.25C17.1875 11.0677 17.1151 10.8928 16.9861 10.7639C16.8572 10.6349 16.6823 10.5625 16.5 10.5625H9C8.81766 10.5625 8.6428 10.6349 8.51386 10.7639C8.38493 10.8928 8.3125 11.0677 8.3125 11.25C8.3125 11.4323 8.38493 11.6072 8.51386 11.7361C8.6428 11.8651 8.81766 11.9375 9 11.9375Z"
                                       fill="#7B788A"
                                       stroke="#7B788A"
                                       stroke-width="0.25"
                                    />
                                    <path
                                       d="M9 14.9375H15C15.1823 14.9375 15.3572 14.8651 15.4861 14.7361C15.6151 14.6072 15.6875 14.4323 15.6875 14.25C15.6875 14.0677 15.6151 13.8928 15.4861 13.7639C15.3572 13.6349 15.1823 13.5625 15 13.5625H9C8.81766 13.5625 8.6428 13.6349 8.51386 13.7639C8.38493 13.8928 8.3125 14.0677 8.3125 14.25C8.3125 14.4323 8.38493 14.6072 8.51386 14.7361C8.6428 14.8651 8.81766 14.9375 9 14.9375Z"
                                       fill="#7B788A"
                                       stroke="#7B788A"
                                       stroke-width="0.25"
                                    />
                                    <path
                                       d="M3.75 8.1875H3.75013C4.52892 8.18667 5.27557 7.87693 5.82625 7.32625C6.37693 6.77557 6.68667 6.02892 6.6875 5.25013V5.25C6.6875 4.66902 6.51522 4.10108 6.19244 3.61801C5.86967 3.13494 5.41089 2.75844 4.87413 2.53611C4.33738 2.31377 3.74674 2.2556 3.17692 2.36894C2.6071 2.48229 2.08369 2.76206 1.67288 3.17288C1.26206 3.58369 0.982289 4.1071 0.868945 4.67692C0.7556 5.24674 0.813773 5.83738 1.03611 6.37413C1.25844 6.91089 1.63494 7.36967 2.11801 7.69244C2.60108 8.01522 3.16902 8.1875 3.75 8.1875ZM2.88192 3.95083C3.13884 3.77916 3.4409 3.68752 3.74989 3.6875C4.16421 3.68787 4.56145 3.85262 4.85442 4.14559C5.14738 4.43855 5.31213 4.8358 5.3125 5.25011C5.31248 5.55911 5.22084 5.86116 5.04917 6.11808C4.87748 6.37503 4.63345 6.5753 4.34794 6.69356C4.06243 6.81183 3.74827 6.84277 3.44517 6.78248C3.14208 6.72219 2.86367 6.57338 2.64515 6.35486C2.42663 6.13634 2.27781 5.85793 2.21752 5.55483C2.15723 5.25173 2.18818 4.93757 2.30644 4.65206C2.4247 4.36655 2.62497 4.12252 2.88192 3.95083Z"
                                       fill="#7B788A"
                                       stroke="#7B788A"
                                       stroke-width="0.25"
                                    />
                                    <path
                                       d="M3.75 15.6875H3.75013C4.52892 15.6867 5.27557 15.3769 5.82625 14.8263C6.37693 14.2756 6.68667 13.5289 6.6875 12.7501V12.75C6.6875 12.169 6.51522 11.6011 6.19244 11.118C5.86967 10.6349 5.41089 10.2584 4.87413 10.0361C4.33738 9.81377 3.74674 9.7556 3.17692 9.86894C2.6071 9.98229 2.08369 10.2621 1.67288 10.6729C1.26206 11.0837 0.982289 11.6071 0.868945 12.1769C0.7556 12.7467 0.813773 13.3374 1.03611 13.8741C1.25844 14.4109 1.63494 14.8697 2.11801 15.1924C2.60108 15.5152 3.16902 15.6875 3.75 15.6875ZM2.88192 11.4508C3.13884 11.2792 3.4409 11.1875 3.74989 11.1875C4.16421 11.1879 4.56145 11.3526 4.85442 11.6456C5.14738 11.9386 5.31213 12.3358 5.3125 12.7501C5.31248 13.0591 5.22084 13.3612 5.04917 13.6181C4.87748 13.875 4.63345 14.0753 4.34794 14.1936C4.06243 14.3118 3.74827 14.3428 3.44517 14.2825C3.14208 14.2222 2.86367 14.0734 2.64515 13.8549C2.42663 13.6363 2.27781 13.3579 2.21752 13.0548C2.15723 12.7517 2.18818 12.4376 2.30644 12.1521C2.4247 11.8665 2.62497 11.6225 2.88192 11.4508Z"
                                       fill="#7B788A"
                                       stroke="#7B788A"
                                       stroke-width="0.25"
                                    />
                                 </svg>
                              </span>
                              Categoría
                           </p>
                           <Select title="Conciertos">
                              <li className="options">Conciertos</li>
                              <li className="options">Conciertos</li>
                              <li className="options">Conciertos</li>
                              <li className="options">Conciertos</li>
                              <li className="options">Conciertos</li>
                           </Select>
                        </div>
                        <div className="sm:px-8 mid-div relative">
                           <p className="flex gap-2 items-center font-medium mb-1">
                              <span>
                                 <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                       d="M7.01138 15.057C7.122 15.2154 7.30596 15.3079 7.5 15.3079C7.69402 15.3079 7.87799 15.2154 7.98862 15.057C8.31648 14.5877 8.69699 14.079 9.09796 13.5429C9.95493 12.3972 10.9054 11.1265 11.6352 9.84792C12.4955 8.34101 12.9234 7.0394 12.9234 5.875C12.9234 3.01049 10.4839 0.692102 7.5 0.692102C4.51606 0.692102 2.07656 3.01049 2.07656 5.875C2.07656 7.0394 2.50454 8.34101 3.36476 9.84792C4.09432 11.126 5.04636 12.3989 5.90369 13.5451C6.30441 14.0809 6.68443 14.589 7.01138 15.057ZM7.5 1.83092C9.84698 1.83092 11.7445 3.65175 11.7445 5.875C11.7445 6.82203 11.3784 7.93931 10.6029 9.29791C9.90803 10.5152 8.98893 11.7439 8.14608 12.8706C7.92356 13.1681 7.70636 13.4585 7.5 13.7396C7.29367 13.4585 7.07649 13.1682 6.85398 12.8707C6.01117 11.744 5.09201 10.5153 4.3971 9.29791C3.62155 7.93931 3.25547 6.82203 3.25547 5.875C3.25547 3.65175 5.15302 1.83092 7.5 1.83092Z"
                                       fill="#7B788A"
                                       stroke="#7B788A"
                                       stroke-width="0.3"
                                    />
                                    <path
                                       d="M7.5 8.54145C9.03005 8.54145 10.2867 7.35193 10.2867 5.875C10.2867 4.39806 9.03005 3.20855 7.5 3.20855C5.96995 3.20855 4.71328 4.39806 4.71328 5.875C4.71328 7.35193 5.96995 8.54145 7.5 8.54145ZM7.5 4.34737C8.39309 4.34737 9.10781 5.03932 9.10781 5.875C9.10781 6.71068 8.39309 7.40263 7.5 7.40263C6.60691 7.40263 5.89219 6.71068 5.89219 5.875C5.89219 5.03932 6.60691 4.34737 7.5 4.34737Z"
                                       fill="#7B788A"
                                       stroke="#7B788A"
                                       stroke-width="0.3"
                                    />
                                 </svg>
                              </span>
                              Ubicación
                           </p>
                           <Select title="Almería province">
                              <li className="options">Almería province</li>
                              <li className="options">Almería province</li>
                              <li className="options">Almería province</li>
                              <li className="options">Almería province</li>
                              <li className="options">Almería province</li>
                           </Select>
                        </div>
                        <div className="sm:ps-8 relative">
                           <p className="flex gap-2 items-center font-medium mb-1">
                              <span>
                                 <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2.32031 7.05322H15.6883" stroke="#7B788A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M12.3322 9.98227H12.3392" stroke="#7B788A" stroke-width="2.24721" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M9.00408 9.98227H9.01103" stroke="#7B788A" stroke-width="2.24721" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M5.66815 9.98227H5.67509" stroke="#7B788A" stroke-width="2.24721" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M12.3322 12.8972H12.3392" stroke="#7B788A" stroke-width="2.24721" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M9.00408 12.8972H9.01103" stroke="#7B788A" stroke-width="2.24721" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M5.66815 12.8972H5.67509" stroke="#7B788A" stroke-width="2.24721" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M12.0329 1.5V3.96808" stroke="#7B788A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M5.97435 1.5V3.96808" stroke="#7B788A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <path
                                       fill-rule="evenodd"
                                       clip-rule="evenodd"
                                       d="M12.1787 2.68439H5.82822C3.6257 2.68439 2.25 3.91134 2.25 6.16666V12.9539C2.25 15.2447 3.6257 16.5 5.82822 16.5H12.1717C14.3812 16.5 15.75 15.2659 15.75 13.0106V6.16666C15.7569 3.91134 14.3882 2.68439 12.1787 2.68439Z"
                                       stroke="#7B788A"
                                       stroke-width="1.5"
                                       stroke-linecap="round"
                                       stroke-linejoin="round"
                                    />
                                 </svg>
                              </span>
                              Fecha
                           </p>
                           <Select title="Esta semana">
                              <li className="options">Esta semana</li>
                              <li className="options">Esta semana</li>
                              <li className="options">Esta semana</li>
                              <li className="options">Esta semana</li>
                              <li className="options">Esta semana</li>
                           </Select>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Banner;
