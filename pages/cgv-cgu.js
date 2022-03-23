import delve from "dlv";

import { useState } from "react";
import { useRouter } from "next/router";
import useDeviceSize from "../components/hooks/useDevicesize";

import ReactScrollWheelHandler from "react-scroll-wheel-handler";

//Strapi tools for dynamics zones
import { getDataCGVDependencies } from "../components/services/api";
import { redirectToHomepage, getDataCGV } from "../utils";
import { getLocalizedParams } from "../utils/localize";
import BlockManager from "../components/shared/BlockManager";

import ContactForm from "../components/ui/Forms/ContactForm";
import BreadCrumbModule from "../components/ui/BreadcrumbModule";

const Universals = ({ pageData }) => {
  const [viewportWidth, viewportHeight] = useDeviceSize();
  const router = useRouter();
  let arrPath = router.asPath.split("/");
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
            <h1
              className={
                "flex justify-center overflow-hidden text-3xl font-sans text-deep-blue text-center leading-tight mb-[6%] md:text-4xl mb-16 "
              }
            >
              {pageData.data.attributes.title}
            </h1>

            <p className="font-serif font-bold text-black text-md text-center mb-[7.5%] md:text-xl">
              {pageData.data.attributes.introduction}
            </p>
          </div>
          <div>{blocks && <BlockManager blocks={blocks} />}</div>
        </div>

        <ContactForm title={"Nous contacter"} />
      </div>
    </ReactScrollWheelHandler>
  );
};

export async function getServerSideProps(context) {
  const { slug } = getLocalizedParams(context.query);

  try {
    const data = getDataCGV(slug);
    const res = await fetch(delve(data, "data"));
    const json = await res.json();

    // if (!json) {
    //   return redirectToHomepage();
    // }

    const pageData = await getDataCGVDependencies(json);
    return {
      props: { pageData },
    };
  } catch (error) {}
}

export default Universals;
