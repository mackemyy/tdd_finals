import { useState } from "react";
import { Link, BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './Home.css';
import Products from "./Products";
import {PageNavigation} from "./PageNavigation";

const Home = () => {
    return (
        <>

        <div>
            <div class="left">
                <div class="home_title" data-testid="home_title">You Knead This</div>
                <p class="home_subtitle">Focusing on creating perfect harmony among textures, flavours and ingredients, our products' recipes are inspired from each of our Pastry Chef's personal take on classic simplicity. Every bite’s a joy as we continue to create products that bring an abundance of joy and goodness in order to satisfy the evolving needs of consumers.</p>
            </div>
            <div>
            <Link to='/products'>
                <button class="discoverBtn" data-testid="discover-btn">
                    Discover Our Pastry 
                </button>
            </Link>
            </div>
        </div>
        </>
    )
};

export default Home;