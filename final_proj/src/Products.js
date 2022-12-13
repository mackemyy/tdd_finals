import { useState } from "react";
import { Link, BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {PageNavigation} from "./PageNavigation";
import './Products.css';

const Products = () => {
    return (
        <>
        <div>       
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
