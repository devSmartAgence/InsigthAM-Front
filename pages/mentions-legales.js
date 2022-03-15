import delve from "dlv";

import { useState } from "react";

import ReactScrollWheelHandler from "react-scroll-wheel-handler";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import useDeviceSize from "../components/hooks/useDevicesize";

//Strapi tools for dynamics zones
import { getDataLegalDependencies } from "../components/services/api";
import { redirectToHomepage, getDataLegal } from "../utils";
import { getLocalizedParams } from "../utils/localize";
import BlockManager from "../components/shared/BlockManager";

import ContactForm from "../components/ui/Forms/ContactForm";
import BreadCrumbModule from "../components/ui/BreadcrumbModule";
import AnimatedH1Type from "../components/ui/AnimatedH1Type";

const Universals = ({ pageData }) => {
  const [viewportWidth, viewportHeight] = useDeviceSize();
  const router = useRouter();
  let arrPath = [router.asPath];
  const blocks = delve(pageData, "data.attributes.blocks");
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
      <div
        className={`mt-[${
          viewportWidth > 992 ? "110px" : "75px"
        }] bg-beige flex flex-col items-center`}
      >
        <BreadCrumbModule
          modulePosition={modulePosition}
          style={"light"}
          arrPath={arrPath}
        />

        <div
          className="flex flex-col max-w-[1230px] px-[10%] bg-white pt-8 mt-[60px] md:pt-16 md:px-[14%]
          "
        >
          <div>
            <AnimatedH1Type
              title={pageData.data.attributes.title}
              className={
                "flex justify-center overflow-hidden text-3xl font-sans text-deep-blue text-center leading-tight mb-[6%] md:text-4xl mb-16 "
              }
            />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: { delay: 0.2, duration: 1 },
              }}
            >
              <p className="font-serif font-bold text-black text-md text-center mb-[7.5%] md:text-xl">
                {pageData.data.attributes.introduction}
              </p>

              <div>{blocks && <BlockManager blocks={blocks} />}</div>
            </motion.div>
          </div>
        </div>
        <ContactForm title={"Nous contacter"} />
      </div>
    </ReactScrollWheelHandler>
  );
};

export async function getServerSideProps(context) {
  const { slug } = getLocalizedParams(context.query);

  try {
    const data = getDataLegal(slug);
    const res = await fetch(delve(data, "data"));
    const json = await res.json();

    // if (!json) {
    //   return redirectToHomepage();
    // }

    const pageData = await getDataLegalDependencies(json);
    return {
      props: { pageData },
    };
  } catch (error) {}
}

export default Universals;
