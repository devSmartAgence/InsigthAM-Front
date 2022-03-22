import { useState, useEffect } from "react";
import ReactScrollWheelHandler from "react-scroll-wheel-handler";
import useDeviceSize from "../components/hooks/useDevicesize";

import HomeSections from "../components/HomeSections.js";

export default function Home({ homeIntro, studies }) {
  const studiesNumber = 7;
  let [width, height] = useDeviceSize(); // Get window size
  const [panelScrollIndex, setPanelScrollIndex] = useState(0);
  const [scrollDirection, setScrollDirection] = useState(null);
  const [isScrolling, setIsScrolling] = useState(false);
  const [itemPosition, setItemPosition] = useState();
  const [position, setPosition] = useState("");
  const [viewportWidth, viewportHeight] = useDeviceSize();
  console.log("PANEL SCROLL INDEX ===>", panelScrollIndex);
  useEffect(() => {
    setItemPosition(0);
  }, [setItemPosition]);

  const handleSplitPanelControlClick = (i) => {
    if (i === panelScrollIndex) {
      null;
    } else if (i > panelScrollIndex) {
      setPanelScrollIndex(i);
      console.log("PANEL SCROLL INDEX ===>", panelScrollIndex);
      console.log("I ===>", i);
      console.log("OPERATION ===>", i - panelScrollIndex);
      setItemPosition((itemPosition - height + 110) * (i - panelScrollIndex));
    } else if (i < panelScrollIndex) {
      setPanelScrollIndex(i);
      console.log("PANEL SCROLL INDEX ===>", panelScrollIndex);
      console.log("I ===>", i);
      console.log("OPERATION ===>", Math.abs(panelScrollIndex - i));
      setItemPosition(
        (itemPosition + height - 110) * Math.abs(panelScrollIndex - i)
      );
    }
  };

  const handleScroll = (direction) => {
    setIsScrolling = true;
    if (
      direction === "ScrollDown" &&
      panelScrollIndex >= 0 &&
      panelScrollIndex < 6
    ) {
      setItemPosition(itemPosition - height + 110);
      setPanelScrollIndex((panelScrollIndex += 1));
      // setPosition("End");
    } else if (
      direction === "ScrollUp" &&
      panelScrollIndex > 0 &&
      panelScrollIndex <= 6
    ) {
      setItemPosition(itemPosition + height - 110);
      setPanelScrollIndex((panelScrollIndex -= 1));

      // setPosition("Start");
    }
  };

  return homeIntro ? (
    <>
      <ReactScrollWheelHandler
        upHandler={(e) => handleScroll("ScrollUp")}
        downHandler={(e) => handleScroll("ScrollDown")}
      >
        <div
          className={`w-screen ${
            viewportWidth > 992
              ? "h-[calc(100vh-110px)]"
              : "h-[calc(100vh-75px)]"
          } ${viewportWidth > 992 ? "mt-[110px]" : "mt-[75px]"} ${
            viewportWidth > 992 && "overflow-hidden"
          }`}
        >
          <HomeSections
            setItemPosition={setItemPosition}
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
    `${process.env.NEXT_PUBLIC_DB_HOST}/api/studies?populate[blocks][populate]=*&populate[cover]=*&filters[slug][$eq]=les-epargnants-et-l-investissement-responsable`
  );
  const studies = await resStudies.json();

  return { props: { homeIntro, studies } };
}
