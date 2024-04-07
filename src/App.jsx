import React, {useEffect, useState} from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Shop from "./components/Shop";
import Features from "./components/Features";
import Review from "./components/Review";
import {Toaster} from "react-hot-toast";
import {Provider} from "react-redux";
import {store} from "./redux/store";
import Cart from "./components/Cart";
import Products from "./components/Products";
import 'aos/dist/aos.css';
import AOS from "aos";


const App = () => {
    const [showCart, setShowCart] = useState(false);
    useEffect(() => {
        AOS.init({
            duration: 800,
            easing: "ease-in-sine",
            delay: 0,
            offset: 100,
        });
        AOS.refresh();
    }, []);
    return (
        <div>
            <Provider store={store}>
                <Navbar setShowCart={setShowCart}/>
                {showCart && <Cart setShowCart={setShowCart}/>}
                <div id="home">
                    <Home/>
                </div>
                <div id="shop">
                    <Shop/>
                </div>
                <div id="features">
                    <Features/>
                </div>
                <div id="products">
                    <Products/>
                </div>
                <div id="review">
                    <Review/>
                </div>
                <Toaster position="bottom-center" reverseOrder={false}/>
            </Provider>
        </div>
    );
};

export default App;
