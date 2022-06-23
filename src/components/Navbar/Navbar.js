import React from "react";
import "./Navbar.css"


function Navbar() {
    var name = "Amazon"
    var welcome = "Hello Select Your Address"
    return (
        <div>
            <div className="navbar_container">
                <div className="navbar_left">
                    {name}
                </div>
                <p className="right">{welcome}</p>
                {/* <div className="navbar_search">

                </div> */}
            </div>
            <div className="navbar_under">
                <p>All </p>
                <p>Best Sellers</p>
                <p>Mobiles</p>
                <p>Customer Service</p>
                <p>Today's Deal</p>
                <p>Fashion</p>
                <p>Electronics</p>
                <p>Prime</p>
                <p>Home and Kitchen</p>
                <p>Fashion</p>
                <p>Electronics</p>
              

            </div>
      



     </div>









    )
}
export default Navbar;