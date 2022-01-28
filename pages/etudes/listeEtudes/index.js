import { useState } from "react";
import { motion } from "framer-motion";
import Layout from "../../../components/Layout";
import Button from "../../../components/ui/Button";
import BackButton from "../../../components/ui/BackButton";
import StudyPreview from "../../../components/StudyPreview";
import GridPattern from "../../../components/ui/GridPattern";
import BreadcrumbModule from "../../../components/ui/BreadcrumbModule";
import BreadCrumModule from "../../../components/ui/BreadcrumbModule";
import ReactScrollWheelHandler from "react-scroll-wheel-handler";
export default function Apropos() {
  const [modulePosition, setModulePosition] = useState(0);

  let handleScroll = (modulePosition) => {
    if (modulePosition === "Up") {
      setModulePosition(0);
    } else {
      setModulePosition(110);
    }
  };
  return (
    <ReactScrollWheelHandler
      upHandler={(e) => handleScroll("Up")}
      downHandler={(e) => handleScroll("Down")}
    >
      <Layout>
        <div className="flex flex-col items-center bg-deep-blue w-full">
          <BreadCrumModule modulePosition={modulePosition} style={"dark"} />

          <div className="fixed z-50 right-0 z-0 w-1/2 h-4/5 top-[110px]">
            <GridPattern
              color={"deep-blue"}
              cover={
                "/uploads/large_egor_vikhrev_Z_5i0_R_Vukd_U_unsplash_8755a365d8.png"
              }
            />
          </div>
          <div className="flex flex-col items-center mx-[30px] relative md:items-start">
            <div className="mt-[155px] items-center flex flex-col max-w-[580px] mb-[60px] md:items-start">
              <BackButton label={"< Retour"} style="dark"></BackButton>

              <h1 className="text-white font-sans text-[40px] text-center mb-[15px] mt-[30px] md:text-left">
                Etudes référencement thématique
              </h1>
              <Button type="primary" label={"Méthode déployée"}></Button>
            </div>
            <div className="relative flex flex-wrap justify-center flex-row gap-8 md:flex-nowrap">
              <div>
                <div>
                  <StudyPreview />
                </div>
                <div>
                  <StudyPreview />
                </div>
                <div>
                  <StudyPreview />
                </div>
              </div>
              <div className="mt-[-30px] md:mt-[280px]">
                <div>
                  <StudyPreview />
                </div>
                <div>
                  <StudyPreview />
                </div>
                <div>
                  <StudyPreview />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </ReactScrollWheelHandler>
  );
}

export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const res = await fetch(
    "http://localhost:1337/api/studies?filters[theme][$eq]=EtudesReferencementThematique"
  );
  const studies = await res.json();
  console.log("STUDIES 3 ======>", studies);

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      studies,
    },
  };
}
