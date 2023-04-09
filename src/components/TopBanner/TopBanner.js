import React from 'react';

const TopBanner = () => {
   return (
      <div className="banner_two">
         <div className="pt-[202px] pb-[100px] px-[140px] flex flex-col md:flex-row justify-center md:justify-between items-center">
            <div className='b_two_head'>
               <p>From 15 March to June 29-2023</p>
               <h3>Revelado a través del querido caminar abortivo</h3>
            </div>
            <div>
               <button className='btn h-[54px] btn-outline text-white gap-2 text-lg font-semibold'>
                  <i>
                     <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.25 12.25L1 7L6.25 1.75" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                     </svg>
                  </i>{" "}
                  De vuelta a las compras
               </button>
            </div>
         </div>
      </div>
   );
};

export default TopBanner;