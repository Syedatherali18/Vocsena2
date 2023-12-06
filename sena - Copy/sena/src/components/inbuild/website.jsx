import React, { useState } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import './style.css';
import CreateYourService from '..//Upload/Createyourservice'; 
import wordpressicon from '../assets/wordpress.png'
import shopifyicon from '../assets/shopifypng.png'
import customwebsiteicon from '../assets/customwebsite.png'
import GoDaddyicon from '../assets/GoDaddypng.png'
import squarespaceicon from '../assets/squarespace.png'
import webflowicon from '../assets/webflowpng.png'
import wixicon from '../assets/wixpng.png'
import woocommerceicon from '../assets/woocommerce.png'
import clickfunnelicon from '../assets/ClickFunnels.png'

const Website = () => {
    const contentData = [
        {
            title: "Get Shopify Store",
            description: "Start your own online shop with a sleek and user-friendly Shopify store.",
            images: [
                "https://images.pexels.com/photos/18264887/pexels-photo-18264887/free-photo-of-ghghg.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                "https://images.pexels.com/photos/18264918/pexels-photo-18264918/free-photo-of-hello.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                "https://images.pexels.com/photos/18265069/pexels-photo-18265069.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            ],
            packages: [
                {
                    name: "Basic",
                    price: "$84.46",
                    features: ["Premium Theme", "1 Best Selling Product", "Responsive Design", "Policy Pages"],
                },
                {
                    name: "Standard",
                    price: "$126.69",
                    features: ["Basic Package +", "30 Products", "Custom Logo", "Unlimited Revision",],
                },
                {
                    name: "Premium",
                    price: "$190.03",
                    features: ["Standard Package +", "60 Best Selling Products", "10 Apps", "3 Month Free Support"],
                },
            ],
        },
        {
            title: "Get Wordpress Website",
            description: "Bring your ideas to life with a dynamic and customizable WordPress website.",
            images: [
                "https://images.pexels.com/photos/18271576/pexels-photo-18271576/free-photo-of-wrd.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                "https://images.pexels.com/photos/18271582/pexels-photo-18271582/free-photo-of-res.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                "https://images.pexels.com/photos/18271644/pexels-photo-18271644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            ],
            packages: [
                {
                    name: "Basic",
                    price: "$105.58",
                    features: ["Elegant Design", "Domain & Hosting Setup Support", "5 Sections Design"],
                },
                {
                    name: "Standard",
                    price: "$337.83",
                    features: ["Custom Design", "Booking, Appointment, Event", "Payment Integration"],
                },
                {
                    name: "Premium",
                    price: "$527.87",
                    features: ["Basic Package+", "Standard Package+", "Membership Features", "Mailchimp Setup"],
                },
            ],
        },
        {
            title: "Get Personal Website",
            description: "Showcase your talents and achievements with a unique and professional personal website.",
            images: [
                "https://images.pexels.com/photos/18272002/pexels-photo-18272002.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                "https://images.pexels.com/photos/18271937/pexels-photo-18271937/free-photo-of-cxsdc.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                "https://images.pexels.com/photos/18272010/pexels-photo-18272010/free-photo-of-asadw.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                "https://images.pexels.com/photos/18272039/pexels-photo-18272039/free-photo-of-rewa.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            ],
            packages: [
                {
                    name: "Basic",
                    price: "$210.05",
                    features: ["Attractive Landing Page", "Portfolio/ Business", "Responsive"],
                },
                {
                    name: "Standard",
                    price: "$299.95",
                    features: [" 5 Pages Website", "Social Media Integration", "Responsive "],
                },
                {
                    name: "Premium",
                    price: "$335.68",
                    features: ["8 Pages Website", "SEO Optimized ", "Responsive ", "Content Upload"],
                },
            ],
        },
        {
            title: "Get E-commerce Website",
            description: "Unlock the potential of online sales with a feature-rich e-commerce website.",
            images: [
                "https://images.pexels.com/photos/18276095/pexels-photo-18276095/free-photo-of-herd.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            ],
            packages: [
                {
                    name: "Basic",
                    price: "$131.97",
                    features: ["modern", "SEO optimized Website"],
                },
                {
                    name: "Standard",
                    price: "$475.08",
                    features: ["ecommerce store", "Easy handle", "inventory & sales."],
                },
                {
                    name: "Premium",
                    price: "$791.80",
                    features: ["Standard Package +", "Multiple payment methods ", "Speed Optimization", "User-friendly admin panel"],
                },
            ],
        },
        {
            title: "Get Portfolio Website",
            description: "Present your creative work in a captivating and organized portfolio website.",
            images: [
                "https://images.pexels.com/photos/18285046/pexels-photo-18285046/free-photo-of-chu.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
                "https://images.pexels.com/photos/18285043/pexels-photo-18285043/free-photo-of-ghu.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
            ],
            packages: [
                {
                    name: "Basic",
                    price: "$105.58",
                    features: ["Single page", " 4 sections", "Responsiveness"],
                },
                {
                    name: "Standard",
                    price: "$263.93",
                    features: ["Professional Personal", "4 Pages", "Basic SEO", "Logo"],
                },
                {
                    name: "Premium",
                    price: "$369.51",
                    features: ["Advance", "WordPress blog ", "Website Security", "lifetime free support"],
                },
            ],
        },
        {
            title: "Get Blogging Platform",
            description: "Share your thoughts and expertise with the world through your own blogging platform.",
            images: [
                "https://images.pexels.com/photos/18285634/pexels-photo-18285634/free-photo-of-blog.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
                "https://images.pexels.com/photos/18285045/pexels-photo-18285045.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            ],
            packages: [
                {
                    name: "Basic",
                    price: "$73.90",
                    features: ["Blog Post", "500 words", "SEO optimized"],
                },
                {
                    name: "Standard",
                    price: "$105.58",
                    features: ["Extended Blog Post", "F 800 words", "SEO optimized", "location and/or industry"],
                },
                {
                    name: "Premium",
                    price: "$126.69",
                    features: ["Extended SEO Content", "1,000 words", "SEO optimized", "original content", "location and/or industry"],
                },
            ],
        },
        {
            title: "Get Event Website",
            description: "Promote and manage your upcoming event with an engaging and informative event website.",
            images: [
                "https://images.pexels.com/photos/18285671/pexels-photo-18285671/free-photo-of-wed.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                "https://images.pexels.com/photos/18285605/pexels-photo-18285605/free-photo-of-fda.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            ],
            packages: [
                {
                    name: "Basic",
                    price: "$84.46",
                    features: ["Landing Page", "registration form"],
                },
                {
                    name: "Standard",
                    price: "$253.38",
                    features: ["3 Pages", "Event listing", "Ticket selling feature", "Payments"],
                },
                {
                    name: "Premium",
                    price: "$369.51",
                    features: [" 5 Pages", "multiple event listing", " Custom Built", "Multiple payment methods"],
                },
            ],
        },
        {
            title: "Get Educational Website",
            description: "Create an online hub for learning and knowledge-sharing with an educational website.",
            images: [
                "https://images.pexels.com/photos/18285606/pexels-photo-18285606/free-photo-of-gfgr.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                "https://images.pexels.com/photos/18285607/pexels-photo-18285607/free-photo-of-dasd.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            ],
            packages: [
                {
                    name: "Basic",
                    price: "$84.46",
                    features: ["Integrate LMS", "Wordpress Website", "3 Courses", "quizzes"],
                },
                {
                    name: "Standard",
                    price: "$190.03",
                    features: ["5 pages LMS", "6 courses", "quizzes", "professional Logo"],
                },
                {
                    name: "Premium",
                    price: "$316.72",
                    features: ["10 pages LMS", "Instructor & Student Portal", "professional Logo", "Courses"],
                },
            ],
        },
        // Add more objects for each of the 20 elements
    ];
    const websitePlatforms = [
        { name: 'WordPress', icon: wordpressicon },
        { name: 'Shopify', icon: shopifyicon },
        { name: 'Custom Websites', icon: customwebsiteicon },
        { name: 'GoDaddy', icon: GoDaddyicon },
        { name: 'Squarespace', icon: squarespaceicon },
        { name: 'Webflow', icon: webflowicon },
        { name: 'Wix', icon: wixicon },
        { name: 'WooCommerce', icon: woocommerceicon },
        { name: 'ClickFunnels', icon: clickfunnelicon },
        // Add other platforms as needed...
    ];
    const [searchTerm, setSearchTerm] = useState('');
    const [showPopularSearches, setShowPopularSearches] = useState(false);
    const [selectedWebsite, setSelectedWebsite] = useState(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [showCreateService, setShowCreateService] = useState(false);
    const [showPopup, setShowPopup] = useState(false);

    
    const handleInputClick = () => {
        setShowPopularSearches(true);
    };

    const handleInputBlur = () => {
        setShowPopularSearches(false);
    };

    const showWebsitePrice = (content, index = 0) => {
        setSelectedWebsite(content);
        setCurrentImageIndex(index);
    };

    const handlePrevImage = () => {
        if (selectedWebsite && selectedWebsite.images) {
            const newIndex = (currentImageIndex - 1 + selectedWebsite.images.length) % selectedWebsite.images.length;
            setCurrentImageIndex(newIndex);
        }
    };

    const handleNextImage = () => {
        if (selectedWebsite && selectedWebsite.images) {
            const newIndex = (currentImageIndex + 1) % selectedWebsite.images.length;
            setCurrentImageIndex(newIndex);
        }
    };


    const handleCreateServiceClick = () => {
        setShowCreateService(!showCreateService);
    };

    const handleCloseCreateService = () => {
        setShowCreateService(false);
    };

    const handleCopyClick = () => {
        const copiedText = 'WEBSITE20';
        const tempTextArea = document.createElement('textarea');
        tempTextArea.value = copiedText;
        document.body.appendChild(tempTextArea);
        tempTextArea.select();
        document.execCommand('copy');
        document.body.removeChild(tempTextArea);

        setShowPopup(true);

        setTimeout(() => {
            setShowPopup(false);
        }, 3000);
    };

    const filteredContent = contentData.filter(content =>
        content.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        content.description.toLowerCase().includes(searchTerm.toLowerCase())
    );


    return (
        <div>
            <Header />
            <div className='website-content'>
                <div className="container-fluid main">
                    <h2>Grab a deal, avail now 20% off on any services you like</h2>
                    <div className="couple-website">
                        <span className="copy-icon" onClick={handleCopyClick}>
                            WEBSITE20<i className="fas fa-copy"></i>
                        </span>
                    </div>

                    {showPopup && <div id="copiedMessage" className="popup-message">Couple copied</div>}

                </div>
            </div>
            <div className='slide-websites-container-horizontal'>
                <div className='slide-websites-cms'>
                    {websitePlatforms.map((platform, index) => (
                        <div key={index} className="platform">
                            <img src={platform.icon} alt={`${platform.name} Icon`} className="platform-icon" /> {}
                            <span className="platform-name">{platform.name}</span>
                        </div>
                    ))}
                </div>
            </div>

            <div className='body-title'>
                <h1>CATEGORIES</h1>
            </div>
            <div className='upload-service-bar-website'>
                {}
                {showCreateService && (
                    <CreateYourService onClose={handleCloseCreateService} />
                )}

                <div className={`search-bar-services ${showPopularSearches ? 'open-popular-searches' : ''}`}>
                    <label htmlFor="searchInput"></label>
                    <input
                        type="text"
                        id="searchInput"
                        placeholder="Search services..."
                        value={searchTerm}
                        onClick={handleInputClick}
                        onBlur={handleInputBlur}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
     <button className="search-icon-website">
                    <i className="fas fa-search"></i>
                </button>

                    {showPopularSearches && (
                       
                        <div className="website-content-tags-services">
                          <p>Popular Searches:</p>
                            <div className="tag-services">Fitness training website</div>
                            <div className="tag-services">Shopify website</div>
                            <div className="tag-services">Revamp my website</div>
                        </div>
                    )}

                </div>
           
                <button onClick={handleCreateServiceClick} className={`create-service-button ${showCreateService ? 'close-service-button' : ''}`}>
                    {showCreateService ? 'Close' : 'Create'}
                </button>
            </div>




            <div className="row-layout">
                {filteredContent.map((content, index) => (
                    <div key={index} className="website-body-col-sm-6">
                        <div className="website-body-container">
                            <img
                                src={content.images[0]}
                                alt={content.title}
                                style={{ width: '100%', height: '100%', objectFit: 'cover', cursor: 'pointer' }}
                                onClick={() => showWebsitePrice(content, 0)}
                            />
                        </div>
                        <div className="body-container-content">
                            <h2>{content.title}</h2>
                            <p>{content.description}</p>
                        </div>
                    </div>
                ))}
            </div>
            {selectedWebsite && (

                <div className="website-popup">

                    <div className="website-popup-content">
                        <div className="close-button-container-geta">
                            <button onClick={() => setSelectedWebsite(null)} className="close-button-geta">
                                <i className="fas fa-times"></i>
                            </button>
                        </div>
                        <div className="popup-image-container">
                            <img
                                src={selectedWebsite.images[currentImageIndex]}
                                alt={selectedWebsite.title}
                                style={{
                                    width: '100%',
                                    height: 'auto',
                                    objectFit: 'cover',
                                    transition: 'transform 0.3s ease-in-out',
                                }}
                            />

                            <div className="image-navigation">
                                <button onClick={handlePrevImage}>
                                    <i className="fas fa-chevron-left"></i>
                                </button>
                                <button onClick={handleNextImage}>
                                    <i className="fas fa-chevron-right"></i>
                                </button>
                            </div>

                        </div>
                        <h2>{selectedWebsite.title}</h2>
                        <p><b>Summary:</b> {selectedWebsite.description}</p>
                        <div className="packagespopup">
                            {selectedWebsite.packages.map((pkg, index) => (
                                <div key={index} className={`package ${pkg.name.toLowerCase()}-package`}>
                                    <h3>{pkg.name}</h3>
                                    <p className="pricepackagewebsite">{pkg.price}</p>
                                    <ul>
                                        {pkg.features.map((feature, featureIndex) => (
                                            <li key={featureIndex}>{feature}</li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>




                    </div>
                </div>
            )}
            <Footer />
        </div>
    );
};

export default Website;