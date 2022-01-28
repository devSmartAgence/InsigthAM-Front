import delve from "dlv";

import { useState } from "react";
import { motion } from "framer-motion";
import ReactScrollWheelHandler from "react-scroll-wheel-handler";

import Layout from "../components/Layout"; //UI components
import BackButton from "../components/ui/BackButton";
import BottomNavigation from "../components/ui/BottomNavigation";
//Strapi tools for dynamics zones
import { getDataDependencies } from "./services/api";
import { redirectToHomepage, getData } from "../utils";
import { getLocalizedParams } from "../utils/localize";
import BlockManager from "../components/shared/BlockManager";

import ContactForm from "../components/ui/Forms/ContactForm";
import BreadCrumModule from "../components/ui/BreadcrumbModule";

const Universals = ({ pageData }) => {
  console.log("PAGE DATA 2 =====>", pageData);
  const blocks = delve(pageData, "data.attributes.blocks");
  console.log("BLOCKS ===>", blocks);
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
      <Layout page={"Insight AM - Accueil"}>
        <div className="mt-[110px] bg-beige flex flex-col items-center">
          <motion.div
            className="w-full fixed flex items-center max-w-[1230px] h-[60px] bg-beige z-10 top-0"
            animate={{ top: modulePosition }}
            transition={{ duration: 0.3, type: "ease" }}
          >
            <BreadCrumModule />
          </motion.div>

          <div className="flex items-center justify-center h-[134px] relative w-full max-w-[1230px]">
            <div className="absolute left-0">
              <BackButton label={"< Retour"} />
            </div>
            <div className="flex flex-col items-center ">
              <div className="font-sans text-deep-blue text-[13px] uppercase mb-[13px]">
                {pageData.data.attributes.heading}
              </div>
              <div className="w-[40px] h-[6px] bg-pink"></div>
            </div>
          </div>

          <div
            className="flex flex-col max-w-[1230px] px-[10%] bg-white pt-8 md:pt-16 md:px-[14%]
          "
          >
            <div>
              <h1 className="text-3xl font-sans text-deep-blue text-center leading-tight mb-[6%] md:text-4xl mb-16 ">
                {pageData.data.attributes.title}
              </h1>
              <p className="font-serif font-bold text-black text-md text-center mb-[7.5%] md:text-xl">
                {pageData.data.attributes.introduction}
              </p>
            </div>
            <div>{blocks && <BlockManager blocks={blocks} />}</div>
          </div>
          <BottomNavigation />
          <ContactForm />
        </div>
      </Layout>
    </ReactScrollWheelHandler>
  );
  //
};

export async function getServerSideProps(context) {
  const { slug, locale } = getLocalizedParams(context.query);

  try {
    const data = getData(slug, locale);
    const res = await fetch(delve(data, "data"));
    const json = await res.json();
    console.log("JSON ====>", json);

    if (!json) {
      return redirectToHomepage();
    }

    const pageData = await getDataDependencies(json);
    console.log("PAGE DATA 1 ====>", pageData);
    return {
      props: { pageData },
    };
  } catch (error) {}
}

export default Universals;
