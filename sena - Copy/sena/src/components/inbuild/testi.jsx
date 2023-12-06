import React, { useState, useEffect } from 'react';
import "./style.css";
import Footer from '../Footer';
import { Link } from 'react-router-dom';
import Header from "../Header";

const Testi = () => {
  
  const reviews = [
    {
      name: 'Rafaela Moura',
      company: 'Ngo',
      shortReview: 'RFM Production',
      detailedReview: '"The services are really great. I made sure to have time for other activities without needing to worry about my social media and such. Working with them has been awesome."',
      imageSrc: 'https://media.licdn.com/dms/image/D4D03AQFk8qM8wlkXCA/profile-displayphoto-shrink_800_800/0/1688074111394?e=2147483647&v=beta&t=uGMb86-hJIjU5_CyUCrh_pILZQYWxyzW47SfEVXYym8',
    },
    {
      name: 'Zakaria Khan',
      company: 'Company',
      shortReview: 'KhanZ Invest.',
      detailedReview: '"Right from the beginning, I have been receiving clear explanations about everything, which has made the experience even better. The website itself is quite remarkable, and using it has been both enjoyable and informative."',
      imageSrc: 'https://media.licdn.com/dms/image/D4D03AQFGxmFIKgG8Zg/profile-displayphoto-shrink_800_800/0/1672533761703?e=2147483647&v=beta&t=r2TNW2cSPUr0FrLlWVZnkgcf8ij4jOfPM280Mx3EqCY',
    },
    {
      name: 'Lerio Sarah',
      company: 'Profile',
      shortReview: 'Digital Creator',
      detailedReview: '"It has truly been a wonderful experience, taking the step of hiring someone for the first time. This fresh adventure has stirred up feelings of excitement and looking forward, as we start this journey as a team."',
      imageSrc: 'https://pbs.twimg.com/profile_images/1285632206577131520/YhKTmLdA_400x400.jpg',
    },
    {
      name: 'Kevin Rempel',
      company: 'Page',
      shortReview: 'Public figure',
      detailedReview: '"Thank you for handling my social media accounts. The ideas and suggestions I receive each time are fantastic."',
      imageSrc: 'data:image/jpeg;base64,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',
    },
    // Add more reviews as needed
  ];
  const [counters, setCounters] = useState([]);
  const duration = 3000;

  useEffect(() => {
    const counterElements = Array.from(document.querySelectorAll('.counter'));
    setCounters(counterElements);
  }, []);

  const animateCounter = (counterElement, fromValue, toValue) => {
    counterElement.style.opacity = 1;
    let startTimestamp = null;

    const updateCounter = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;

      const progress = Math.min(1, (timestamp - startTimestamp) / duration);
      const currentValue = Math.round(fromValue + (toValue - fromValue) * progress);
      const formattedValue = currentValue.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');

      counterElement.textContent = formattedValue;

      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      }
    };

    requestAnimationFrame(updateCounter);
  };

  useEffect(() => {
    const showAnimation = () => {
      counters.forEach((counter) => {
        const fromValue = parseInt(counter.getAttribute('data-from'), 10);
        const toValue = parseInt(counter.getAttribute('data-to'), 10);
        animateCounter(counter, fromValue, toValue);
      });
    };

    showAnimation();
  }, [counters]);

  return (
    <div>
      <Header />
      <section id="vertical-animation-container-testi">
        <h2 id="sentence">
          Feedback and reactions give the motivation to extend the same support to newcomers.
        </h2>
      </section>
      <div className="testinumber-container">
        <div className="testinumber-content">
          <h2>Do What You Love</h2>
          <p>Having a strong passion and thinking ahead positively always lead to business growth and expansion.</p>
          <Link to="/pricing">
            <button className="testinumber-btn"></button>
          </Link>
        </div>
        <div className="counter-box" id="counts">
          <div className="col-4">
            <span className="counter" data-from="0" data-to="23">
              23
            </span>
            <p>Successfully Satisfied</p>
            <h4>CLIENTS</h4>
          </div>

          <div className="col-4">
            <span className="counter" data-from="0" data-to="88">
              88
            </span>
            <p>Delivered content</p>
            <h4>SERVICES</h4>
          </div>
        </div>
      </div>
      <div className="testi-container">
        {reviews.map((review, index) => (
          <div key={index} className="review">
            <img src={review.imageSrc} alt={review.name} />
            <div className="review-content">
              <h3>{review.name}</h3>
              <p className="short-review">
                <strong>{review.company}:</strong> {review.shortReview}
              </p>
              <p className="detailed-review">{review.detailedReview}</p>
            </div>
          </div>
        ))}
        <Footer />
      </div>
    </div>
  );
};

export default Testi;