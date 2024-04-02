import React from "react";
import img from "../assets/img/collection.png";

const Collections = () => {
    return (
        <div
            className="h-screen lg:h-[70vh] flex flex-col justify-center lg:flex-row items-center bg-transparent mt-14 lg:px-32 px-5">
            <div className=" flex justify-center w-full lg:w-2/4 pt-6">
                <img src={img} alt="img" className={"w-3/4"}/>
            </div>

            <div className=" w-full lg:w-2/4 space-y-4 pt-5 text-center lg:text-start">
                <h1 className=" text-4xl font-semibold text-ExtraDarkColor">
                    Best Winter Collection
                </h1>
                <h3 className=" text-lg font-medium text-DarkColor">
                    Up to 80% off on Steam!
                </h3>

                <button className=" bg-ExtraDarkColor text-white px-4 py-2 font-medium active:bg-amber-800">
                    Shop Now
                </button>
            </div>
        </div>
    );
};

export default Collections;
