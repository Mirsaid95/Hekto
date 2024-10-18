import React from 'react'
import { data } from '../../data/data'


export const FProducts = () => {
    return (
        <div className='f-products pt-10'>
            <div className='f-products-container max-w-[1240px] mx-auto flex flex-col items-center gap-10'>
                <h1 className='text-[30px] font-bold'>Featured Products</h1>
                <div className='f-products-cards grid grid-cols-4 gap-4'>
                    {data.fProducts.map((item) => (
                        <div className='f-products-card flex flex-col items-center gap-[50px] shadow-lg  w-[270px] h-[380px] bg-[#F6F7FB] text-center' key={item.id}>
                            <span><img src={item.img} alt="" className='w-[100%] h-[212px] hover:scale-110 transition-all duration-300' /></span>
                            <div className='flex flex-col w-[100%] h-[100%] bg-white gap-2 hover:bg-blue-500 hover:text-white transition-all duration-300'>
                                <h3 className='text-[18px] font-bold text-[#FB2E86]'>{item.title}</h3>
                                <div className='flex items-center justify-center gap-2'>
                                    <span className='w-[14px] h-[4px] bg-[#05E6B7] rounded-md'></span>
                                    <span className='w-[14px] h-[4px] bg-[#F701A8] rounded-md'></span>
                                    <span className='w-[14px] h-[4px] bg-[#00009D] rounded-md'></span>
                                </div>
                                <p className='text-[14px] text-[#151875]'>{item.code}</p>
                                <p className='text-[16px] text-[#151875]'>{item.price}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

