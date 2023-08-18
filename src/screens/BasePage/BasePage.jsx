import React, { useState } from "react";
import { ChromePicker } from 'react-color';
import { StyleRadio } from "../../components/StyleRadio";
import { StyleRadioWrapper } from "../../components/StyleRadioWrapper";
import "./style.css";

export const BasePage = () => {
  const [showPicker, setShowPicker] = useState(false);
  const [selectedColor, setSelectedColor] = useState('#00aeef');

  const handleColorChange = (color) => {
    setSelectedColor(color.hex);
  };

  const togglePicker = () => {
    setShowPicker(!showPicker);
  };

  const closePicker = () => {
    setShowPicker(false);
  };

  return (
    <div className="base-page">
      <div className="overlap-wrapper">
        <div className="overlap">
          <div className="rectangle" />
          <div className="skeleton" />
          <div className="steps-circle-things">
            <div className="overlap-2">
              <div className="circle">
                <div className="overlap-group-2">
                  <img className="line" alt="Line" src="/img/line-1.svg" />
                  <div className="ellipse-2" />
                  <div className="text-wrapper">1</div>
                </div>
              </div>
              <div className="overlap-group-wrapper">
                <div className="overlap-3">
                  <img className="img" alt="Line" src="/img/line-2.svg" />
                  <div className="ellipse-3" />
                  <div className="text-wrapper-2">2</div>
                </div>
              </div>
              <div className="circle-2">
                <div className="element-wrapper">
                  <img className="element" alt="Element" src="/img/3.png" />
                </div>
              </div>
            </div>
          </div>
          <footer className="footer">
            <div className="element-barclays-bank-wrapper">
              <img className="element-barclays-bank" alt="Element barclays bank" src="/img/2023-barclays-bank.png" />
            </div>
          </footer>
          <div className="nav-bar">
            <img className="logo" alt="Logo" src="/img/logo-1.png" />
          </div>
          <div className="cardart-design">
            <div className="primary-logo-header">Primary Logo</div>
            <div className="overlap-4">
              <img className="image-upload" alt="Image upload" src="/img/imageupload.png" />
              <img className="partner-logo" alt="Partner logo" src="/img/partnerlogo.png" />
            </div>
            <div className="secondary-color">Secondary color</div>
            <div className="overall-branding">Overall Branding</div>
            <div className="primary-color-option">Primary color</div>
            <p className="primary-color-value">
              <span className="span">#</span>
              <span className="text-wrapper-3">{selectedColor.slice(1)}</span>
            </p>
            <p className="p">
              <span className="span">#</span>
              <span className="text-wrapper-3">FFFFFF</span>
            </p>
            <div className="solid-option">Solid</div>
            <div className="gradient-option">Gradient</div>
            <div className="style-header">Style</div>
            <button style={{backgroundColor: selectedColor}} onClick={() => {
              setShowPicker(true)
              
            }}  className="primary-color" />
            {showPicker && (
              <div style={{ position: 'absolute', zIndex: 2 }}>
                <ChromePicker color={selectedColor} onChange={handleColorChange} />
                <div>
                  <button onClick={closePicker}>Close Color Picker</button>
                </div>
              </div>
            )}
            <img className="primary-color-2" alt="Primary color" src="/img/secondarycolorplaceholder.svg" />
            <div className="secondary-color-2" />
            <img className="secondary-color-3" alt="Secondary color" src="/img/secondarycolorplaceholder.svg" />
            <StyleRadio className="style-radio-2" />
            <StyleRadioWrapper className="style-radio-instance" />
            <div className="plastic-option">Plastic</div>
            <div className="metal-option">Metal</div>
            <div className="card-material-header">Card Material</div>
            <StyleRadio className="card-material-radio" />
            <StyleRadioWrapper className="style-radio-2-instance" />
          </div>
          <div className="div-wrapper">
            <div className="overlap-5">
              <div className="group">
                <div style={{backgroundColor:selectedColor}} className="overlap-group-3">
                  <img className="logo-2" alt="Logo" src="/img/logo.png" />
                  <img className="image" alt="Image" src="/img/image-2.png" />
                  <img className="image-2" alt="Image" src="/img/image-4.png" />
                </div>
                <div className="text-wrapper-4">FRONT</div>
                <div className="text-wrapper-5">BACK</div>
              </div>
              <img className="partner-logo-2" alt="Partner logo" src="/img/partnerlogo.png" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
