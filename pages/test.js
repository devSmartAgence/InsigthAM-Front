import { useState } from "react";
import ReactScrollWheelHandler from "react-scroll-wheel-handler";

import HomeSections from "../components/HomeSections";
import Layout from "../components/Layout";
import ContentPanel from "../components/ContentPanel";
import CoverPanel from "../components/CoverPanel";

export async function getStaticProps() {
  let itemsCount = [];
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

  // Making array with number of item
  for (let i = 0; i < studies.data.length; i++) {
    itemsCount.push(i + 1);
  }
  return { props: { homeIntro, studies, itemsCount } };
}

export default function Test({ homeIntro, studies, itemsCount }) {
  const [scrollDirection, setScrollDirection] = useState();
  const [isScrolling, setIsScrolling] = useState(false);
  const [translateY, setTranslateY] = useState("666");
  const [position, setPosition] = useState("");
  const handleScroll = (direction) => {
    setIsScrolling = true;
    setScrollDirection(direction);
    if (direction === "ScrollDown" && position === "") {
      setTranslateY(translateY - window.innerHeight + 110);
      // setPosition("End");
    } else if (direction === "ScrollUp" && position === "") {
      setTranslateY(translateY + window.innerHeight - 110);
      // setPosition("Start");
    }
  };

  return (
    <ReactScrollWheelHandler
      upHandler={(e) => handleScroll("ScrollUp")}
      downHandler={(e) => handleScroll("ScrollDown")}
    >
      <Layout page={"Insight AM - Accueil"}>
        <div className="w-screen h-[calc(100vh-110px)] overflow-hidden">
          <div className="flex flex-col h-[calc(100vh-110px)] w-1/2">
            {studies.data.map((study, index) => (
              <ContentPanel
                key={study.id}
                heading={study.attributes.heading}
                theme={study.attributes.theme}
                title={study.attributes.title}
                description={study.attributes.description}
                reversed={study.id % 2 === 0 ? true : false}
                index={study.id}
                itemsCount={itemsCount}
              />
            ))}
          </div>
          <div className="flex flex-col h-[calc(100vh-110px)] w-1/2">
            {studies.data.map((study, index) => (
              <CoverPanel index={study.id} />
            ))}
          </div>
        </div>
      </Layout>
    </ReactScrollWheelHandler>
  );
}
