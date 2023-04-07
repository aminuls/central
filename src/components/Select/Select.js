import React, { useState } from "react";
import downArrow from "../../assets/down-arrow.png";

const Select = ({ children, title, button }) => {
   const [visibility, setVisibility] = useState(true);
   const selectText = document.getElementById("selectText");
   const options = document.getElementsByClassName("options");

   const toggleFunc = () => {
      setVisibility(!visibility);
   };

   for (let option of options) {
      option.onclick = function () {
         selectText.innerHTML = this.textContent;
      };
   }
   return (
      <div className="cursor-pointer select-none" onClick={toggleFunc}>
         {button ? (
            <div id="selectField">
               <p className="flex gap-1 items-center">
                  <span id="selectText">{title}</span>{" "}
                  <i className={`mt-1 ${visibility && "rotate-180"} transition-all`}>
                     <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.75 6.25L7 1L12.25 6.25" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                     </svg>
                  </i>
               </p>
               <div className="absolute right-0 top-[60px] z-50">
                  <div className={`list-con relative ${visibility && " hide"} select-none`}>
                     <ul className="list mt-2">{children}</ul>
                  </div>
               </div>
            </div>
         ) : (
            <div className="selectText">
               <h2 id="selectText" className="flex items-center gap-1">
                  {title}
                  <span>
                     <img src={downArrow} className={`mt-2 ${visibility && "rotate-180"} transition-all`} alt="downArrow" />
                  </span>
                  <div className="absolute left-0 top-[60px] z-50">
                     <div className={`list-con text-select relative ${visibility && " hide"} select-none`}>
                        <ul className="list mt-2">{children}</ul>
                     </div>
                  </div>
               </h2>
            </div>
         )}

         {/*  */}
         {/* <div className="selectText">
            <h2 id="selectText" className="flex items-center gap-1">
               {title}
               <span>
                  <img src={downArrow} className={`mt-2 ${visibility && "rotate-180"} transition-all`} alt="downArrow" />
               </span>
               <div className="absolute left-0 top-[60px] z-50">
                  <div className={`list-con text-select relative ${visibility && " hide"} select-none`}>
                     <ul className="list mt-2">{children}</ul>
                  </div>
               </div>
            </h2>
         </div> */}
      </div>
   );
};

export default Select;
