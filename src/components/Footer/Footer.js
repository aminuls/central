import React from "react";
import footer from "../../assets/footer.png";
import app from "../../assets/app.png";
import play from "../../assets/play.png";
import bank_card from "../../assets/bank_card.png";

const Footer = () => {
   return (
      <div className="bg-[#110C27]">
         <div className="sm:container sm:mx-auto">
            <div className="border-b-2 border-[#2D2843] flex justify-end">
               <a href="#top">
                  <div className="h-16 w-16 rounded-full my-[18px] bg-[#252137] flex justify-center items-center cursor-pointer">
                     <svg width="20" height="11" viewBox="0 0 20 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.25 9.75L10 1L18.75 9.75" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                     </svg>
                  </div>
               </a>
            </div>
            <div className="mt-[70px] mb-[110px] flex flex-col lg:flex-row gap-x-[90px] gap-y-3 footer items-center lg:items-start">
               <div className="flex flex-col items-center lg:items-start">
                  <a href="/">
                     <img src={footer} alt="footer-logo" />
                  </a>
                  <p className="mt-[30px] mb-[26px]">Síganos</p>
                  <div className="flex flex-wrap gap-[10px]">
                     <a href="https://twitter.com">
                        <div className="box-border border border-white rounded-full h-12 w-12 grid place-items-center">
                           <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path
                                 d="M18.125 4.96681C17.5273 5.22462 16.8769 5.41016 16.207 5.48243C16.9026 5.06922 17.4234 4.41641 17.6719 3.64649C17.0192 4.03475 16.3042 4.30701 15.5586 4.45118C15.247 4.11803 14.8701 3.85262 14.4514 3.67151C14.0327 3.49039 13.5812 3.39744 13.125 3.39845C11.2793 3.39845 9.79492 4.89454 9.79492 6.73048C9.79492 6.98829 9.82617 7.2461 9.87695 7.49415C7.11328 7.34962 4.64844 6.02931 3.00977 4.00782C2.71118 4.51781 2.55471 5.0985 2.55664 5.68946C2.55664 6.84571 3.14453 7.86524 4.04102 8.46485C3.5127 8.44405 2.99676 8.29883 2.53516 8.04102V8.08204C2.53516 9.70118 3.67969 11.043 5.20508 11.3516C4.91867 11.426 4.62404 11.464 4.32812 11.4649C4.11133 11.4649 3.90625 11.4434 3.69922 11.4141C4.12109 12.7344 5.34961 13.6934 6.8125 13.7246C5.66797 14.6211 4.23437 15.1484 2.67773 15.1484C2.39844 15.1484 2.14062 15.1387 1.87305 15.1074C3.34961 16.0547 5.10156 16.6016 6.98828 16.6016C13.1133 16.6016 16.4648 11.5274 16.4648 7.12306C16.4648 6.97852 16.4648 6.83399 16.4551 6.68946C17.1035 6.21485 17.6719 5.62696 18.125 4.96681Z"
                                 fill="white"
                              />
                           </svg>
                        </div>
                     </a>
                     <a href="https://www.facebook.com">
                        <div className="box-border border border-white rounded-full h-12 w-12 grid place-items-center">
                           <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path
                                 d="M11.5482 20V10.8777H14.6089L15.0681 7.32156H11.5482V5.05147C11.5482 4.0222 11.8329 3.32076 13.3105 3.32076L15.192 3.31999V0.13923C14.8667 0.0969453 13.7497 0 12.4497 0C9.73512 0 7.87666 1.65697 7.87666 4.69927V7.32156H4.80664V10.8777H7.87666V20H11.5482Z"
                                 fill="white"
                              />
                           </svg>
                        </div>
                     </a>
                     <a href="https://www.instagram.com/">
                        <div className="box-border border border-white rounded-full h-12 w-12 grid place-items-center">
                           <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <g clip-path="url(#clip0_169_1629)">
                                 <path
                                    d="M19.9805 5.88005C19.9336 4.81738 19.7618 4.0868 19.5156 3.45374C19.2616 2.78176 18.8709 2.18014 18.359 1.68002C17.8589 1.1721 17.2533 0.777435 16.5891 0.527447C15.9524 0.281274 15.2257 0.109427 14.163 0.0625732C13.0924 0.0117516 12.7525 0 10.0371 0C7.32174 0 6.98186 0.0117516 5.91521 0.0586052C4.85253 0.105459 4.12195 0.277459 3.48905 0.523479C2.81692 0.777435 2.2153 1.16814 1.71517 1.68002C1.20726 2.18014 0.812743 2.78573 0.562603 3.44992C0.316431 4.0868 0.144583 4.81341 0.0977295 5.87609C0.0469078 6.9467 0.0351562 7.28658 0.0351562 10.002C0.0351562 12.7173 0.0469078 13.0572 0.0937615 14.1239C0.140615 15.1865 0.312615 15.9171 0.558788 16.5502C0.812743 17.2221 1.20726 17.8238 1.71517 18.3239C2.2153 18.8318 2.82089 19.2265 3.48508 19.4765C4.12195 19.7226 4.84857 19.8945 5.9114 19.9413C6.97789 19.9883 7.31792 19.9999 10.0333 19.9999C12.7487 19.9999 13.0885 19.9883 14.1552 19.9413C15.2179 19.8945 15.9485 19.7226 16.5814 19.4765C17.9255 18.9568 18.9881 17.8941 19.5078 16.5502C19.7538 15.9133 19.9258 15.1865 19.9727 14.1239C20.0195 13.0572 20.0313 12.7173 20.0313 10.002C20.0313 7.28658 20.0273 6.9467 19.9805 5.88005ZM18.1794 14.0457C18.1364 15.0225 17.9723 15.5499 17.8356 15.9015C17.4995 16.7728 16.808 17.4643 15.9367 17.8004C15.5851 17.9372 15.0538 18.1012 14.0809 18.1441C13.026 18.1911 12.7096 18.2027 10.0411 18.2027C7.37256 18.2027 7.05221 18.1911 6.00113 18.1441C5.02438 18.1012 4.49693 17.9372 4.1453 17.8004C3.71172 17.6402 3.31705 17.3862 2.9967 17.0541C2.66461 16.7298 2.41065 16.3391 2.2504 15.9055C2.11366 15.5539 1.94959 15.0225 1.90671 14.0497C1.8597 12.9948 1.8481 12.6783 1.8481 10.0097C1.8481 7.34122 1.8597 7.02087 1.90671 5.96995C1.94959 4.99319 2.11366 4.46575 2.2504 4.11412C2.41065 3.68038 2.66461 3.28586 3.00067 2.96536C3.32483 2.63327 3.71553 2.37931 4.14927 2.21921C4.5009 2.08247 5.03232 1.9184 6.0051 1.87537C7.06 1.82851 7.37653 1.81676 10.0449 1.81676C12.7174 1.81676 13.0338 1.82851 14.0848 1.87537C15.0616 1.9184 15.589 2.08247 15.9407 2.21921C16.3743 2.37931 16.7689 2.63327 17.0893 2.96536C17.4214 3.28967 17.6753 3.68038 17.8356 4.11412C17.9723 4.46575 18.1364 4.99701 18.1794 5.96995C18.2263 7.02484 18.238 7.34122 18.238 10.0097C18.238 12.6783 18.2263 12.9908 18.1794 14.0457Z"
                                    fill="white"
                                 />
                                 <path
                                    d="M10.0362 4.86426C7.19976 4.86426 4.89844 7.16543 4.89844 10.002C4.89844 12.8385 7.19976 15.1397 10.0362 15.1397C12.8727 15.1397 15.1739 12.8385 15.1739 10.002C15.1739 7.16543 12.8727 4.86426 10.0362 4.86426ZM10.0362 13.3347C8.19605 13.3347 6.70345 11.8422 6.70345 10.002C6.70345 8.16172 8.19605 6.66927 10.0362 6.66927C11.8764 6.66927 13.3689 8.16172 13.3689 10.002C13.3689 11.8422 11.8764 13.3347 10.0362 13.3347Z"
                                    fill="white"
                                 />
                                 <path
                                    d="M16.5767 4.66134C16.5767 5.3237 16.0397 5.86076 15.3772 5.86076C14.7148 5.86076 14.1777 5.3237 14.1777 4.66134C14.1777 3.99882 14.7148 3.46191 15.3772 3.46191C16.0397 3.46191 16.5767 3.99882 16.5767 4.66134Z"
                                    fill="white"
                                 />
                              </g>
                              <defs>
                                 <clipPath id="clip0_169_1629">
                                    <rect width="20" height="20" fill="white" />
                                 </clipPath>
                              </defs>
                           </svg>
                        </div>
                     </a>
                     <a href="https://www.linkedin.com">
                        <div className="box-border border border-white rounded-full h-12 w-12 grid place-items-center">
                           <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path
                                 d="M0.499219 16.998H3.49922V5.89805H0.499219V16.998ZM1.99922 0.998047C0.999219 0.998047 0.199219 1.79805 0.199219 2.79805C0.199219 3.79805 0.999219 4.59805 1.99922 4.59805C2.99922 4.59805 3.79922 3.79805 3.79922 2.79805C3.79922 1.79805 2.99922 0.998047 1.99922 0.998047ZM8.59922 7.59805V5.89805H5.59922V16.998H8.59922V11.298C8.59922 8.09805 12.6992 7.89805 12.6992 11.298V16.998H15.6992V10.198C15.6992 4.79805 9.99922 4.99805 8.59922 7.59805Z"
                                 fill="#F5F5F5"
                              />
                           </svg>
                        </div>
                     </a>
                  </div>
               </div>
               <div className="text-center lg:text-start">
                  <h2>Taquilla Central</h2>
                  <div className="mt-6">
                     <ul className="flex flex-col">
                        <li>Contacto</li>
                        <li>Quiénes somos?</li>
                        <li>Aviso Legal</li>
                        <li>Terminos y condiciones</li>
                        <li>Política de Cookies</li>
                        <li>Política de Privacidad</li>
                     </ul>
                  </div>
               </div>
               <div className="text-center lg:text-start">
                  <h2>Datos de contacto.</h2>
                  <div className="mt-6">
                     <ul className="flex flex-col gap-y-[16px]">
                        <li>
                           Teléfono:
                           <br /> 644 50 75 41
                        </li>
                        <li>
                           Correo:
                           <br /> info@taquillacentral.com
                        </li>
                        <li>
                           Oficina:
                           <br /> 4517 Washington Ave.
                           <br /> Manchester, Kentucky 39495
                        </li>
                     </ul>
                  </div>
               </div>
               <div>
                  <div className="text-center lg:text-start">
                     <h2>Descarga la app</h2>
                     <div className="mt-6 flex flex-wrap gap-5 mb-[60px]">
                        <a href="https://play.google.com/">
                           <img src={play} alt="play_store" />
                        </a>
                        <a href="https://www.apple.com/app-store/">
                           <img src={app} alt="app" />
                        </a>
                     </div>
                  </div>
                  <div className="text-center lg:text-start">
                     <h2>Método de pago</h2>
                     <div className="mt-6">
                        <a href="/">
                           <img src={bank_card} alt="card" />
                        </a>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div className="border-t-[3px] border-[#2D2843]">
            <p className="py-[30px] text-center copyright">Derechos de autor © Taquilla Central 2023</p>
         </div>
      </div>
   );
};

export default Footer;
