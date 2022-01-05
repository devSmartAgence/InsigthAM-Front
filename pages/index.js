import { useState, useEffect } from "react";
import ReactScrollWheelHandler from "react-scroll-wheel-handler";
import { useWindowHeight } from "@react-hook/window-size";
import useDeviceSize from "../components/hooks/useDevicesize";

import ContactForm from "../components/ContactForm";
import HomeSections from "../components/HomeSections";
import Layout from "../components/Layout";

export async function getStaticProps() {
  // Get home-intro content from Strapi
  const resHome = await fetch(
    "http://localhost:1337/api/home-introduction?populate=*"
  );
  const homeIntro = await resHome.json();

  // Get studies from Strapi
  const resStudies = await fetch(
    "http://localhost:1337/api/studies?populate=*"
  );
  const studies = await resStudies.json();
  return { props: { homeIntro, studies } };
}

export default function Home({ homeIntro, studies }) {
  const [width, height] = useDeviceSize();
  console.log("ITEM HEIGHT ====>", height);
  const [scrollDirection, setScrollDirection] = useState(null);
  const [isScrolling, setIsScrolling] = useState(false);
  const [itemPosition, setItemPosition] = useState(0);
  const [position, setPosition] = useState("");
  console.log("ITEM POSITION ====>", itemPosition);

  const handleScroll = (direction) => {
    setIsScrolling = true;
    if (direction === "ScrollDown") {
      setItemPosition(itemPosition - height + 110);

      // setPosition("End");
    } else if (direction === "ScrollUp") {
      setItemPosition(itemPosition + height - 110);

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
            height={height}
            studies={studies}
            homeIntro={homeIntro}
            scrollDirection={scrollDirection}
            isScrolling={isScrolling}
            setIsScrolling={setIsScrolling}
            itemPosition={itemPosition}
            position={position}
          ></HomeSections>
        </div>
        <ContactForm />
      </Layout>
    </ReactScrollWheelHandler>
  ) : (
    <p> ...Loading</p>
  );
}
