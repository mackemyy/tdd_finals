import { useState } from "react";
import './Products.css';

const Products = () => {
    return (
        <>
        <div>
            <div className="topnav">
                <a href="#login" id="loginbtn">LOGIN</a>
                <a href="#products" className="active" data-testid="products">PRODUCTS</a>
                <a href="#about">ABOUT</a>
                <a href="#home">HOME</a>
            </div>
           
            <div className="parallax">
            <div className="title" data-testid="title"> Our Products </div>
            <div className="subtitle" data-testid="subtitle">We have a wide range of breads, from the most basic all-time favorite Italian Breads, to other flavored and speciality breads. Scroll down to see our menu.</div>
            </div>
            <div className="content">
                <div className="products">
                    <div id="menu" data-testid="menu">Menu</div>
                </div>
            </div>
        </div>
        </>
    )
};

export default Products;
