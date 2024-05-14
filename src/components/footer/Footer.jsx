import React from "react";
import {

    FaTwitter,
    FaGithub,
    FaLinkedin,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import ContentWrapper from "../contentWrapper/ContentWrapper";

import "./style.scss";


const Footer = () => {
    return (
        <footer className="footer">
            <ContentWrapper>
                <ul className="menuItems">
                    <li className="menuItem">Terms Of Use</li>
                    <li className="menuItem">Privacy-Policy</li>
                    <li className="menuItem">About </li>
                </ul>
                <div className="infoText">
                    At CineFlix, we are an autonomous platform and hold no affiliation with or endorsement from any movie or TV show studios associated with the content showcased on our site. Our platform acts solely as a user interface, facilitating access to a diverse range of self-hosted files aggregated from third-party providers across the internet. We do not engage in direct hosting or downloading of content; rather, we retrieve links from provider responses, ensuring adherence to DMCA guidelines.
                </div>
                <div className="socialIcons">
                    <a href="https://twitter.com/vimalmudalagi" target="_blank" rel="noopener noreferrer">
                        <span className="icon">
                            <FaTwitter />
                        </span>
                    </a>

                    <a href="https://github.com/Vimal-Mudalagii" target="_blank" rel="noopener noreferrer">
                        <span className="icon">
                            <FaGithub />
                        </span>
                    </a>

                    <a href="https://www.linkedin.com/in/vimalmudalagi" target="_blank" rel="noopener noreferrer">
                        <span className="icon">
                            <FaLinkedin />
                        </span>
                    </a>
                </div>
            </ContentWrapper>
        </footer>
    );
};

export default Footer;
