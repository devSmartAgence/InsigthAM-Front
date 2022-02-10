import { useState } from "react";
import ReactScrollWheelHandler from "react-scroll-wheel-handler.js";
import useDeviceSize from "../components/hooks/useDevicesize.js";

import HomeSections from "../components/HomeSections.js";
import Layout from "../components/Layout.js";

export default function Home({ homeIntro, studies }) {
  const studiesNumber = studies.data.length;
  let [width, height] = useDeviceSize(); // Get window size
  const [panelScrollIndex, setPanelScrollIndex] = useState(0);
  const [scrollDirection, setScrollDirection] = useState(null);
  const [isScrolling, setIsScrolling] = useState(false);
  const [itemPosition, setItemPosition] = useState(0);
  const [position, setPosition] = useState("");

  const handleSplitPanelControlClick = (i) => {
    if (i === panelScrollIndex) {
    } else if (i > panelScrollIndex) {
      setItemPosition((itemPosition - height + 110) * (i - panelScrollIndex));
      setPanelScrollIndex((panelScrollIndex = i));
    } else if (i < panelScrollIndex) {
      setItemPosition((itemPosition + height - 110) * (panelScrollIndex - i));
      setPanelScrollIndex((panelScrollIndex = i));
    }
  };

  const handleScroll = (direction) => {
    setIsScrolling = true;
    if (direction === "ScrollDown" && panelScrollIndex < studiesNumber - 1) {
      setItemPosition(itemPosition - height + 110);
      setPanelScrollIndex((panelScrollIndex += 1));
      // setPosition("End");
      console.log("ITEM POSITION ====>", itemPosition);
    } else if (direction === "ScrollUp" && panelScrollIndex > 0) {
      setItemPosition(itemPosition + height - 110);
      setPanelScrollIndex((panelScrollIndex -= 1));
      console.log("ITEM POSITION ====>", itemPosition);

      // setPosition("Start");
    }
  };

  return homeIntro ? (
    <>
      <ReactScrollWheelHandler
        upHandler={(e) => handleScroll("ScrollUp")}
        downHandler={(e) => handleScroll("ScrollDown")}
      >
        <Layout page={"Insight AM - Accueil"}>
          <div className="w-screen h-[calc(100vh-110px)] mt-[110px] overflow-hidden ">
            <HomeSections
              panelScrollIndex={panelScrollIndex}
              studiesNumber={studiesNumber}
              height={height}
              studies={studies}
              homeIntro={homeIntro}
              scrollDirection={scrollDirection}
              isScrolling={isScrolling}
              setIsScrolling={setIsScrolling}
              itemPosition={itemPosition}
              position={position}
              handleSplitPanelControlClick={handleSplitPanelControlClick}
            />
          </div>
        </Layout>
      </ReactScrollWheelHandler>
    </>
  ) : (
    <p> ...Loading</p>
  );
}

export async function getStaticProps() {
  // Get home-intro content from Strapi
  const resHome = await fetch(
    `${process.env.NEXT_PUBLIC_DB_HOST}/api/home-introduction?populate=*`
  );
  const homeIntro = await resHome.json();

  // Get studies from Strapi
  const resStudies = await fetch(
    `${process.env.NEXT_PUBLIC_DB_HOST}/api/studies?populate=*`
  );
  const studies = await resStudies.json();

  return { props: { homeIntro, studies } };
}
