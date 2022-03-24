import { useState } from "react";
import { useRouter } from "next/router";
import useDeviceSize from "../../../components/hooks/useDevicesize";
import { motion } from "framer-motion";
import PrimaryButton from "../../../components/ui/PrimaryButton";
import BackButton from "../../../components/ui/BackButton";
import StudyPreview from "../../../components/StudyPreview";
import GridPattern from "../../../components/ui/GridPattern";
import ReactScrollWheelHandler from "react-scroll-wheel-handler";
import { themeBeautyfier } from "../../../utils/themeBeautyfier";

export default function Etudes({ studies }) {
  const [viewportWidth, viewportHeight] = useDeviceSize();
  const router = useRouter();
  let arrPath = router.asPath.split("/");
  let theme = studies.data[0].attributes.theme;
  const [modulePosition, setModulePosition] = useState(0);
  let handleScroll = (modulePosition) => {
    if (modulePosition === "Up") {
      setModulePosition(0);
    } else {
      setModulePosition(110);
    }
  };

  let setCover = (theme) => {
    let cover;
    switch (theme) {
      case "EtudesReferencementThematique":
        cover =
          "https://res.cloudinary.com/smartagence/image/upload/v1645540632/large_insight_clock_f04988a9e3.jpg";
        break;
      case "BarometresInstitutionnels":
        cover =
          "https://res.cloudinary.com/smartagence/image/upload/v1645540632/large_insight_counter_76379539c2.jpg";
        break;
      case "EtudeCiblesClientele":
        cover =
          "https://res.cloudinary.com/smartagence/image/upload/v1645540632/large_insight_lighthouse_3d58e85f43.jpg";
        break;
      case "EtudesTestingProduit":
        cover =
          "https://res.cloudinary.com/smartagence/image/upload/v1645540632/large_insight_Data_67fc3db76f.jpg";
        break;
      case "EtudesNotorietePositionnement":
        cover =
          "https://res.cloudinary.com/smartagence/image/upload/v1645540632/large_insight_glass_Ball_497bcd04d2.jpg";
        break;

      default:
        cover =
          "https://res.cloudinary.com/smartagence/image/upload/v1645710269/iniight_placeholder_qne20w.png";
    }
    return cover;
  };
  return (
    <ReactScrollWheelHandler
      upHandler={(e) => handleScroll("Up")}
      downHandler={(e) => handleScroll("Down")}
    >
      <div className="flex flex-col items-center bg-deep-blue w-full">
        {/* <BreadCrumbModule
          modulePosition={modulePosition}
          style={"dark"}
          arrPath={arrPath}
        /> */}

        <div
          className={`fixed z-50 right-0 z-0 w-1/2 h-4/5 top-[${
            viewportWidth > 992 ? "110px" : "75px"
          }]`}
        >
          <GridPattern color={"deep-blue"} cover={setCover(theme)} />
        </div>
        <div className="flex flex-col items-center mx-[30px] relative md:items-start">
          <div className="mt-[155px] items-center flex flex-col max-w-[580px] mb-[60px] md:items-start">
            <BackButton label={"Retour"} style="light"></BackButton>
            <div>
              <h1
                className={
                  "flex justify-center overflow-hidden text-3xl font-sans text-white mt-8 text-center md:text-left leading-tight mb-8 md:text-4xl mb-16 "
                }
              >
                {themeBeautyfier(theme)}
              </h1>
            </div>
            {/* {router.asPath !== "/nos-etudes/BarometresInstitutionnels" ||
              router.asPath !==
                ("/nos-etudes/EtudeCiblesClientele" ? ( */}
            {router.asPath !== "/nos-etudes/BarometresInstitutionnels" && (
              <PrimaryButton
                type="primary"
                label={
                  router.asPath === "/nos-etudes/EtudeCiblesClientele"
                    ? `Objectifs des études`
                    : `Méthodologie déployée`
                }
                href={`/nos-etudes/${studies.data[0].attributes.theme}/methode`}
              ></PrimaryButton>
            )}
            {/* ) : null)} */}
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: { delay: 0.2, duration: 1 },
            }}
          >
            <div className="relative flex flex-wrap justify-center flex-row gap-8 md:flex-nowrap">
              <div>
                {studies.data.slice(0, 2).map((study, index) => (
                  <StudyPreview
                    router={router.asPath}
                    title={study.attributes.title}
                    description={study.attributes.description}
                    key={study.attributes.title + index}
                    slug={study.attributes.slug}
                    theme={study.attributes.theme}
                    cover={study.attributes.cover.data.attributes.url}
                    introduction={study.attributes.introduction}
                  />
                ))}
              </div>
              <div className="mt-[-30px] md:mt-[280px]">
                {studies.data.slice(2, 5).map((study, index) => (
                  <StudyPreview
                    router={router.asPath}
                    title={study.attributes.title}
                    description={study.attributes.description}
                    key={study.attributes.title + index}
                    slug={study.attributes.slug}
                    theme={study.attributes.theme}
                    cover={study.attributes.cover.data.attributes.url}
                    introduction={study.attributes.introduction}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </ReactScrollWheelHandler>
  );
}

// This function gets called at build time
export async function getStaticPaths() {
  // Call an external API endpoint to get studies
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_DB_HOST}/api/studies?populate[blocks][populate]=*&populate[cover]=*`
  );
  const studies = await res.json();

  // Get the paths we want to pre-render based on posts
  const paths = studies.data.map((study) => ({
    params: { etudes: study.attributes.theme },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
}

// This also gets called at build time
export async function getStaticProps({ params }) {
  // params contains the study `theme`.
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_DB_HOST}/api/studies?populate[blocks][populate]=*&populate[cover]=*&filters[theme][$eq]=${params.etudes}&sort[1]=updatedAt%3Adesc`
  );
  const studies = await res.json();

  // Pass post data to the page via props
  return { props: { studies } };
}
