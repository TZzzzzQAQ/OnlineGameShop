import React from "react";
import ProductCard from "../layouts/ProductCard";
import src1 from '../assets/img/1.png'
import src2 from '../assets/img/2.png'
import src3 from '../assets/img/3.png'
import src4 from '../assets/img/4.png'
import src5 from '../assets/img/5.png'
import src6 from '../assets/img/6.png'

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
    }, {
        id: 3,
        img: src4,
        name: "Game4",
        price: "8.00",
        discount: "50% Off",
    }, {
        id: 4,
        img: src5,
        name: "Game5",
        price: "1988.00",
        discount: "80% Off",
    }, {
        id: 5,
        img: src6,
        name: "Game6",
        price: "198.00",
        discount: "20% Off",
    },
];

const aosNum = ["slide-right", "zoom-in", "slide-left"]

const Features = () => {
    return (
        <div className=" min-h-screen flex flex-col justify-center pt-24">
            <h1 className=" font-semibold text-4xl text-center text-ExtraDarkColor">
                Exclusive Products
            </h1>

            <div className=" flex flex-wrap justify-center gap-5 pt-8">
                {data.map((item) => (
                    <div className=" md:w-2/4 lg:w-1/4">
                        <ProductCard
                            data_aos={aosNum[(item.id) % 3]}
                            key={item.id}
                            id={item.id}
                            img={item.img}
                            name={item.name}
                            price={item.price}
                            discount={item.discount}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Features;
