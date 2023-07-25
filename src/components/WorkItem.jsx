import React from "react";

const WorkItem = ({ item }) => {
  return (
    
      <div className="flex flex-col justify-center items-center bg-white">
        <img src={item.img} alt="js logo" />
        <p className=" text-[#50b0e5]">{item.name}</p>
      </div>
    
  );
};

export default WorkItem;
