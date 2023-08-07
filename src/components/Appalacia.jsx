import PropTypes from "prop-types";
import "../styles/Appalacia.css";

function Appalacia({ subheading, title, date, author, text }) {
  const isMobile = window.innerWidth <= 768;

  return (
    <div className="appalacia-container">
      <img
        src={
          isMobile
            ? "./assets/moon-of-appalacia-m.jpg"
            : "./assets/moon-of-appalacia.jpg"
        }
        alt="Background"
        className="appalacia-image"
        width="100%"
        height="100%"
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
