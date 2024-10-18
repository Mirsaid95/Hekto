import React from "react";
import unique from "../../assets/hero2.svg";

export const Unique = () => {
  return (
    <div className="unique bg-[#F1F0FF] mt-[50px] mb-[50px]">
      <div className="unique-items max-w-[1240px] mx-auto flex items-center">
        <div className="unique-img w-[50%]">
          <img src={unique} alt="" className="w-[100%]" />
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="text-[32px] text-[#151875] font-bold">Unique Features Of leatest & Trending Poducts</h1>
          <p className="text-[#ACABC3] text-[14px]">All frames constructed with hardwood solids and laminates</p>
          <p className="text-[#ACABC3] text-[14px]">Reinforced with double wood dowels, glue, screw - nails corner 
          blocks and machine nails</p>
          <p className="text-[#ACABC3] text-[14px]">Arms, backs and seats are structurally reinforced</p>
          <div className="flex items-center gap-4">
            <button className="w-[157px] h-[45px] flex items-center justify-center text-white font-medium bg-[#FB2E86] rounded-[3px]">Add To Cart</button>
            <span className="flex flex-col text-[12px] text-[#151875]"><p className="text-[14px] font-semibold text-[#151875]">B&B Italian Sofa </p> $32.00</span>
          </div>
        </div>
      </div>
    </div>
  );
};
