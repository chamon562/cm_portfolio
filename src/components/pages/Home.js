import React from "react";
import "../../App.css";
import Cards from "../Cards";
import HeroSection from "../HeroSection"

function Home() {
    return (
        <>
            <HeroSection />
            <div>
                {/* save this for later to show how was able to pull out of a depressive state and keep going  */}
                <h1>My Story</h1>
                <p>It was a tough time trying to stay positive through Covid times.
                But I know everything I've been through during my troubled youth,
                that I was prepared to want, and must achieve my Goals to be a better me.
                </p>
            </div>
            <Cards />
        </>
    )
}

export default Home