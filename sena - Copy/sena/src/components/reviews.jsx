import React, { useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Link } from 'react-router-dom';

const Reviews = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(3); // Set the default checked testimonial to t-3

  const handleTestimonialChange = (event) => {
    setCurrentTestimonial(parseInt(event.target.id.split('-')[1]));
  };

  return (
    <div className="slider">
      <input type="radio" name="testimonial" id="t-1" checked={currentTestimonial === 1} onChange={handleTestimonialChange} />
      <input type="radio" name="testimonial" id="t-2" checked={currentTestimonial === 2} onChange={handleTestimonialChange} />
      <input type="radio" name="testimonial" id="t-3" checked={currentTestimonial === 3} onChange={handleTestimonialChange} />
      <input type="radio" name="testimonial" id="t-4" checked={currentTestimonial === 4} onChange={handleTestimonialChange} />
      <input type="radio" name="testimonial" id="t-5" checked={currentTestimonial === 5} onChange={handleTestimonialChange} />
      <div className="testimonials">
        <label className="item" htmlFor="t-1">
          <img src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1920px-Flag_of_the_United_States.svg.png" alt="picture" />
          <p>
            The <b>VA service</b> is amazing! Their support led to great reviews and high Amazon orders for my books. Grateful for their kindness and 24/7 availability.
          </p>
          <h2>Jami Smith</h2>
          <div className="stars-rating">
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star"></span>
            <span className="fa fa-star"></span>
          </div>
          <div className="location">
            <span className="fa fa-map-marker"></span>Burlington, Kentucky
          </div>
        </label>
        <label className="item" htmlFor="t-2">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Flag_of_Israel.svg/1280px-Flag_of_Israel.svg.png" alt="picture" />
          <p>
            I highly appreciate the amazing services that provided me with the exact pictures of the patient I was looking for!
          </p>
          <h2>Omer Mizrachi</h2>
          <div className="stars-rating">
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star"></span>
            <span className="fa fa-star"></span>
          </div>
          <div className="location">
            <span className="fa fa-map-marker"></span>`Afula, Israel
          </div>
        </label>
        <label className="item" htmlFor="t-3">
          <img src="https://upload.wikimedia.org/wikipedia/en/thumb/b/be/Flag_of_England.svg/1920px-Flag_of_England.svg.png" alt="picture" />
          <p>
            Great Work!
          </p>
          <h2>Lucky Metaverse</h2>
          <div className="stars-rating">
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star"></span>
            <span className="fa fa-star"></span>
          </div>
          <div className="location">
            <span className="fa fa-map-marker"></span>Manchester, United Kingdom
          </div>
        </label>
        <label className="item" htmlFor="t-4">
          <img src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1920px-Flag_of_the_United_States.svg.png" alt="picture" />
          <p>
            Thanks for managing my instagram while Im out of the city.
          </p>
          <h2>Wilso</h2>
          <div className="stars-rating">
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star"></span>
            <span className="fa fa-star"></span>
          </div>
          <div className="location">
            <span className="fa fa-map-marker"></span>Los Angeles, California
          </div>
        </label>
        <label className="item" htmlFor="t-5">
          <img src="https://upload.wikimedia.org/wikipedia/en/thumb/4/4c/Flag_of_Sweden.svg/1920px-Flag_of_Sweden.svg.png" alt="picture" />
          <p>
            Amazing response, thank you soo much for the content.
          </p>
          <h2>Alve Lundström</h2>
          <div className="stars-rating">
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star checked"></span>
            <span className="fa fa-star"></span>
            <span className="fa fa-star"></span>
          </div>
          <div className="location">
            <span className="fa fa-map-marker"></span>Drottningholm, Sweden
          </div>

        </label>


      </div>
      <div className='reviews-button-home'>
        <Link to="/testimonials">
          <button>Check out</button>
        </Link>
      </div>
      <div className="dots">
        <label htmlFor="t-1"></label>
        <label htmlFor="t-2"></label>
        <label htmlFor="t-3"></label>
        <label htmlFor="t-4"></label>
        <label htmlFor="t-5"></label>


      </div>
    </div>
  );
};

export default Reviews;