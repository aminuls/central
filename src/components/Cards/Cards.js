import React from "react";

const Cards = ({images}) => {
   return (
      <div className="card rounded-xl w-[310px] bg-base-100 shadow-xl">
         <figure className="relative">
            <img src={images} alt="images" />
            <div className="absolute top-3 left-3 glass-blur z-10 p-2">
               <p className="flex items-center font-medium text-sm text-white">
                  <svg className="me-1" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path d="M1.80469 5.48577H12.202" stroke="#FAFAFA" stroke-width="0.75" stroke-linecap="round" stroke-linejoin="round" />
                     <path d="M9.49015 7.76421H9.49556" stroke="#FAFAFA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                     <path d="M6.94914 7.76421H6.95454" stroke="#FAFAFA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                     <path d="M4.40812 7.76397H4.41353" stroke="#FAFAFA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                     <path d="M9.49015 10.3156H9.49556" stroke="#FAFAFA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                     <path d="M6.94914 10.3156H6.95454" stroke="#FAFAFA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                     <path d="M4.40812 10.3156H4.41353" stroke="#FAFAFA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                     <path d="M9.35809 1.16663V3.08625" stroke="#FAFAFA" stroke-width="0.75" stroke-linecap="round" stroke-linejoin="round" />
                     <path d="M4.64715 1.16663V3.08625" stroke="#FAFAFA" stroke-width="0.75" stroke-linecap="round" stroke-linejoin="round" />
                     <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M9.47232 2.08777H4.53306C2.81999 2.08777 1.75 3.04206 1.75 4.7962V10.0752C1.75 11.8569 2.81999 12.8332 4.53306 12.8332H9.46692C11.1854 12.8332 12.25 11.8734 12.25 10.1193V4.7962C12.2554 3.04206 11.1908 2.08777 9.47232 2.08777Z"
                        stroke="#FAFAFA"
                        stroke-width="0.75"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                     />
                  </svg>
                  15-Mar-23
               </p>
            </div>
         </figure>
         <div className="card-body p-5 pt-4 c-body c2">
            <h2 className="text-lg font-semibold">Revelado a través del querido caminar abortivo...</h2>
            <p className="flex gap-2 items-center my-1 text-sm">
               <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                     d="M8.43867 17.8647C8.56587 18.0449 8.77724 18.15 9 18.15C9.22274 18.15 9.43411 18.045 9.56133 17.8647C9.95579 17.3059 10.413 16.701 10.8946 16.0639C11.9224 14.7041 13.0609 13.1979 13.9359 11.6811C14.9669 9.8938 15.4781 8.35287 15.4781 6.97656C15.4781 3.59028 12.564 0.85 9 0.85C5.43602 0.85 2.52187 3.59028 2.52187 6.97656C2.52187 8.35287 3.03312 9.8938 4.0641 11.6811C4.93873 13.1973 6.07915 14.7061 7.10743 16.0666C7.58865 16.7033 8.04531 17.3075 8.43867 17.8647ZM9 2.14609C11.8331 2.14609 14.1234 4.32114 14.1234 6.97656C14.1234 8.10777 13.6817 9.43933 12.7499 11.0546C11.9151 12.5018 10.8106 13.9629 9.79898 15.3012C9.52331 15.6659 9.25454 16.0214 9 16.3651C8.74549 16.0215 8.47675 15.666 8.2011 15.3013C7.18952 13.9631 6.08497 12.5019 5.25012 11.0546C4.31834 9.43933 3.87656 8.10777 3.87656 6.97656C3.87656 4.32114 6.16688 2.14609 9 2.14609Z"
                     fill="#7B788A"
                     stroke="#7B788A"
                     stroke-width="0.3"
                  />
                  <path
                     d="M9 10.1148C10.8193 10.1148 12.3141 8.71511 12.3141 6.97656C12.3141 5.23802 10.8193 3.83828 9 3.83828C7.18069 3.83828 5.68594 5.23802 5.68594 6.97656C5.68594 8.71511 7.18069 10.1148 9 10.1148ZM9 5.13437C10.0885 5.13437 10.9594 5.96888 10.9594 6.97656C10.9594 7.98425 10.0885 8.81875 9 8.81875C7.91154 8.81875 7.04062 7.98425 7.04062 6.97656C7.04062 5.96888 7.91154 5.13437 9 5.13437Z"
                     fill="#7B788A"
                     stroke="#7B788A"
                     stroke-width="0.3"
                  />
               </svg>
               Avenida Mazatlán 250 Col.
            </p>
            <div className="card-actions justify-between items-center mt-2">
               <div>
                  <p className="text-sm">Desde</p>
                  <h2>€15.00</h2>
               </div>
               <button className="btn btn-outline normal-case">
                  <svg className="me-1" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <g clip-path="url(#clip0_173_2160)">
                        <path
                           d="M0.75 0.75C0.335786 0.75 0 1.08579 0 1.5C0 1.91421 0.335786 2.25 0.75 2.25H2.08447C2.19367 2.25 2.3001 2.28436 2.38868 2.34821C2.47727 2.41206 2.54351 2.50217 2.57804 2.60576L5.05078 10.0254C5.16059 10.3548 5.17455 10.7095 5.09033 11.0464L4.88672 11.8623C4.58796 13.0573 5.51819 14.25 6.75 14.25H15.75C16.1642 14.25 16.5 13.9142 16.5 13.5C16.5 13.0858 16.1642 12.75 15.75 12.75H6.75C6.45796 12.75 6.27048 12.5104 6.34131 12.2271L6.49486 11.6138C6.52088 11.5099 6.58087 11.4176 6.66532 11.3517C6.74977 11.2858 6.85382 11.25 6.96094 11.25H15C15.3229 11.2502 15.6097 11.0436 15.7119 10.7373L17.7114 4.7373C17.8734 4.25146 17.5116 3.74977 16.9995 3.75H4.91602C4.80682 3.75 4.70039 3.71564 4.6118 3.65179C4.52321 3.58794 4.45696 3.49784 4.42243 3.39424L3.71191 1.2627C3.60972 0.956366 3.32293 0.749831 3 0.75H0.75ZM6 15C5.17157 15 4.5 15.6716 4.5 16.5C4.5 17.3284 5.17157 18 6 18C6.82843 18 7.5 17.3284 7.5 16.5C7.5 15.6716 6.82843 15 6 15ZM15 15C14.1716 15 13.5 15.6716 13.5 16.5C13.5 17.3284 14.1716 18 15 18C15.8284 18 16.5 17.3284 16.5 16.5C16.5 15.6716 15.8284 15 15 15Z"
                           fill="#9B65E4"
                        />
                     </g>
                     <defs>
                        <clipPath id="clip0_173_2160">
                           <rect width="18" height="18" fill="white" />
                        </clipPath>
                     </defs>
                  </svg>
                  Comprar
               </button>
            </div>
         </div>
      </div>
   );
};

export default Cards;
