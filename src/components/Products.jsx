import React from "react";
import ProductCard from "../layouts/ProductCard";
import src1 from "../assets/img/1.png";
import src2 from "../assets/img/2.png";
import src3 from "../assets/img/3.png";

const data = [
    {
        id: 0,
        img: src1,
        name: "Game1",
        price: "198.00",
        discount: "20% Off",
    }, {
        id: 1,
        img: src2,
        name: "Game2",
        price: "1980.00",
        discount: "20% Off",
    }, {
        id: 2,
        img: src3,
        name: "Game3",
        price: "18.00",
        discount: "10% Off",
    },];
const aosNum = ["slide-right", "zoom-in", "slide-left"]

const Products = () => {
    return (
        <div className=" min-h-screen flex flex-col justify-center px-5 pt-24 lg:pt-16">
            {/* heading section */}
            <div>
                <h1 data-aos={"zoom-in"} className=" font-semibold text-4xl text-center text-ExtraDarkColor">
                    New Arrivals
                </h1>
            </div>

            {/* Cards section */}
            <div className=" flex flex-wrap justify-center gap-5 pt-8">
                {data.map((item) => (
                    <ProductCard
                        data_aos={aosNum[item.id]}
                        key={item.id}
                        id={item.id}
                        img={item.img}
                        name={item.name}
                        price={item.price}
                        discount={item.discount}
                    />
                ))}
            </div>
        </div>
    );
};

export default Products;
