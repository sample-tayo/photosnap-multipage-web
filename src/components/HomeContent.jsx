import { Item } from "./Item";
import { homeContent } from "../constants/constant";

function HomeContent() {
  return (
    <>
      {homeContent.map((item, index) => (
        <Item key={index} item={item} />
      ))}
    </>
  );
}

export default HomeContent;
