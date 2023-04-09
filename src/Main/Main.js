import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { Link, Outlet } from "react-router-dom";

const Main = () => {
   return (
      <div className="drawer">
         <input id="my-drawer" type="checkbox" className="drawer-toggle" />
         <div className="drawer-content">
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
            {/* <label className="btn btn-primary drawer-button">
                  Open drawer
               </label> */}
         </div>
         <div className="drawer-side">
            <label htmlFor="my-drawer" className="drawer-overlay"></label>
            <ul className="menu p-4 w-80 bg-base-100 text-base-content">
               <li>
                  <Link to="/">Home</Link>
               </li>
               <li>
                  <Link to="/ticket_list">Ticket List</Link>
               </li>
               <li>
                  <Link to="/customer_details">Customer Details</Link>
               </li>
            </ul>
         </div>
      </div>
   );
};

export default Main;
