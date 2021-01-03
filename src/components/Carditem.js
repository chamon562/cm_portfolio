import React from "react";
import { Link } from "react-router-dom";
function Carditem() {
    return (
        <>
            <li className="cards__item">
                <Link className="cards-item_link">
                    {/*this will be the image and description wrap with figure */}
                    <figure className="cards_item_pic-wrap">
                        <img src="/" alt="Travel Image"
                            className="cards_item_img" />
                    </figure>
                    <div className="cards_item_info">
                        <h5 className="cards__item_text"></h5>
                    </div>
                </Link>
            </li>
        </>
    )
}

export default Carditem;