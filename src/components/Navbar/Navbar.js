import React from "react";
import bar from "../../assets/bar.png";
import calling from "../../assets/Calling.png";

const Navbar = () => {
   return (
      <div className="fixed top-0 w-screen bg-base-100 z-50">
         <div class="navbar xl:container xl:mx-auto">
            <div class="navbar-start">
               <label htmlFor="my-drawer" class="btn btn-ghost btn-circle">
                  {/* <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 7.5H25M5 15H15M5 22.5H25" stroke="#322670" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                     </svg> */}
                  <img src={bar} alt="bar" className="w-7 h-7 sm:w-8 sm:h-8" />
               </label>
            </div>
            <div class="navbar-center bg-base-100 absolute left-1/2 -translate-x-1/2 rounded-full h-20 w-20 top-2 flex justify-center items-center p-4">
               <a href="/" class="normal-case text-xl">
                  <img src="../../logo.png" alt="logo" className="w-full" />
               </a>
            </div>
            <div class="navbar-end gap-1 sm:gap-2">
               <img src={calling} alt="call" className="w-5 h-5 sm:w-8 sm:h-8" />
               <div className="text-start call">
                  <p className="text-sm hidden sm:block">Tiene alguna consulta?</p>
                  <h2 className="text-sm sm:text-xl font-semibold">644 50 75 41</h2>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Navbar;
