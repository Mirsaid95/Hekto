import React from "react";
import logo from "../../assets/Hekto.svg"
import { data } from "../../data/data";
import { Link } from "react-router-dom";



export const Header = () => {
    return (
        <div className="header">
            <header className="header-link bg-[#7E33E0] py-2">
                <div className="header-items max-w-[1240px] mx-auto flex justify-between items-center  text-white">
                    <div className="header-link-left flex items-center gap-4">
                        <p className="header-link-left-email text-[14px] flex items-center gap-2"><i className="fa-regular fa-envelope"></i> mhhasanul@gmail.com</p>
                        <p className="header-link-left-phone text-[14px] flex items-center gap-2"><i className="fa-solid fa-phone"></i> +8801700000000</p>
                    </div>
                    <div className="header-link-right flex items-center gap-4">
                        <select className="bg-transparent border-none text-white text-[14px] outline-none">
                            <option value="3" className="text-black">Eng</option>
                            <option value="1" className="text-black">Uzb</option>
                            <option value="2" className="text-black">Rus</option>
                        </select>
                        <select className="bg-transparent border-none text-white text-[14px] outline-none">
                            <option value="1" className="text-black">USD</option>
                            <option value="2" className="text-black">RUB</option>
                            <option value="3" className="text-black">EUR</option>
                        </select>
                        <p className="header-link-right-item flex items-center gap-2 text-[14px]"><i className="fa-regular fa-user"></i> My Account</p>
                        <p className="header-link-right-item flex items-center gap-2 text-[14px]"><i className="fa-regular fa-heart"></i> Wishlist</p>
                        <p className="header-link-right-item flex items-center gap-2 text-[14px]"><i className="fa-solid fa-cart-shopping"></i> Cart</p>
                    </div>
                </div>
            </header>

            <nav className="header-nav pt-4">
                <div className="header-nav-left max-w-[1240px] mx-auto flex justify-between items-center">
                    <div className="header-nav-left-links flex items-center gap-[50px]">
                        <div className="header-nav-left-logo">
                            <img src={logo} alt="logo" />
                        </div>
                        <div className="header-nav-left-links-items flex items-center gap-10">
                            {data.header.map((item) => (
                                <Link key={item.id} to={item.link} className="text-[16px] hover:text-blue-500">{item.title}</Link>
                            ))}
                        </div>
                    </div>
                    <div className="header-nav-left-search flex items-center justify-between  gap-2 w-[320px] h-[40px] border-[2px] border-[#E7E6EF]">
                        <input type="text" placeholder="Search" className="outline-none border-none bg-transparent pl-2" />
                        <button className="bg-[#FB2E86] text-white px-4 py-2"><i class="fa-solid fa-magnifying-glass"></i></button>
                    </div>
                </div>
            </nav>
        </div>
    )
}
