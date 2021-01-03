import React from "react";
import Carditem from "./Carditem";
import "./Cards.css";

function Cards() {
    return (
        <div className="cards">
            <h1>My Projects</h1>
            <div className="cards_container">
                <div className="cards_wrapper">
                    <div className="cards_items">
                        {/* passing in props by setting in the value on the cards component 
                        ans pass props from the cardsitem*/}
                        <Carditem 
                        src="images/img-9.jpg"
                        text="This project helped me understand how to use express.js
                        I also remember understanding more on what backend and front actually meant.
                        I enjoyed learning how to use the node package axios to get grab and display information
                        from a an api I found googling. This project was made with. note put an icon or logo of all the languages used to make this project. "
                        label="project"
                        path="/projects"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cards;