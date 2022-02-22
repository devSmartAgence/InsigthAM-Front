import { useState } from "react";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import AnimatedH1Type from "../../../components/ui/AnimatedH1Type";
import PrimaryButton from "../../../components/ui/PrimaryButton";
import BackButton from "../../../components/ui/BackButton";
import StudyPreview from "../../../components/StudyPreview";
import GridPattern from "../../../components/ui/GridPattern";
import BreadCrumModule from "../../../components/ui/BreadcrumbModule";
import ReactScrollWheelHandler from "react-scroll-wheel-handler";
import { themeBeautyfier } from "../../../utils/themeBeautyfier";

export default function Etudes({ studies }) {
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
  return (
    <ReactScrollWheelHandler
      upHandler={(e) => handleScroll("Up")}
      downHandler={(e) => handleScroll("Down")}
    >
      <div className="flex flex-col items-center bg-deep-blue w-full">
        <BreadCrumModule
          modulePosition={modulePosition}
          style={"dark"}
          arrPath={arrPath}
        />

        <div className="fixed z-50 right-0 z-0 w-1/2 h-4/5 top-[110px]">
          <GridPattern
            color={"deep-blue"}
            cover={studies.data[0].attributes.cover.data.attributes.url}
          />
        </div>
        <div className="flex flex-col items-center mx-[30px] relative md:items-start">
          <div className="mt-[155px] items-center flex flex-col max-w-[580px] mb-[60px] md:items-start">
            <BackButton label={"Retour"} style="dark"></BackButton>

            <AnimatedH1Type
              title={themeBeautyfier(theme)}
              className={
                "text-white font-sans text-[40px] text-center mb-[15px] mt-[30px] md:text-left"
              }
            />

            <PrimaryButton
              type="primary"
              label={"Méthodologie déployée"}
              href={`/nos-etudes/${studies.data[0].attributes.theme}/methode`}
            ></PrimaryButton>
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
                    title={study.attributes.title}
                    description={study.attributes.description}
                    key={study.attributes.title + index}
                    slug={study.attributes.slug}
                    theme={study.attributes.theme}
                    cover={study.attributes.cover.data.attributes.url}
                  />
                ))}
              </div>
              <div className="mt-[-30px] md:mt-[280px]">
                {studies.data.slice(2, 4).map((study, index) => (
                  <StudyPreview
                    title={study.attributes.title}
                    key={study.attributes.title + index}
                    slug={study.attributes.slug}
                    theme={study.attributes.theme}
                    cover={study.attributes.cover.data.attributes.url}
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
    `${process.env.NEXT_PUBLIC_DB_HOST}/api/studies?populate[blocks][populate]=*&populate[cover]=*&filters[theme][$eq]=${params.etudes}`
  );
  const studies = await res.json();

  // Pass post data to the page via props
  return { props: { studies } };
}
