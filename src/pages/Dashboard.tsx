import React from "react";
import leaf from "../assets/icons/leaf.svg";

const Dashboard = () => {
    return (
    //   <div className="bg-gray-400 h-screen w-screen display flex justify-start pl-3 pt-3">
        <div className="flex flex-col items-center pt-8 space-y-4">
        <h1 className="text-emerald-900 text-3xl">Perfect Thyme</h1>
        <div className="flex flex-col items-center">
            <p>A tasteful place to store, spice up, and perfect your recipes!</p>
            <p className="italic">One thyme at a time.</p>
        </div>
        <img src={leaf} alt="Leaf Logo" className="w-5 h-5" />
      </div>
    );
  };
  
  export default Dashboard;
  