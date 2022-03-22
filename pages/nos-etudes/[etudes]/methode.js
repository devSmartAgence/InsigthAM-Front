import delve from "dlv";

import { useState } from "react";
import { useRouter } from "next/router";
import ReactScrollWheelHandler from "react-scroll-wheel-handler";
import useDeviceSize from "../../../components/hooks/useDevicesize";

//UI components
import BackButton from "../../../components/ui/BackButton";
import PrimaryButton from "../../../components/ui/PrimaryButton";
import { themeBeautyfier } from "../../../utils/themeBeautyfier";

//Strapi tools for dynamics zones
import { getDataMethodeDependencies } from "../../../components/services/api";
import { redirectToHomepage, getDataMethode } from "../../../utils";
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
          viewportWidth > 992 ? "110px" : "110px"
        }] bg-beige flex flex-col items-center`}
      >
        <BreadCrumbModule
          modulePosition={modulePosition}
          style={"light"}
          arrPath={arrPath}
        />

        <div className="flex items-center justify-center h-[134px] relative w-full max-w-[1230px]">
          <div className="absolute left-0">
            <BackButton label={"Retour"} style="dark" />
          </div>
          <div className="flex flex-col items-center ">
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
            <h1 className="text-3xl font-sans text-deep-blue text-center leading-tight mb-[6%] md:text-4xl mb-16 ">
              {pageData.data[0].attributes.title}
            </h1>
            <p className="font-serif font-bold text-black text-md text-center mb-[7.5%] md:text-xl">
              {pageData.data[0].attributes.introduction}
            </p>
          </div>
          <div>{blocks && <BlockManager blocks={blocks} />}</div>
          {router.asPath ===
            "/nos-etudes/EtudesReferencementThematique/methode" && (
            <div className="mb-[40px]">
              <PrimaryButton
                style={"dark"}
                label={"Consulter toutes les études"}
                href={router.asPath.slice(0, -8)}
              />
            </div>
          )}
        </div>
        {/* <BottomNavigation /> */}
        <ContactForm title={"Contactez-nous"} />
      </div>
    </ReactScrollWheelHandler>
  );
  //
};
export async function getServerSideProps(context) {
  const { slug, locale } = getLocalizedParams(context.query.etude);

  try {
    const data = getDataMethode(context.query.etudes);
    const res = await fetch(delve(data, "data"));
    const json = await res.json();

    // if (!json) {
    //   return redirectToHomepage();
    // }

    const pageData = await getDataMethodeDependencies(json);
    return {
      props: { pageData },
    };
  } catch (error) {}
}

export default Universals;
