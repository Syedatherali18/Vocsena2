import React, { useState } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import './style.css';
import Auditicon from '../assets/Audit.png'
import Taxplanningicon from '../assets/TaxPlanning.png'
import SalesStrategyicon from '../assets/SalesStrategy.png'
import SEOicon from '../assets/SEO.png'
import BusinessExpansionicon from '../assets/BusinessExpansion.png'
import CustomerRelationicon from '../assets/CustomerRelation.png'
import ExManagementicon from '../assets/ExManagement.png'
import MarketResearchicon from '../assets/MarketResearch.png'
import LeadGenerationicon from '../assets/LeadGeneration.png'

const Branding = () => {
    const contentData = [
        {
            title: "Get targeted b2b lead generation",
            description: "Linkedin Lead Generation, Email finding, Web Research, Business leads, Email Marketing, Data entry, Data Scraping, etc.",
            images: [
                "https://images.pexels.com/photos/18420851/pexels-photo-18420851.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                "https://images.pexels.com/photos/18420850/pexels-photo-18420850.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            ],
            packages: [
                {
                    name: "Basic",
                    price: "$5.24",
                    features: ["50 leads included", "Formatting & clean up"],
                },
                {
                    name: "Standard",
                    price: "$52.39",
                    features: ["500 leads included", "30 Products", "Formatting & clean up",],
                },
                {
                    name: "Premium",
                    price: "$94.30",
                    features: ["1,000 leads included", "Formatting & clean up"],
                },
            ],
        },
        {
            title: "Get Financial Consultant And Tax Advisor",
            description: "certified accounting & finance professional and an authorized tax preparer.",
            images: [
                "https://images.pexels.com/photos/18431679/pexels-photo-18431679.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            ],
            packages: [
                {
                    name: "Basic",
                    price: "$40",
                    features: ["Individual tax return", "W2 or K-1"],
                },
                {
                    name: "Standard",
                    price: "$80",
                    features: ["Individual or Business tax return", "1040, 1120, 1120S, 1065"],
                },
                {
                    name: "Premium",
                    price: "$150",
                    features: ["Complex IRS tax returns", "1040, 1120, 1120S, 1041, 1065"],
                },
            ],
        },
        {
            title: "Get Product Research",
            description: "Are you planning to start business on Amazon and looking a winning product for AMZ FBA Private Label.",
            images: [
                "https://images.pexels.com/photos/18431678/pexels-photo-18431678.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                "https://images.pexels.com/photos/18431680/pexels-photo-18431680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            ],
            packages: [
                {
                    name: "Basic",
                    price: "$45",
                    features: ["1 product", "Keywords report", "Verified supplier", "basic report"],
                },
                {
                    name: "Standard",
                    price: "$60",
                    features: ["1 product", " Custom requirements", "Top 20 keywords", "Competitors analysis", "supplier info", "standard report"],
                },
                {
                    name: "Premium",
                    price: "$100",
                    features: ["2 products", "Custom Requirements ", "Top keywords", "SV of KW", "Competitors analysis", "upplier info", "Standard report"],
                },
            ],
        },
        {
            title: "Get Personal administrative  assistant",
            description: "specialize in various areas, including data entry, web research, WordPress management, YouTube support, CRM administration, and graphic design",
            images: [
                "https://images.pexels.com/photos/18431677/pexels-photo-18431677.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                "https://images.pexels.com/photos/18431676/pexels-photo-18431676.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            ],
            packages: [
                {
                    name: "Basic",
                    price: "$10",
                    features: ["2 hours of work"],
                },
                {
                    name: "Standard",
                    price: "$25.08",
                    features: ["6 hours of work"],
                },
                {
                    name: "Premium",
                    price: "$91",
                    features: ["20 hours of work"],
                },
            ],
        },

    ];
    const websitePlatforms = [
        { name: 'Market Research', icon: MarketResearchicon },
        { name: 'Sales Strategy', icon: SalesStrategyicon },
        { name: 'Lead Generation', icon: LeadGenerationicon },
        { name: 'SEO', icon: SEOicon },
        { name: 'Business Expansion', icon: BusinessExpansionicon },
        { name: 'Customer Relationship ', icon: CustomerRelationicon },
        { name: 'Expense Management', icon: ExManagementicon },
        { name: 'Tax Planning', icon: Taxplanningicon },
        { name: 'Audit and Compliance', icon: Auditicon },
    ];

    const [searchTerm, setSearchTerm] = useState('');
    const [selectedWebsite, setSelectedWebsite] = useState(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

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

    const filteredContent = contentData.filter(content =>
        content.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        content.description.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const contentToShow = filteredContent.length === 0 ? (
        <div className="no-results-message">
            <p>Try something else</p>
        </div>
    ) : (
        <div className="row-layout">

        </div>
    );

    return (
        <div>
            <Header />
            <div className='website-content'>
                <div className="container-fluid main">
                    <h2>Grab a deal, avail now 20% off on any services you like</h2>
                </div>
            </div>


            <div className='slide-websites-container-horizontal'>
                <div className='slide-websites-cms'>
                    {websitePlatforms.map((platform, index) => (
                        <div key={index} className="platform">
                            <img src={platform.icon} alt={`${platform.name} Icon`} className="platform-icon" /> {/* WordPress icon */}
                            <span className="platform-name">{platform.name}</span>
                        </div>
                    ))}
                </div>
            </div>

            <div className='body-title'>
                <h1>CATEGORIES</h1>
            </div>
            {contentToShow} { }

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

export default Branding;