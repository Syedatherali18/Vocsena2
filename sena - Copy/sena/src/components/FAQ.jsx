import React from 'react';
import './Home.css';

const FAQ = () => {
    return (
        <div className='faq-container'>
            <div id="faq">
                <ul>
                    <li>
                        <input type="checkbox" defaultChecked />
                        <i></i>
                        <h2>Do you offer website design and development services?</h2>
                        <p>
                        Yes, we create personalized websites that match your business requirements. Our team of experts, including designers and developers, collaborate to build a distinct online identity for your brand.
                    </p>
                    </li>
                    <li>
                        <input type="checkbox" defaultChecked />
                        <i></i>
                        <h2>Can you help us manage our social media accounts?</h2>
                        <p>
                        Absolutely! We provide comprehensive social media management services. We'll create and curate content, engage with your audience, and analyze performance to ensure your brand's success on social platforms.
                    </p>
                    </li>
                    <li>
                        <input type="checkbox" defaultChecked />
                        <i></i>
                        <h2>What is the process of creating a website with your agency?</h2>
                        <p>
                        Our website creation process involves understanding your business goals, wireframing, design mockups, development, testing, and deployment. We work closely with you at each step to ensure the final product aligns with your vision.
                    </p>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default FAQ;
