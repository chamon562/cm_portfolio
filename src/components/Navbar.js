import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import "./Navbar.css";

function Navbar() {
    // setState here, this will update the state 
    // and change it from whatever it was to whatever i want to change it too
    // want initial value to be false
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
    // want to setClick to unfalse so its true with the bang symbol
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    // function to remove or display button on mobile
    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    // useEffect is an amazing hook in react that will allow signup to render one time
    useEffect(() => {
        showButton()
    }, []);

    window.addEventListener('resize', showButton);

    return (
        <>
            {/* jsx goes here <> fragments </>*/}
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                        Passion <i class="fas fa-cat"></i>
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        {/* setting hamburger menu use state to change from x */}
                        <i className={click ? "fas fa-times" : "fas fa-bars"} />
                    </div>
                    <ul className={click ? "nav-menu active" : "nav-menu"}>
                        <li className="nav-item">
                            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/about" className="nav-links" onClick={closeMobileMenu}>
                                About
                            </Link>

                        </li>
                        <li className="nav-item">
                            <Link to="/projects" className="nav-links" onClick={closeMobileMenu}>
                                Projects
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/contact" className="nav-links-mobile" onClick={closeMobileMenu}>
                                Contact
                            </Link>
                        </li>
                    </ul>
                    {/* will create some state if button is true shortcut with && will return whatever after this */}
                    {button && <Button buttonStyle="btn--outline">Sign UP</Button>}
                </div>
            </nav>
        </>
    )
}

export default Navbar