import { useState } from "react";
import ReactScrollWheelHandler from "react-scroll-wheel-handler";

import HomeSections from "../components/HomeSections";
import Layout from "../components/Layout";

export async function getStaticProps() {
  // get home-intro content from Strapi
  const resHome = await fetch(
    "http://localhost:1337/api/home-introduction?populate=*"
  );
  const homeIntro = await resHome.json();

  // get studies from Strapi
  const resStudies = await fetch(
    "http://localhost:1337/api/studies?populate=*"
  );
  const studies = await resStudies.json();
  return { props: { homeIntro, studies } };
}

export default function Home({ homeIntro, studies }) {
  const [scrollDirection, setScrollDirection] = useState(null);
  const [isScrolling, setIsScrolling] = useState(false);
  const [translateY, setTranslateY] = useState(false);
  const [position, setPosition] = useState("");
  console.log("TRANSLATE ====>", translateY);

  const handleScroll = (direction) => {
    setIsScrolling = true;
    setScrollDirection(direction);
    if (direction === "ScrollDown" && position === "") {
      setTranslateY(translateY - window.innerHeight + 110);
      console.log("TRANSLATE ====>", translateY);

      // setPosition("End");
    } else if (direction === "ScrollUp" && position === "") {
      setTranslateY(translateY + window.innerHeight - 110);
      console.log("TRANSLATE ====>", translateY);

      // setPosition("Start");
    }
  };

  return homeIntro ? (
    <ReactScrollWheelHandler
      upHandler={(e) => handleScroll("ScrollUp")}
      downHandler={(e) => handleScroll("ScrollDown")}
    >
      <Layout page={"Insight AM - Accueil"}>
        <div className="w-screen h-[calc(100vh-110px)] ">
          <HomeSections
            studies={studies}
            homeIntro={homeIntro}
            scrollDirection={scrollDirection}
            isScrolling={isScrolling}
            setIsScrolling={setIsScrolling}
            translateY={translateY}
            position={position}
          ></HomeSections>
        </div>
      </Layout>
    </ReactScrollWheelHandler>
  ) : (
    <p> ...Loading</p>
  );
}
