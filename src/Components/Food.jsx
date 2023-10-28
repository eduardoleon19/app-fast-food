import React, { useState } from "react";
import {data} from "./Data/Data"

const Food = () => {
    //console.log(data)
const [foods, setFoods]=useState(data)
    //filter type burgers/pizza/etc
    const filterType=(category)=> {
        setFoods(
            data.filter((item)=>{
                return item.category === category;
            })
        );
    };
    //filter by price
    const filterPrice=(price)=> {
        setFoods(
            data.filter((item)=>{
                return item.price === price;
            })
        );
    };

    return (
        <div className="max-w-[1640px] m-auto px-4 py-12">
            <h1 className="text-orange-600 font-bold text-4xl text-center">Top Rated Menu Items</h1>
            {/* Filter Row */}
            <div className="flex flex-col lg:flex-row justify-between">
                {/* Filter Type */}
                <div>
                    <p className="font-bold text-gray-700">Filter Type</p>
                    <div className="flex justify-between flex-wrap">
                        <button onClick={()=> setFoods(data)} className="rounded-lg w-24 bg-slate-200 p-1.5 m-1 text-orange-600 hover:bg-orange-600 hover:text-white hover:font-bold duration-300">All</button>
                        <button onClick={()=> filterType("burger")} className="rounded-lg w-24 bg-slate-200 p-1.5 m-1 text-orange-600 hover:bg-orange-600 hover:text-white hover:font-bold duration-300">Burgers</button>
                        <button onClick={()=> filterType("pizza")} className="rounded-lg w-24 bg-slate-200 p-1.5 m-1 text-orange-600 hover:bg-orange-600 hover:text-white hover:font-bold duration-300">Pizza</button>
                        <button onClick={()=> filterType("salad")} className="rounded-lg w-24 bg-slate-200 p-1.5 m-1 text-orange-600 hover:bg-orange-600 hover:text-white hover:font-bold duration-300">Salads</button>
                        <button onClick={()=> filterType("chicken")} className="rounded-lg w-24 bg-slate-200 p-1.5 m-1 text-orange-600 hover:bg-orange-600 hover:text-white hover:font-bold duration-300">Chicken</button>
                    </div>
                </div>
                {/* Filter Price */}
                <div>
                    <p className="font-bold text-gray-700">Filter Price</p>
                    <div className="flex justify-between max-w-[500px] w-full">
                        <button onClick={()=> filterPrice("$")} className="rounded-lg w-24 bg-slate-200 p-1.5 m-1 text-orange-600 hover:bg-orange-600 hover:text-white hover:font-bold duration-300">$</button>
                        <button onClick={()=> filterPrice("$$")} className="rounded-lg w-24 bg-slate-200 p-1.5 m-1 text-orange-600 hover:bg-orange-600 hover:text-white hover:font-bold duration-300">$$</button>
                        <button onClick={()=> filterPrice("$$$")} className="rounded-lg w-24 bg-slate-200 p-1.5 m-1 text-orange-600 hover:bg-orange-600 hover:text-white hover:font-bold duration-300">$$$</button>
                        <button onClick={()=> filterPrice("$$$$")} className="rounded-lg w-24 bg-slate-200 p-1.5 m-1 text-orange-600 hover:bg-orange-600 hover:text-white hover:font-bold duration-300">$$$$</button>
                    </div>
                </div>
            </div>
            {/* Display foods */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4 cursor-default transition-opacity duration-300">
                {foods.map((item, index)=> (
                    <div key={index} className="border shadow-lg rounded-lg hover:scale-105 duration-300">
                        <img src={item.image} alt={item.name} 
                        className="w-full h-[200px] object-cover rounded-t-lg"/>
                        {/* ""MUY NECESAIRO""= object-cover: es usado para que las imagenes al achicarlas no se altere la imagen */}
                        <div className="flex justify-between px-2 py-4">
                            <p className="font-bold text-[10px] sm:text-xl">{item.name}</p>
                            <p className="bg-orange-600 text-white rounded-full p-0.5">
                                <span className="p-2">{item.price}</span>
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Food;