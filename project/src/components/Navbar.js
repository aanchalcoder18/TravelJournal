import React from "react";
import globe from "../images/globe.png";

function Navbar(){
    return(
        <nav className="nav-header">
            <div className="nav-div">
                <img src={globe} className="nav-image"/>
                <h5 className="nav-title">my travel project</h5>
            </div>
            
        </nav>
    )

}

export default Navbar;