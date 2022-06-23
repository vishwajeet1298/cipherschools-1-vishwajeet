import React from "react";
import "./ProductsBox.css";
import Products from "./Products/Products";
import backgrond_image from "../images/product_background.jpg"
import shoes from "../images/shoes.jfif"
import album from "../images/album.png"



function ProductsBox(){

    const  productsData=[
        {
            title:"Top Rated Premium Quality",
            image: [backgrond_image, shoes, album],
            description: "1st",
            
        },
        {
            title:"Top Rated Premium Quality",
            image:  [backgrond_image, shoes, album],
            description: "2nd ",
            
        },
    ]

    return(
<div className="products_container">
    <img src={backgrond_image} alt=""/>

    <div className="products_box_container"> 
      <div className="div1">
<p> Div 1 </p>
      </div>
      <div className="div2">
      <p> Div 2 </p>
        </div>
        <div className="div3">
        <p> Div 3 </p>
        </div>
        <div className="div4">
        <p> Div 4 </p>
        </div>
        <div className="div5">
        <p> Div 5 </p>
        </div>
           
    </div>

</div>
    );
}
export default ProductsBox;