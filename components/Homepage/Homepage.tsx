// import "./Homepage.css";
import Container from "react-bootstrap/Container";

import TopMobileSearch from "./TopMobileSearch";
import TopCategory from "./TopCategory";
import VideoBlock from "./VideoBlock";
import PopularChannels from "./PopularChannels";

import FatFooter from "../Footer/FatFooter";
import ContentWrapper from "../Atomics/ContentWrapper/ContentWrapper";

const Homepage = () => {

  const handleClick =():void=>{
console.log("Oni chan clicked")
  }
  return (
    <>
      <ContentWrapper>
        <Container fluid className="pb-0">
          {/* <TopMobileSearch /> */}
          <TopCategory />
          <hr />         
          {/* <h2 onClick={handleClick}>Click me oni chan</h2> */}
          <VideoBlock />
          <hr className="mt-0" />
          <PopularChannels />
        </Container>

        <FatFooter />
      </ContentWrapper>
    </>
  );
};

export default Homepage;
