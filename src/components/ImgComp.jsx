// import React from "react";
import PropTypes from "prop-types";
import { BsArrowRight } from "react-icons/bs";

function ImageWrapper({ title, author, iconColor, backgroundImage }) {
  const imageStyle = {
    backgroundImage: `url("${backgroundImage}")`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <div className="image-container" style={imageStyle}>
      <div className="image-text">
        <p style={{ fontSize: "1rem", fontWeight: "bold" }}>{title}</p>
        <p style={{ fontSize: ".8rem", paddingTop: "1rem" }}>by {author}</p>

        <div className="horizontal-line"></div>
        <div className="readMore">
          <p>Read Story</p>
          <BsArrowRight className="arrow-icon" color={iconColor} />
        </div>
      </div>
      <div className="overlay"></div>
    </div>
  );
}

ImageWrapper.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  iconColor: PropTypes.string.isRequired,
  backgroundImage: PropTypes.any.isRequired,
};

export default ImageWrapper;
