import { useState } from "react";
import './Home.css';

const Home = () => {
    return (
        <>
        <div>
            <div class="topnav">
                <a href="#login" id="loginbtn" data-testid="login-btn">LOGIN</a>
                <a href="#products" data-testid="products-btn">PRODUCTS</a>
                <a href="#about" data-testid="about-btn">ABOUT</a>
                <a href="#home" class="active" data-testid="home-btn">HOME</a>
            </div>
            <div class="right">
                <div class="title" data-testid="title">You Knead This</div>
                <p class="subtitle">Focusing on creating perfect harmony among textures, flavours and ingredients, our products' recipes are inspired from each of our Pastry Chef's personal take on classic simplicity. Every bite’s a joy as we continue to create products that bring an abundance of joy and goodness in order to satisfy the evolving needs of consumers.</p>
            </div>
            <div>
                <button class="discoverBtn" data-testid="discover-btn">Discover Our Pastry</button>
            </div>
        </div>
        </>
    )
};

export default Home;