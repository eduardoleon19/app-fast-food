import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineSearch, AiOutlineCloseCircle, AiFillHeart } from "react-icons/ai";
import { BsCartFill, BsFillSaveFill, BsFillPeopleFill, BsTicketDetailedFill } from "react-icons/bs";
import { TbTruck } from "react-icons/tb";
import { FaWallet } from "react-icons/fa";
import { IoMdHelpCircle } from "react-icons/io";

const Navbar = () => {
    const [nav, setNav]=useState(false)
    return (
        <div className="max-w-[1648px] mx-auto flex justify-between items-center p-4">
            <div className="items-center flex">
                <div onClick={()=> setNav(!nav)} className="cursor-pointer">
                    <AiOutlineMenu size={27}/>
                </div>
                <h1 className="text-xl text-2xl sm:text-3xl lg:text-4xl px-2">
                    {/*p=padding when is px or py is about vector: y=top-bottom x=right and left
                    text-#xl is like rem because is bigger
                    depends the height of the page*/}
                    Best <span className="font-bold">Eats</span>
                </h1>
                <div className="hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px]">
                    <p className="bg-black text-white rounded-full p-2">Delivery</p>
                    <p className="p-2">Pickup</p>
                </div>
            </div>
            {/*Serach Imput*/}

            <div className="bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]">
                <AiOutlineSearch size={20} />
                <input type="text" placeholder="Search foods" className="bg-gray-200 p-1 w-full focus:outline-none" />
                {/*w-full: this is used when you want to write not only in the space of the input, also, in the full div*/}
            </div>
            {/*cart button*/}
            <button className="px-4 bg-black text-white hidden md:flex items-center py-2 rounded-full">
                <BsCartFill size={20} className="mr-2" /> Cart
                {/* m=margin, but when you wanna use right, left, top or bottom, you must use m"r":margin-right  */}
            </button>
            {/* Mobile Menu */}
            {nav ? <div className="bg-black/80 fixed w-full h-screen z-10 top-0 left-0"></div> : ""}
            {/* Side drawer menu */}            
            <div className={nav ? "fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300" : "fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300"}>
                <AiOutlineCloseCircle onClick={()=> setNav(!nav)} size={30} className="absolute right-4 top-4 cursor-pointer"/>
                <h2 className="text-2xl p-4">Best <span className="font-bold">Eats</span></h2>
                <nav>
                    <ul className="flex flex-col p-4 text-gray-800">
                        <li className="text-xl py-4 flex"><TbTruck size={30} className="mr-4" />Orders</li>
                        <li className="text-xl py-4 flex"><AiFillHeart size={30} className="mr-4" />Favorites</li>
                        <li className="text-xl py-4 flex"><FaWallet size={30} className="mr-4" />Wallet</li>
                        <li className="text-xl py-4 flex"><IoMdHelpCircle size={30} className="mr-4" />Help</li>
                        <li className="text-xl py-4 flex"><BsTicketDetailedFill size={30} className="mr-4" />Promotions</li>
                        <li className="text-xl py-4 flex"><BsFillSaveFill size={30} className="mr-4" />Best One</li>
                        <li className="text-xl py-4 flex"><BsFillPeopleFill size={30} className="mr-4" />Invite Friends</li>
                        
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default Navbar;