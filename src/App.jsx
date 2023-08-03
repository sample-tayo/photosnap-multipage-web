import "./index.css";
import ImageWrapper from "./components/ImgComp";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomeContent from "./components/HomeContent";
import { stories } from "./constants/constant";
import FeatureDetails from "./components/FeatureDetails";
import { featuredetails } from "./constants/constant";

function App() {
  const logoSrc = "./src/assets/logo.svg";

  return (
    <>
      <Navbar logoSrc={logoSrc} />
      <HomeContent />
      <div className="imageWrapper">
        {stories.map((story, index) => (
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

      <Footer logoSrc={logoSrc} />
    </>
  );
}

export default App;
