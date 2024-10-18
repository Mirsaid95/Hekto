import React from "react";
import { data } from "../../data/data";

export const SHopexOffer = () => {
  return (
    <div className="shopex pt-[40px]">
      <div className="max-w-[1240px] mx-auto flex flex-col items-center gap-4">
        <h1 className="text-[30px] font-bold">What Shopex Offer!</h1>
        <div className=" grid grid-cols-4 gap-4">
          {data.shopex.map((item) => (
            <div className="flex flex-col items-center text-center justify-center gap-4 w-[270px] h-[300px] shadow-md">
              <span>
                <img src={item.img} alt="" />
              </span>
              <div className="flex flex-col gap-3">
                <h1 className="text-[#151875]">{item.title}</h1>
                <p className="text-[#1A0B5B4D]">{item.lorem}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
