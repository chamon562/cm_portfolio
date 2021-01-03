import React, { useState } from "react";
import { Link } from "react-router-dom";
function Navbar() {
    return (
        <>
            {/* jsx goes here <> fragments </>*/}
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo">
                        Home <i class="fas fa-cat"></i>  
                    </Link>
                </div>
            </nav>
        </>
    )
}

export default Navbar