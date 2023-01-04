import React from "react";
import "./test.css";
import img from "./assets/3800_2_06.jpg";
import Awesome from "./Awesome";

const Test = () => {
  return (
    <>
      {/* with Tailwind 🚀 */}
      <div className="h-screen flex justify-center items-center">
        <div className="flex items-center w-96">
          <div className="w-40 h-40">
            <img src={img} className="rounded-3xl shadow-2xl" alt="" />
          </div>
          <div className="mx-auto">
            <h1 className="text-3xl text-blue-500 uppercase italic tracking-wide">
              Astronaut
            </h1>
            <p className="text-blue-300 italic">with Tailwind 🚀</p>
          </div>
        </div>
      </div>

      <Awesome />

      {/* with standard CSS (don't forget test.css 🙂) */}
      <div className="container">
        <div className="content">
          <div className="content-img">
            <img src={img} alt="" />
          </div>
          <div className="content-txt">
            <h1>Astronaut</h1>
            <p>with standard CSS 🙂</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Test;
