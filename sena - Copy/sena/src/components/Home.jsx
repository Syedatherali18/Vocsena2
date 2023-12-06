import React from 'react';
import { useLocation } from 'react-router-dom';
import './Home.css';
import Footer from './Footer';
import whatsappIcon from '../components/assets/whatsapp.png';
import Body from './Body';
import Header from './Header';
import Reviews from './reviews';
import FAQ from './FAQ';
import Skills from './Skills';
import Exellence from './Exellence';



const Home = () => {
  const location = useLocation();
  const userName = location.state && location.state.name ? location.state.name : '';

  return (
    <div className="home-container">
      <Header />
      <main className="main-content">
        {userName && ( 
          <div className='hello-syed'>
            <h1>Ohh wow {userName}, It's great to see you here :)</h1>
          </div>
        )}
        <section id="vertical-animation-container">

          <h2 id="sentence">
          Quickly find and hire <b>the best</b> freelance service.
          </h2>
      
          <div className="home-content-tags">
           
            <div className="tag-home">Logo design</div>
            <div className="tag-home">Video editing</div>
            <div className="tag-home">Shopify</div>
            <div className="tag-home">Blog writer</div>
            <div className="tag-home">Droppshipping</div>
          </div>
        </section>


        <div className='whatsapp-icon-connect'>
          <a href="https://wa.me/+923323353052" target="_blank" rel="noopener noreferrer">
            <img src={whatsappIcon} alt="WhatsApp Icon" className="whatsapp-icon" />
          </a>
          <p>Contact on WhatsApp:</p>

        </div>
      </main>
      <Skills />
      <div className='body-title'>
        <h1>SERVICES YOU NEED</h1>
      </div>
      <Body />

      <div className='body-title'>
        <h1>FREQUENT QUESTIONS
        </h1>
      </div>
      <FAQ />
      <div className='body-title'>
        <h1>THE BEST PART IS</h1>
        <Exellence />
      </div>
      <div className='body-title'>
        <h1>REVIEWS</h1>
        <Reviews />
      </div>
  
      <Footer />



    </div>
  );
};

export default Home;
