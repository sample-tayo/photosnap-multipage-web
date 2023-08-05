import "./index.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Features from "./pages/Features";
import Stories from "./pages/Stories";
import Home from "./pages/Home";

function App() {
  const logoSrc = "./assets/logo.svg";

  return (
    <div>
      <BrowserRouter>
        <Navbar logoSrc={logoSrc} />
        <Routes>
          <Route index element={<Home />} />
          <Route path="Stories" element={<Stories />} />
          <Route path="features" element={<Features />} />
        </Routes>
        <Footer logoSrc={logoSrc} />
      </BrowserRouter>
    </div>
  );
}

export default App;

{
  /* <Navbar logoSrc={logoSrc} />
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

 */
}
