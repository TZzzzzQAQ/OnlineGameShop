import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductCard from "../layouts/ProductCard";
import src1 from '../assets/img/1.png'
import src2 from '../assets/img/2.png'
import src3 from '../assets/img/3.png'
import src4 from '../assets/img/4.png'
import src5 from '../assets/img/5.png'
import src6 from '../assets/img/6.png'

const Shop = () => {
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

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        arrows: false,
        responsive: [
            {
                breakpoint: 1023,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 2,
                },
            },
        ],
    };

    return (
        <div className=" min-h-screen flex flex-col justify-center lg:px-32 px-5 pt-14">
            {/* heading section */}
            <div>
                <h1 className=" font-semibold text-4xl text-center text-ExtraDarkColor">
                    Best sellers
                </h1>
            </div>

            {/* carousel section */}
            <div className=" mt-8">
                <Slider {...settings}>
                    {data.map((item) => (
                        <ProductCard
                            key={item.id}
                            id={item.id}
                            img={item.img}
                            name={item.name}
                            price={item.price}
                            discount={item.discount}
                        />
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default Shop;
