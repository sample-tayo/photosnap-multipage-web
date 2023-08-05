import ImageWrapper from "../components/ImgComp";
import HomeContent from "../components/HomeContent";
import { stories } from "../constants/constant";
import FeatureDetails from "../components/FeatureDetails";
import { featuredetails } from "../constants/constant";

function Home() {
  return (
    <div>
      <HomeContent />
      <div className="imageWrapper">
        {stories.slice(0, 4).map((story, index) => (
          <ImageWrapper
            key={index}
            title={story.title}
            author={story.author}
            backgroundImage={story.backgroundImage}
          />
        ))}
      </div>
      <div className="features-details-container">
        {featuredetails.slice(0, 3).map((details, index) => (
          <FeatureDetails
            key={index}
            title={details.title}
            text={details.text}
            iconSrc={details.iconSrc}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
