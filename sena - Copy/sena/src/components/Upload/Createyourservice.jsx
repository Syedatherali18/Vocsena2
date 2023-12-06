import React, { useState } from 'react';
import './Upload.css';
import Profileimg from "../assets/profileimg.png";
import Select from 'react-select';

const CreateYourService = ({ onClose }) => {
  const [name, setName] = useState('');
  const [location, setLocation] = useState(null);
  const [profileImage, setProfileImage] = useState(null);
  const [serviceImages, setServiceImages] = useState([]);
  const [title, setTitle] = useState('');
  const [summary, setSummary] = useState('');
  const [servicePackages, setServicePackages] = useState([
    { name: '', price: '', points: '' },
    { name: '', price: '', points: '' },
    { name: '', price: '', points: '' },
  ]);

  const [step, setStep] = useState(1);

  const handleProfileImageChange = (e) => {
    const file = e.target.files[0];
    setProfileImage(file);
  };



  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSummaryChange = (e) => {
    setSummary(e.target.value);
  };

  const handlePackageChange = (e, index) => {
    const { name, value } = e.target;
    const updatedPackages = [...servicePackages];
    updatedPackages[index][name] = value;
    setServicePackages(updatedPackages);
  };

  const handleNext = () => {
    if (step === 1) {
      setStep(2);
    }
  };

  const handleBack = () => {
    if (step === 3) {
      setStep(2);
      setName('');
      setLocation(null);
      setProfileImage(null);
    } else if (step === 2) {
      setStep(1);
    }
  };
  const handleUploadImages = () => {
    setStep(3);
  };

  const handleRemoveImage = (index) => {
    const updatedServiceImages = [...serviceImages];
    updatedServiceImages.splice(index, 1);
    setServiceImages(updatedServiceImages);
  };

  const MAX_WIDTH = 300;
  const MAX_HEIGHT = 200;

  const handleGigImagesChange = (e) => {
    const files = Array.from(e.target.files);
    const validImages = files.filter((file) => {
      return new Promise((resolve) => {
        const image = new Image();
        image.src = URL.createObjectURL(file);
        image.onload = () => {
          if (image.width === MAX_WIDTH && image.height === MAX_HEIGHT) {
            resolve(true);
          } else {
            resolve(false);
            alert(`Image must be exactly ${MAX_WIDTH}x${MAX_HEIGHT} pixels`);
          }
        };
      });
    });

    setServiceImages(validImages);
  };

  const countries = [
    { value: 'al', label: 'Albania' },
    { value: 'am', label: 'Armenia' },
    { value: 'at', label: 'Austria' },
  ];

  return (
    <div className="CreateYourServiceOverlay">
      <div className="CreateYourServiceModal">
        <div className="create-service-header">
          <h2 className="create-service-title">Create Your Service</h2>
          <button className="close-button" onClick={onClose}>
            &times;
          </button>
        </div>
        {step === 1 && (
          <div>
            <input
              type="text"
              className="title-input"
              placeholder="Title"
              value={title}
              onChange={handleTitleChange}
            />
            <textarea
              placeholder="Summary"
              value={summary}
              onChange={handleSummaryChange}
              className="summary-input"
            ></textarea>
            <div className="service-packages">
              {servicePackages.map((pkg, index) => (
                <div key={index} className="package">
                  <input
                    type="text"
                    placeholder="Package Name"
                    name="name"
                    value={pkg.name}
                    onChange={(e) => handlePackageChange(e, index)}
                    className="package-name"
                  />
                  <input
                    type="text"
                    placeholder="Price"
                    name="price"
                    value={pkg.price}
                    onChange={(e) => handlePackageChange(e, index)}
                    className="package-price"
                  />
                </div>
              ))}
            </div>
            <div className="button-submit">
              <button className="btn-upload" onClick={handleNext}>
                Next
              </button>
            </div>
          </div>
        )}
        {step === 2 && (
          <div className="service-imgs">
            <h3>Upload Your Service Images</h3>
            <div className="add-icon-container">
              <label htmlFor="file-upload" className="add-icon">
                <span className="plus-icon">+</span>
                <input
                  type="file"
                  id="file-upload"
                  accept="image/*"
                  multiple
                  className="service-image-input"
                  onChange={handleGigImagesChange}
                  style={{ display: 'none' }}
                />
              </label>
            </div>
            <div className="image-container">
              <div className="uploaded-images">
                {serviceImages.map((image, index) => (
                  <div key={index} className="image-preview">
                    <img
                      src={URL.createObjectURL(image)}
                      alt={`Service Image ${index + 1}`}
                      className="service-image">
                    </img>
                    <button
                      className="remove-image"
                      onClick={() => handleRemoveImage(index)}
                      style={{
                        fontSize: '40px',
                        cursor: 'pointer',
                        color: 'white',
                        backgroundColor: 'transparent',
                        border: 'none',
                      }}
                    >
                      &#215;
                    </button>
                  </div>
                ))}
              </div>
            </div>
            <div className="button-container">
              <button className="btn-upload" onClick={handleBack}>
                Back
              </button>
              <button className="btn-upload" onClick={handleUploadImages}>
                Next
              </button>
            </div>
          </div>
        )}
        {step === 3 && (
          <div>
            <input
              type="text"
              className="name-input"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <Select
              options={countries}
              value={location}
              onChange={(selectedOption) => setLocation(selectedOption)}
              placeholder="Your Country"
            />
            <div className="profile-icon">
              <label className="profile-image-label">
                <input
                  type="file"
                  onChange={handleProfileImageChange}
                  accept="image/*"
                  className="profile-image-input"
                />
                {profileImage ? (
                  <img
                    src={URL.createObjectURL(profileImage)}
                    alt="Profile"
                    className="profile-image"
                  />
                ) : (
                  <img src={Profileimg} alt="Profile" className="profile-image" />
                )}
              </label>
            </div>
            <div className="button-container">
              <button className="btn-upload" onClick={handleBack}>
                Back
              </button>
              <button className="btn-upload" onClick={handleUploadImages}>
                Done
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CreateYourService;