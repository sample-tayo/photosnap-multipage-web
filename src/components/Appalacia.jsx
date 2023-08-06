import PropTypes from "prop-types";
import "../styles/Appalacia.css";

function Appalacia({ subheading, title, date, author, text }) {
  return (
    <div className="appalacia-container">
      <img
        src="./assets/moon-of-appalacia.jpg"
        alt="Background"
        className="appalacia-image"
      />
      <div className="overlay-text">
        <h6>{subheading}</h6>
        <h1>{title} </h1>
        <p>
          {date} <span className="overlay-text-author">{author}</span>
        </p>
        <p>{text}</p>
      </div>
    </div>
  );
}

Appalacia.propTypes = {
  subheading: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Appalacia;
