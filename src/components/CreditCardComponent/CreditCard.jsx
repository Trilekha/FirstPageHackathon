import React from "react";
import "./style.css";

export const CreditCard = ({isSolid, logoImage, selectedColor, gradientStyle, divClassName}) => {
    return (
      <div className={`${divClassName}`}>
      <div className="overlap-5">
        <div className="group">
          <div style={ isSolid ? {background:selectedColor} : {background:gradientStyle}} className="overlap-group-3">
            <img className="logo-2" alt="Logo" src="/img/logo.png" />
            <img className="image" alt="Image" src="/img/image-2.png" />
            <img className="image-2" alt="Image" src="/img/image-4.png" />
          </div>
          <div className="text-wrapper-4">FRONT</div>
          <div className="text-wrapper-5">BACK</div>
        </div>
        <img className="partner-logo-2" alt="Partner logo" src={logoImage} style={{ maxWidth: '100px' }}/>
      </div>
    </div>      
    );
  };