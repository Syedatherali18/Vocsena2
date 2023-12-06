import React, { useEffect } from 'react';
import './Home.css';
import Header from "./Header";

const Premium = () => {

    useEffect(() => {
        const video = document.getElementById("background-video");

        if (video) {
            video.play();

            video.addEventListener("ended", () => {
                video.pause();
            });

            return () => {
                video.removeEventListener("ended", () => {
                    video.pause();
                });
            };
        }
    }, []);

    return (
        <div>
            <Header />
            <main className="main-content">
                <section id="vertical-animation-container">
                    <h2 id="sentence">
                        Social Media
                      
                    </h2>
                </section>
            </main>
            <div className='Premium-container'>
                <div className="content-wrapper">
                    <section className="mission-section">
                        <h2>Digital work that makes a real difference.</h2>
                        <p>Built successful partnerships by exceeding our clients’ expectations. Our mission is to help them achieve their goals and share their message with the world.</p>
                    </section>
                    <ul className="services-list">
                        <li>Increase leads and sales</li>
                        <li>Maximize engagement</li>
                        <li>Drive eCommerce growth</li>
                        <li>Boost social media presence</li>
                        <li>Optimize your website</li>
                        <li>Increase brand awareness</li>
                    </ul>
                    <button className="explore-button">Explore our work</button>
                </div>
                <div className="video-wrapper">
                    <video id="background-video" muted playsInline>
                        <source src="https://elitedigitalagency.com/videos/movember.webm" type="video/webm" />
                    </video>
                </div>
            </div>
        </div>
    );
};

export default Premium;
