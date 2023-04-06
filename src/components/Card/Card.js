import React from "react";
// import images1 from "../../assets/images1.png";

const Card = ({image}) => {
   return (
      <div className="card rounded-xl w-full sm:w-96 md:w-[26rem] bg-base-100 shadow-xl">
         <figure className="relative">
            <img src={image} alt="images" />
            <div className="absolute top-4 left-4 glass-blur z-10 p-2">
               <p className="flex items-center font-medium text-lg text-white">
                  <svg className="me-1" width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path d="M3.37695 7.49077H17.5592" stroke="#FAFAFA" stroke-width="1.02302" stroke-linecap="round" stroke-linejoin="round" />
                     <path d="M13.859 10.5983H13.8664" stroke="#FAFAFA" stroke-width="2.72806" stroke-linecap="round" stroke-linejoin="round" />
                     <path d="M10.3942 10.5983H10.4015" stroke="#FAFAFA" stroke-width="2.72806" stroke-linecap="round" stroke-linejoin="round" />
                     <path d="M6.92933 10.5978H6.9367" stroke="#FAFAFA" stroke-width="2.72806" stroke-linecap="round" stroke-linejoin="round" />
                     <path d="M13.859 14.0786H13.8664" stroke="#FAFAFA" stroke-width="2.72806" stroke-linecap="round" stroke-linejoin="round" />
                     <path d="M10.3942 14.0786H10.4015" stroke="#FAFAFA" stroke-width="2.72806" stroke-linecap="round" stroke-linejoin="round" />
                     <path d="M6.92933 14.0786H6.9367" stroke="#FAFAFA" stroke-width="2.72806" stroke-linecap="round" stroke-linejoin="round" />
                     <path d="M13.6811 1.59937V4.21779" stroke="#FAFAFA" stroke-width="1.02302" stroke-linecap="round" stroke-linejoin="round" />
                     <path d="M7.25333 1.59937V4.21779" stroke="#FAFAFA" stroke-width="1.02302" stroke-linecap="round" stroke-linejoin="round" />
                     <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M13.8362 2.85583H7.09891C4.76224 2.85583 3.30273 4.15752 3.30273 6.55022V13.7509C3.30273 16.1812 4.76224 17.513 7.09891 17.513H13.8288C16.1729 17.513 17.625 16.2038 17.625 13.8111V6.55022C17.6324 4.15752 16.1803 2.85583 13.8362 2.85583Z"
                        stroke="#FAFAFA"
                        stroke-width="1.02302"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                     />
                  </svg>
                  15-Mar-23
               </p>
            </div>
         </figure>
         <div className="card-body p-7 pt-5 c-body">
            <h2 className="text-xl font-semibold">Revelado a través del querido caminar abortivo...</h2>
            <p className="flex gap-2 items-center font-medium my-1">
               <svg width="25" height="27" viewBox="0 0 25 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                     d="M11.7919 24.9279C11.9654 25.1737 12.2537 25.3171 12.5575 25.3171C12.8614 25.3171 13.1497 25.1738 13.3232 24.9279C13.8613 24.1657 14.4849 23.3406 15.1418 22.4716C16.5438 20.6168 18.0968 18.5623 19.2902 16.4932C20.6965 14.0554 21.3939 11.9535 21.3939 10.0762C21.3939 5.45717 17.4189 1.71935 12.5575 1.71935C7.69616 1.71935 3.72118 5.45717 3.72118 10.0762C3.72118 11.9535 4.41852 14.0554 5.82482 16.4932C7.01784 18.5614 8.57342 20.6195 9.97602 22.4752C10.6324 23.3437 11.2553 24.1678 11.7919 24.9279ZM12.5575 3.48726C16.422 3.48726 19.5461 6.45408 19.5461 10.0762C19.5461 11.6192 18.9435 13.4354 17.6725 15.6388C16.5338 17.6128 15.0273 19.6058 13.6474 21.4312C13.2713 21.9287 12.9047 22.4136 12.5575 22.8824C12.2104 22.4137 11.8438 21.9288 11.4678 21.4314C10.088 19.606 8.58135 17.6129 7.44259 15.6388C6.17161 13.4354 5.56901 11.6192 5.56901 10.0762C5.56901 6.45408 8.69307 3.48726 12.5575 3.48726Z"
                     fill="#7B788A"
                     stroke="#7B788A"
                     stroke-width="0.409209"
                  />
                  <path
                     d="M12.5581 14.3568C15.0397 14.3568 17.0785 12.4475 17.0785 10.0761C17.0785 7.70468 15.0397 5.7954 12.5581 5.7954C10.0765 5.7954 8.03758 7.70468 8.03758 10.0761C8.03758 12.4475 10.0765 14.3568 12.5581 14.3568ZM12.5581 7.56331C14.0428 7.56331 15.2307 8.70159 15.2307 10.0761C15.2307 11.4506 14.0428 12.5889 12.5581 12.5889C11.0734 12.5889 9.88542 11.4506 9.88542 10.0761C9.88542 8.70159 11.0734 7.56331 12.5581 7.56331Z"
                     fill="#7B788A"
                     stroke="#7B788A"
                     stroke-width="0.409209"
                  />
               </svg>
               Avenida Mazatlán 250 Col.
            </p>
            <div className="card-actions justify-between items-center mt-2">
               <div>
                  <p>Desde</p>
                  <h2>€15.00</h2>
               </div>
               <button className="btn btn-outline normal-case">
                  <svg width="26" className="me-2" height="25" viewBox="0 0 26 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <g clip-path="url(#clip0_173_1863)">
                        <path
                           d="M1.91365 1.33228C1.34865 1.33228 0.890625 1.7903 0.890625 2.3553C0.890625 2.9203 1.34865 3.37832 1.91365 3.37832H3.73391C3.88286 3.37832 4.02803 3.42519 4.14886 3.51228C4.26969 3.59938 4.36005 3.72228 4.40715 3.86359L7.78004 13.9842C7.92982 14.4335 7.94887 14.9173 7.83399 15.3769L7.55626 16.4898C7.14874 18.1199 8.4176 19.7467 10.0978 19.7467H22.3741C22.9391 19.7467 23.3971 19.2887 23.3971 18.7237C23.3971 18.1587 22.9391 17.7006 22.3741 17.7006H10.0978C9.69948 17.7006 9.44375 17.3738 9.54036 16.9873L9.74981 16.1508C9.78529 16.009 9.86713 15.8832 9.98232 15.7933C10.0975 15.7034 10.2394 15.6546 10.3856 15.6546H21.3511C21.7916 15.6548 22.1827 15.3731 22.3221 14.9553L25.0495 6.77108C25.2705 6.10838 24.777 5.42405 24.0785 5.42437H7.59622C7.44727 5.42437 7.30209 5.3775 7.18126 5.29041C7.06042 5.20331 6.97005 5.08041 6.92295 4.9391L5.95379 2.03161C5.81438 1.61376 5.4232 1.33205 4.98271 1.33228H1.91365ZM9.0748 20.7697C7.9448 20.7697 7.02876 21.6857 7.02876 22.8157C7.02876 23.9457 7.9448 24.8618 9.0748 24.8618C10.2048 24.8618 11.1208 23.9457 11.1208 22.8157C11.1208 21.6857 10.2048 20.7697 9.0748 20.7697ZM21.3511 20.7697C20.2211 20.7697 19.305 21.6857 19.305 22.8157C19.305 23.9457 20.2211 24.8618 21.3511 24.8618C22.4811 24.8618 23.3971 23.9457 23.3971 22.8157C23.3971 21.6857 22.4811 20.7697 21.3511 20.7697Z"
                           fill="#9B65E4"
                        />
                     </g>
                     <defs>
                        <clipPath id="clip0_173_1863">
                           <rect width="24.5525" height="24.5525" fill="white" transform="translate(0.890625 0.309448)" />
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

export default Card;
