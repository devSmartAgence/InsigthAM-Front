import { useState, useEffect } from "react";
import ReactScrollWheelHandler from "react-scroll-wheel-handler";
import { useWindowHeight } from "@react-hook/window-size";
import useDeviceSize from "../components/hooks/useDevicesize"; // Hook to get wondow sizes

import HomeSections from "../components/HomeSections";
import Layout from "../components/Layout";
import HomeSplitPanelControl from "../components/ui/HomeSplitPanelControl";

export async function getStaticProps() {
  // Get home-intro content from Strapi
  const resHome = await fetch(
    `${process.env.DB_HOST}/api/home-introduction?populate=*`
  );
  const homeIntro = await resHome.json();

  // Get studies from Strapi
  const resStudies = await fetch(
    `${process.env.DB_HOST}/api/studies?populate=*`
  );
  const studies = await resStudies.json();
  return { props: { homeIntro, studies } };
}

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
      console.log("i ===>", i);
      console.log("SCROLL INDEX ===>", panelScrollIndex);
    } else if (i > panelScrollIndex) {
      setItemPosition((itemPosition - height + 110) * (i - panelScrollIndex));
      setPanelScrollIndex((panelScrollIndex = i));
      console.log("i ===>", i);
      console.log("SCROLL INDEX ===>", panelScrollIndex);
    } else if (i < panelScrollIndex) {
      setItemPosition((itemPosition + height - 110) * (panelScrollIndex - i));
      setPanelScrollIndex((panelScrollIndex = i));
      console.log("i ===>", i);
      console.log("SCROLL INDEX ===>", panelScrollIndex);
    }
  };

  const handleScroll = (direction) => {
    setIsScrolling = true;
    if (direction === "ScrollDown" && panelScrollIndex < studiesNumber - 1) {
      setItemPosition(itemPosition - height + 110);
      setPanelScrollIndex((panelScrollIndex += 1));
      // console.log("Scroll Index ====>", panelScrollIndex);
      // setPosition("End");
      console.log("ITEM POSITION ====>", itemPosition);
    } else if (direction === "ScrollUp" && panelScrollIndex > 0) {
      setItemPosition(itemPosition + height - 110);
      setPanelScrollIndex((panelScrollIndex -= 1));
      // console.log("Scroll Index ====>", panelScrollIndex);
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
