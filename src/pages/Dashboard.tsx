import React from "react";
import leaf from "../assets/icons/leaf.svg";

const Dashboard = () => {
    return (
      <div className="bg-gray-400 h-screen w-screen flex justify-start pl-3 pt-3">
        <h1 className="text-emerald-900 text-3xl">Perfect Thyme</h1>
        <img src={leaf} alt="Leaf Logo" />
      </div>
    );
  };
  
  export default Dashboard;
  