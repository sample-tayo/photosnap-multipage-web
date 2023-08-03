import PropTypes from "prop-types";
// import "../styles/featuredetails.css";

function FeatureDetails({ title, iconSrc, text }) {
  return (
    <div className="featureDetails">
      <div className="icon">
        <img src={iconSrc} alt="" width="100%" height="72px" />
      </div>

      <h3>{title}</h3>

      <p>{text}</p>
    </div>
  );
}

FeatureDetails.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  iconSrc: PropTypes.string.isRequired,
};

export default FeatureDetails;
