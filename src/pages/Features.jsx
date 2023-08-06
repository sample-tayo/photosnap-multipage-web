import { Item } from "../components/Item";
import { homeContent } from "../constants/constant";
import { featuredetails } from "../constants/constant";
import FeatureDetails from "../components/FeatureDetails";
import BetaInvite from "../components/BetaInvite";

function Features() {
  return (
    <div>
      <Item key={3} item={homeContent[3]} />
      <div className="features-details-container">
        {featuredetails.map((details, index) => (
          <FeatureDetails
            key={index}
            title={details.title}
            text={details.text}
            iconSrc={details.iconSrc}
          />
        ))}
      </div>
      <BetaInvite />
    </div>
  );
}

export default Features;
