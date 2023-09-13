import React from "react";

const WorkItem = ({ item }) => {
  return (
    
      <div className="flex flex-col justify-center items-center bg-white rounded-md  duration-300 ease-in-out delay-300 shadow-md shadow-gray-400">
        <img src={item.img} alt="js logo" className="h-[50%] w-[50%] rounded-xl group-hover:animate-bounce " />
        <p className=" text-[#181729] font-semibold">{item.name}</p>
      </div>
    
  );
};

export default WorkItem;
