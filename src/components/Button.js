import React from "react";
import "./Button.css";
import { Link } from "react-router-dom";

const STYLES = ["btn--primary", "btn--outline"];

const SIZES = ["btn--medium", "btn--large"];

function Button(children, type, onClick, buttonStyle, buttonSize) {
    const checkButtonStyle = STYLES.infludes(buttonStyle) ? buttonStyle : STYLE[0]

    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZE[0];
    return (
        <div>
            <Link to="" className="btn-mobile">
                <button>
                    {/* whatever put in button it will render that*/}
                {children}
                </button>
            </Link>
        </div>
    )
}

export default Button;