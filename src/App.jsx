import "./index.css";
import ImageWrapper from "./components/ImgComp";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const stories = [
  {
    title: "The Mountains",
    author: "John Applessed",
    backgroundImage: "./src/assets/cityscapes-bb5e02cd.jpg",
  },
  {
    title: "The Mountains",
    author: "John Applessed",
    backgroundImage: "./src/assets/cityscapes-bb5e02cd.jpg",
  },
  {
    title: "The Mountains",
    author: "John Applessed",
    backgroundImage: "./src/assets/cityscapes-bb5e02cd.jpg",
  },
  {
    title: "The Mountains",
    author: "John Applessed",
    backgroundImage: "./src/assets/cityscapes-bb5e02cd.jpg",
  },
  {
    title: "The Mountains",
    author: "John Applessed",
    backgroundImage: "./src/assets/cityscapes-bb5e02cd.jpg",
  },
];

function App() {
  return (
    <>
      <Navbar />
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
      <Footer />
    </>
  );
}

export default App;
