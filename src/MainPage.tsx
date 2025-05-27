import React, { useState, useEffect } from "react";
import MediaLink from "./MediaLink";
import Browser from "./Browser";
import "./MainPage.css";

interface MainPageProps {
    imageSrc: string;
    altText: string;
}

const MainPage: React.FC<MainPageProps> = ({ imageSrc, altText }) => {
    return (
        <div className="main-page">
            <div className="profile-image">
                <img src={imageSrc} alt={altText} />
            </div>
            <h2>{altText}</h2>

            <desc>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce rutrum nisi metus. Nunc eu enim sagittis, commodo quam eu, commodo metus. Phasellus eu nulla mollis, posuere magna id, finibus purus. Nunc vitae dignissim ligula. Phasellus sed elementum mi, eget tempor ex.
            </desc>

            <div className="underline"></div>

            <MediaLink href="https://discord.com" imageSrc="/discord.png" altText="Discord"/>

            {/* Browser component replaces SearchBar and results */}
            <Browser />
        </div>
    );
};

export default MainPage;