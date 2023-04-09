import React from "react";
import error from "../../assets/error.jpg";

const Error = () => {
   return (
      <div className="h-screen w-screen bg-base-100 flex justify-center items-center">
         <img className="w-full" style={{ maxWidth: "100vmin" }} src={error} alt="error" />
      </div>
   );
};

export default Error;
