import Appalacia from "../components/Appalacia";
import { appalacia } from "../constants/constant";
import { stories } from "../constants/constant";
import ImageWrapper from "../components/ImgComp";

function Stories() {
  return (
    <div>
      <Appalacia
        subheading={appalacia.subHeading}
        title={appalacia.title}
        date={appalacia.date}
        author={appalacia.author}
        text={appalacia.text}
      />
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
    </div>
  );
}

export default Stories;
