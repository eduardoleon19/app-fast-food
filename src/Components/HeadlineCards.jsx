import React from "react";

const HeadlineCards = () => {
    return (
        <div className="max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6 cursor-default">
            {/* md:grid-cols-3=grid-template-columns [min-width: 768px], sm [min-width: 640px], lg [min-width: 1024px], xl [min-width: 1280px], 2xl [min-width: 1536px] */}
            {/* Card */}
            <div className="rounded-xl relative">
                {/* Overlay */}
                <div className="absolute w-full h-full bg-black/25 rounded-xl text-white">
                    <p className="font-bold text-2xl px-2 pt-4">Sun/s Out, BOGO's Out</p>
                    <p className="px-2">Through 8/26</p>
                    <button className="rounded-lg p-1 border-white bg-white text-black mx-2 absolute bottom-4 hover:bg-orange-500 hover:text-white hover:duration-300">Order Now</button>
                </div>
                <img className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl" 
                src="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
            </div>
            <div className="rounded-xl relative">
                {/* Overlay */}
                <div className="absolute w-full h-full bg-black/25 rounded-xl text-white">
                    <p className="font-bold text-2xl px-2 pt-4">New Restaurants</p>
                    <p className="px-2">Added Daily</p>
                    <button className="rounded-lg p-1 border-white bg-white text-black mx-2 absolute bottom-4 hover:bg-orange-500 hover:text-white hover:duration-300">Order Now</button>
                </div>
                <img className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl hover:h-500" 
                src="https://images.pexels.com/photos/3616956/pexels-photo-3616956.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
            </div>
            <div className="rounded-xl relative">
                {/* Overlay */}
                <div className="absolute w-full h-full bg-black/25 rounded-xl text-white">
                    <p className="font-bold text-2xl px-2 pt-4">We Deliver Desserts Top</p>
                    <p className="px-2">Tasty Treats</p>
                    <button className="rounded-lg p-1 border-white bg-white text-black mx-2 absolute bottom-4 hover:bg-orange-500 hover:text-white hover:duration-300">Order Now</button>
                </div>
                <img className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl" 
                src="https://images.pexels.com/photos/1600727/pexels-photo-1600727.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
            </div>
        </div>
    )
}

export default HeadlineCards;