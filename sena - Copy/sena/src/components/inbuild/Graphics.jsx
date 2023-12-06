import React, { useState, useEffect } from 'react';
import './style.css';
import Header from "../Header";
import Footer from '../Footer';
import Minimalisticon from '../assets/Minimalist.png';
import Illustrationicon from '../assets/Illustration.png';
import WebsiteDesignicon from '../assets/WebsiteDesign.png';
import AInteriorDesignicon from '../assets/AInteriorDesign.png';
import Aiartisticon from '../assets/AIArtists.png';
import ImageEditingicon from '../assets/ImageEditing.png';
import TShirtsicon from '../assets/TShirts.png';
import Producticon from '../assets/Product.png';
import SocialMediaicon from '../assets/SocialMedia.png';
import './style.css';

const Graphics = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuActive, setMobileMenuActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuActive(!mobileMenuActive);
    document.body.classList.toggle('overflow-hidden');
  };

  const contentData = [
    {
      title: "Background Removal",
      description: "Remove backgrounds from images to make them stand out.",
      images: [
        "https://images.pexels.com/photos/18395823/pexels-photo-18395823.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/18395824/pexels-photo-18395824/free-photo-of-asdf.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        ,
      ],
      packages: [
        {
          name: "Basic",
          price: "$5.25",
          features: ["5 images", "", "Within an hour"],
        },
        {
          name: "Standard",
          price: "$10.50",
          features: ["10 images", "Commercial use", "Unlimited Revision",],
        },
        {
          name: "Premium",
          price: "$52.48",
          features: ["50 images", "Commercial use", "Unlimited Revision"],
        },
      ],
    },
    {
      title: "Thumbnails Design",
      description: "Create eye-catching thumbnails for your content.",
      images: [
        "https://images.pexels.com/photos/18395822/pexels-photo-18395822/free-photo-of-fg.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/18395821/pexels-photo-18395821/free-photo-of-hr.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/18395864/pexels-photo-18395864/free-photo-of-jh.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      ],
      packages: [
        {
          name: "Basic",
          price: "$5.25",
          features: ["1 thumbnail", "Custom designed images"],
        },
        {
          name: "Standard",
          price: "$10.50",
          features: ["1 thumbnail", "Custom designed images", "Image sourcing"],
        },
        {
          name: "Premium",
          price: "$15.75",
          features: ["3 thumbnail", "Custom designed images", "Image sourcing"],
        },
      ],
    },
    {
      title: "Book Cover Design",
      description: "Design captivating book covers for your publications.",
      images: [
        "https://images.pexels.com/photos/18395866/pexels-photo-18395866/free-photo-of-hjj.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/18395862/pexels-photo-18395862/free-photo-of-hjhj676.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",

      ],
      packages: [
        {
          name: "Basic",
          price: "$62.98",
          features: ["1 design concept", "Include source file", "3D mockup"],
        },
        {
          name: "Standard",
          price: "$83.97",
          features: ["1 design concept", "Back & spine designs", "Include source file", "3D mockup",],
        },
        {
          name: "Premium",
          price: "$125.95",
          features: ["1 design concept", "Back & spine designs", "Include source file", "3D mockup", "Include social media kit", "Audiobook cover (ACX)"],
        },
      ],
    },
    {
      title: "Children Illustrations",
      description: "Create beautiful illustrations for children's books and media.",
      images: [
        "https://images.pexels.com/photos/18395861/pexels-photo-18395861/free-photo-of-767rg.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/18395865/pexels-photo-18395865/free-photo-of-dsdf.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        ,
      ],
      packages: [
        {
          name: "Basic",
          price: "$5.25",
          features: ["1 character", "1 illustration", "Source file"],
        },
        {
          name: "Standard",
          price: "$10.50",
          features: ["1 character", "1 illustration", "Source file", "Background/scene", "Color illustration"],
        },
        {
          name: "Premium",
          price: "$26.24",
          features: ["3 character", "1 illustration", "Source file", "Background/scene", "Color illustration", ""],
        },
      ],
    },
    {
      title: "3D Modeling & Rendering",
      description: "Bring your ideas to life with 3D modeling and realistic rendering.",
      images: [
        "https://images.pexels.com/photos/18405046/pexels-photo-18405046/free-photo-of-asds.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/18405048/pexels-photo-18405048/free-photo-of-fgdsgg.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/18405047/pexels-photo-18405047/free-photo-of-gdfgd.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      ],
      packages: [
        {
          name: "Basic",
          price: "$31.49",
          features: ["3D modeling", "Include source file"],
        },
        {
          name: "Standard",
          price: "$52.48",
          features: ["3D modeling", "Include environment", "Include furniture and people", "Include source file", "Texturing & lighting"],
        },
        {
          name: "Premium",
          price: "$125.95",
          features: ["3D modeling", "Include environment", "Include furniture and people", "Include source file", "Texturing & lighting", "4 Revisions"],
        },
      ],
    },
    {
      title: "Label Design",
      description: "Design labels for your products or packaging.",
      images: [
        "https://images.pexels.com/photos/18405517/pexels-photo-18405517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/18405518/pexels-photo-18405518.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/18413850/pexels-photo-18413850.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      ],
      packages: [
        {
          name: "Basic",
          price: "$83.97",
          features: ["Files ready for print", "Include source file"],
        },
        {
          name: "Standard",
          price: "$146.94",
          features: ["Full product wrapping", "Files ready for print", "3D mockup", "Include source file"],
        },
        {
          name: "Premium",
          price: "$188.92",
          features: ["Full product wrapping", "Files ready for print", "3D mockup", "Dielines", "Include source file"],
        },
      ],
    },
    {
      title: "Poster Design",
      description: "Create eye-catching posters for various purposes.",
      images: [
        "https://images.pexels.com/photos/18413851/pexels-photo-18413851.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/18413852/pexels-photo-18413852.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/18413849/pexels-photo-18413849.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      ],
      packages: [
        {
          name: "Basic",
          price: "$10.50",
          features: ["Photo editing", "Social media design", "Files ready for print"],
        },
        {
          name: "Standard",
          price: "$41.98",
          features: ["Custom graphics", "Photo editing", "Social media design", "Files ready for print",],
        },
        {
          name: "Premium",
          price: "$62.98",
          features: ["Custom graphics", "Photo editing", "Social media design", "Files ready for print", "Include source file"],
        },
      ],
    },
    {
      title: "2/3D Animation",
      description: "Bring your animations to life with 2D and 3D animation services.",
      images: [
        "https://images.pexels.com/photos/18413853/pexels-photo-18413853.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/18413848/pexels-photo-18413848.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      ],
      packages: [
        {
          name: "Basic",
          price: "$262.39",
          features: ["60 seconds running time", "1 Best Selling Product", "2 characters", "Background/scenery included",],
        },
        {
          name: "Standard",
          price: "$524.77",
          features: ["120 seconds running time", "3 characters", "Background/scenery included", "Custom design",],
        },
        {
          name: "Premium",
          price: "$787.16",
          features: ["180 seconds running time +", "4 characters", "Background/scenery included", "Custom design", "Storyboard"],
        },
      ],
    },

  ];


  const websitePlatforms = [
    { name: 'Minimalist Logo', icon: Minimalisticon },
    { name: 'Illustration', icon: Illustrationicon },
    { name: 'Web Design', icon: WebsiteDesignicon },
    { name: 'Architecture & Interior', icon: AInteriorDesignicon },
    { name: 'Image Edit', icon: ImageEditingicon },
    { name: 'Social Media', icon: SocialMediaicon },
    { name: 'Ai Artist', icon: Aiartisticon },
    { name: 'T Shirt Design', icon: TShirtsicon },
    { name: 'Production and Industrial', icon: Producticon },
    // Add other platforms as needed...
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
      <div className="body-title" style={{ padding: '20px', zIndex: 1 }}>
        <h1>Explore Graphics & Design</h1>
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

export default Graphics;
