import React, { useState } from "react";
import { Link } from "react-router-dom";
function Navbar() {
    // setState here, this will update the state 
    // and change it from whatever it was to whatever i want to change it too
    // want initial value to be false
    const [click, setClick] = useState(false);
    // want to setClick to unfalse so its true with the bang symbol
    const handleClick = () => setClick(!click);
    return (
        <>
            {/* jsx goes here <> fragments </>*/}
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo">
                        Home <i class="fas fa-cat"></i>
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        {/* setting hamburger menu use state to change from x */}
                        <i className={click ? "fas fa-times" : "fas fa-bars"} />
                        <ul></ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar