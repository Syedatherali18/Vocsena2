import React from 'react';
import './Home.css';

const Exellence = () => {
  // Your existing useEffect logic here (if any)
  // ...

  return (
    <div className='Exellence-container'>
      <div class="wrapper">
        <div class="card">
          <div class="poster"><img src="https://cdn.pixabay.com/photo/2017/03/24/18/59/face-2171923_1280.jpg" alt="Location Unknown" /></div>
          <div class="details">
            <h1>Friendly Budget</h1>
            
           
            <div class="tags">
              <span class="tag">Quality</span>
              <span class="tag">Negotiate</span>
              <span class="tag">Long term</span>
            </div>
            <p class="desc">
              You can find the right service for any budget because we offer project-based pricing, not hourly rates.
            </p>

          </div>
        </div>
        <div class="card">
          <div class="poster"><img src="https://cdn.pixabay.com/photo/2018/02/14/17/51/man-3153446_1280.jpg" alt="Location Unknown" /></div>
          <div class="details">
            <h1>Pay After Delivery</h1>
            
           
            <div class="tags">
              <span class="tag">Comprehensive</span>
              <span class="tag">Smart</span>
              <span class="tag">Saved</span>
            </div>
            <p class="desc">
              You'll know the exact cost from the beginning, so no surprises. You'll only make the payment after you give your approval.
            </p>

          </div>
        </div>
        <div class="card">
          <div class="poster"><img src="https://cdn.pixabay.com/photo/2015/07/31/00/36/woman-868534_1280.jpg" /></div>
          <div class="details">
            <h1>24/7 Online</h1>
            
           
            <div class="tags">
              <span class="tag">Access</span>
              <span class="tag">Support</span>
              <span class="tag">Revision</span>
            </div>
            <p class="desc">
              Our support is available 24/7 to assist you no matter where you are.
            </p>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Exellence;
