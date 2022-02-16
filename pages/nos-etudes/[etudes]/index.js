import { useState } from "react";
import Layout from "../../../components/Layout";
import Button from "../../../components/ui/Button";
import BackButton from "../../../components/ui/BackButton";
import StudyPreview from "../../../components/StudyPreview";
import GridPattern from "../../../components/ui/GridPattern";
import BreadCrumModule from "../../../components/ui/BreadcrumbModule";
import ReactScrollWheelHandler from "react-scroll-wheel-handler";
import { themeBeautyfier } from "../../../utils/themeBeautyfier";
import Link from "next/link";

export default function Etudes({ study }) {
  let theme = study.data[0].attributes.theme;

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
              <BackButton label={"Retour"} style="dark"></BackButton>

              <h1 className="text-white font-sans text-[40px] text-center mb-[15px] mt-[30px] md:text-left">
                {themeBeautyfier(theme)}
              </h1>
              <Link href="/" passHref>
                <Button type="primary" label={"Méthode déployée"}></Button>
              </Link>
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

// This function gets called at build time
export async function getStaticPaths() {
  // Call an external API endpoint to get posts
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
    process.env.NEXT_PUBLIC_DB_HOST +
      `/api/studies?filters[theme][$eq]=${params.etudes}`
  );
  const study = await res.json();

  // Pass post data to the page via props
  return { props: { study } };
}
