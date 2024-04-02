import React from "react";
import img from "../assets/img/2.png";

const Home = () => {
    return (
        <div
            className=" min-h-screen flex flex-col justify-center lg:flex-row items-center lg:justify-between lg:px-32 px-5 pt-24 lg:pt-10 bg-transparent">
            <div className=" space-y-4">
                <h1 className=" text-5xl font-semibold leading-tight text-ExtraDarkColor w-full lg:w-3/4">
                    Discovering Games!
                </h1>
                <p className=" w-full lg:w-3/4 text-DarkColor font-medium">
                    We have some many kinds of games!!!
                </p>

                <button className=" bg-ExtraDarkColor text-white px-4 py-2 font-medium active:bg-amber-800">
                    shop now
                </button>
            </div>

            <img className=" -ml-5 -mb-5" width={800} src={img} alt="img"/>
        </div>
    );
};

export default Home;
