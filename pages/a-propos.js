import delve from "dlv";

import { useState } from "react";
import { useRouter } from "next/router";
import ReactScrollWheelHandler from "react-scroll-wheel-handler";

import Layout from "../components/Layout";

//Strapi tools for dynamics zones
import { getDataAboutDependencies } from "./services/api";
import { redirectToHomepage, getDataAbout } from "../utils";
import { getLocalizedParams } from "../utils/localize";
import BlockManager from "../components/shared/BlockManager";

import ContactForm from "../components/ui/Forms/ContactForm";
import BreadCrumModule from "../components/ui/BreadcrumbModule";

const Universals = ({ pageData }) => {
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
      <Layout page={"Insight AM - À propos"}>
        <div className="mt-[110px] bg-beige flex flex-col items-center">
          <BreadCrumModule
            modulePosition={modulePosition}
            style={"light"}
            path={""}
          />

          <div
            className="flex flex-col max-w-[1230px] px-[10%] bg-white pt-8 mt-[60px] md:pt-16 md:px-[14%]
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
    const data = getDataAbout(slug, locale);
    const res = await fetch(delve(data, "data"));
    const json = await res.json();
    console.log("JSON ====>", json);

    if (!json) {
      return redirectToHomepage();
    }

    const pageData = await getDataAboutDependencies(json);
    console.log("PAGE DATA 1 ====>", pageData);
    return {
      props: { pageData },
    };
  } catch (error) {}
}

export default Universals;
