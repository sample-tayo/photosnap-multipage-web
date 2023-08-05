import { BsArrowRight } from "react-icons/bs";
import PropTypes from "prop-types";
import "../styles/item.css";

export function Item({ item }) {
  const { title, text, arrowtext, imgSrc, style, bgColor, color } = item;

  const homeLeftStyle = {
    backgroundColor: bgColor,
    color: color,
  };

  const leftStyle = style ? { order: 2 } : {};
  const rightStyle = style ? { order: 1 } : {};

  return (
    <div className={`homeContentContainer ${style ? "reverse" : ""}`}>
      <div
        className="homeLeft"
        style={{ ...homeLeftStyle, ...(style ? leftStyle : {}) }}
      >
        <h4>{title}</h4>
        <p>{text}</p>
        <div className="arrowContainer">
          <p>
            <a href="">{arrowtext}</a>
          </p>
          <BsArrowRight />
        </div>
      </div>
      <div className="homeRight" style={style ? rightStyle : {}}>
        <img src={imgSrc} alt="" height="100%" width="100%" />
      </div>
    </div>
  );
}

Item.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    arrowtext: PropTypes.string.isRequired,
    imgSrc: PropTypes.string.isRequired,
    style: PropTypes.bool,
    bgColor: PropTypes.string,
    color: PropTypes.string,
  }).isRequired,
};
