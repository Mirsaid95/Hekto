import React from "react";
import footer from "../../assets/Hekto1.svg"

export const Footer = () => {
    return (
        <footer className="bg-[#F2F0FF]">
            <div className="max-w-[1240px] mx-auto flex justify-between h-[480px] py-10">
                <div className="footer flex flex-col gap-4">
                    <div className="footer-left-img w-[80px]">
                        <img src={footer} alt="footer" />
                    </div>
                    <div className="flex items-center gap-4 w-[377px] h-[45px] bg-white px-1 rounded-[5px]">
                        <input type="text" placeholder="Enter your email" className="outline-none border-none bg-transparent w-[300px] h-[40px] text-[#8A8FB9]" />
                        <button className="bg-[#FB2E86] text-white px-4 py-2 w-[135px] h-[39px] flex items-center justify-center rounded-[5px]">Sign Up</button>
                    </div>
                    <div className="flex flex-col gap-2">
                        <p className="footer-contact-info text-[#8A8FB9]">Contact Info</p>
                        <p className="footer-maps text-[#8A8FB9]">17 Princess Road, London, Greater London NW1 8JR, UK</p>
                    </div>
                </div>
                <div className="flex flex-col gap-3">
                    <h1 className="text-[22px] font-bold">Categories</h1>
                    <p className="text-[#8A8FB9]">Laptops & Computers</p>
                    <p className="text-[#8A8FB9]">Cameras & Photography</p>
                    <p className="text-[#8A8FB9]">Smart Phones & Tablets</p>
                    <p className="text-[#8A8FB9]">Video Games & Consoles</p>
                    <p className="text-[#8A8FB9]">Waterproof Headphones</p>
                </div>
                <div className="flex flex-col gap-3">
                    <h1 className="text-[22px] font-bold">Customer Care</h1>
                    <p className="text-[#8A8FB9]">My Account</p>
                    <p className="text-[#8A8FB9]">Discount</p>
                    <p className="text-[#8A8FB9]">Returns</p>
                    <p className="text-[#8A8FB9]">Orders History</p>
                    <p className="text-[#8A8FB9]">Order Tracking</p>
                </div>
                <div className="flex flex-col gap-3">
                    <h1 className="text-[22px] font-bold">Pages</h1>
                    <p className="text-[#8A8FB9]">Blog</p>
                    <p className="text-[#8A8FB9]">Browse the Shop</p>
                    <p className="text-[#8A8FB9]">Category</p>
                    <p className="text-[#8A8FB9]">Pre-Built Pages</p>
                    <p className="text-[#8A8FB9]">Visual Composer Elements</p>
                    <p className="text-[#8A8FB9]">WooCommerce Pages</p>
                </div>
            </div>
        </footer>
    )
}