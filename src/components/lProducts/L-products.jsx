import React from "react";
import { data } from "../../data/data";


export const Lproducts = () => {
    return (

        <div className="lproducts pt-[40px]">
            <div className="lporducts-crads max-w-[1240px] mx-auto flex flex-col items-center gap-[30px]">
                <h1 className="text-[30px] font-bold">Leatest Products</h1>
                <div className="lproducts-links flex gap-4 items-center" >
                    <p className="lproducts-link text-[#FB2E86] underline cursor-pointer">New Arrival</p>
                    <p className="lproducts-link text-[#151875] cursor-pointer">Best Seller</p>
                    <p className="lproducts-link text-[#151875] cursor-pointer">Featured</p>
                    <p className="lproducts-link text-[#151875] cursor-pointer">Special Offer</p>
                </div>
                <div className="lproducts-items grid grid-cols-3 gap-6 items-center">
                    
                    {data.lProducts.map((item) => (
                        <div className="lproducts-items-card flex flex-col items-center w-[360px] h-[306px] border shadow-lg" key={item.id}>
                            <span className="lproducts-img h-[270px]  flex items-center justify-center">
                                <img src={item.img} alt="" className="w-[80%] h-[100%]" />
                            </span>
                            <div className="lproducts-title-price flex items-center gap-[60px] px-2 bg-[#EEEFFB] w-[100%] h-[50px]">
                                <h6 className="text-[16px] text-[#151875]">{item.title}</h6>
                                <div className="flex items-center gap-5">
                                    <p className="text-[#151875] font-semibold">{item.price}</p>
                                    <p className="text-[#FB2448] line-through text-[14px]">{item.sale}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}