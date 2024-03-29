import delve from "dlv";

import { useState } from "react";
import { useRouter } from "next/router";
import useDeviceSize from "../../../components/hooks/useDevicesize";

import ReactScrollWheelHandler from "react-scroll-wheel-handler";

//UI components
import BackButton from "../../../components/ui/BackButton";
// import BottomNavigation from "../../../components/ui/BottomNavigation";

import { themeBeautyfier } from "../../../utils/themeBeautyfier";

//Strapi tools for dynamics zones
import { getDataStudyDependencies } from "../../../components/services/api";
import { redirectToHomepage, getDataStudy } from "../../../utils";
import { getLocalizedParams } from "../../../utils/localize";
import BlockManager from "../../../components/shared/BlockManager";

import ContactForm from "../../../components/ui/Forms/ContactForm";
import BreadCrumbModule from "../../../components/ui/BreadcrumbModule";

const Universals = ({ pageData }) => {
  const [viewportWidth, viewportHeight] = useDeviceSize();
  const router = useRouter();
  let arrPath = router.asPath.split("/");
  const blocks = delve(pageData.data[0], "attributes.blocks");
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

        <div className="flex items-center justify-center h-[134px] relative w-full max-w-[1230px] mb-4 sm:mb-8">
          <div className="absolute md:left-[30px] top-8 md:top-auto">
            <BackButton label={"Retour"} style="dark" />
          </div>
          <div className="flex flex-col items-center mt-10 sm:mt-0">
            <div className="font-sans text-deep-blue text-[13px] uppercase mb-[13px]">
              {themeBeautyfier(pageData.data[0].attributes.theme)}
            </div>
            <div className="w-[40px] h-[6px] bg-pink"></div>
          </div>
        </div>

        <div
          className="flex flex-col max-w-[1230px] px-[10%] bg-white pt-8 md:pt-16
          "
        >
          <div>
            <h1 className="text-3xl font-sans text-deep-blue text-center leading-tight mb-[6%] md:text-4xl ">
              {pageData.data[0].attributes.title}
            </h1>
            <p className="font-serif font-bold text-black text-md text-center mb-[7.5%] md:text-xl">
              {pageData.data[0].attributes.introduction}
            </p>
          </div>
          <div>{blocks && <BlockManager blocks={blocks} />}</div>
        </div>
        {/* <BottomNavigation /> */}
        <ContactForm
          router={router.asPath}
          title={
            router.asPath !==
            "/nos-etudes/BarometresInstitutionnels/les-societes-de-gestion-vues-par-les-conseillers-en-gestion-de-patrimoine"
              ? "Demander l'étude complète"
              : "Commander l'étude"
          }
        />
      </div>
    </ReactScrollWheelHandler>
  );
  //
};

export async function getServerSideProps(context) {
  const { slug, locale } = getLocalizedParams(context.query);

  try {
    const data = getDataStudy(slug, locale);
    const res = await fetch(delve(data, "data"));
    const json = await res.json();

    // if (!json) {
    //   return redirectToHomepage();
    // }

    const pageData = await getDataStudyDependencies(json);
    return {
      props: { pageData },
    };
  } catch (error) {}
}

export default Universals;
