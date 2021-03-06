import { motion } from "framer-motion";

import SummaryStudy from "../../components/ui/SummaryStudy.js";
import { themeBeautyfier } from "../../utils/themeBeautyfier.js";
import useDeviceSize from "../../components/hooks/useDevicesize.js";
export default function Thematiques({ resStudies }) {
  let arrThemes = resStudies.data.map((x) => x.attributes.theme);
  let singleThemes = [...new Set(arrThemes)];
  const [viewportWidth, viewportHeight] = useDeviceSize();
  return (
    <div className="bg-deep-blue w-screen">
      <div className="flex z-10 justify-center flex-col w-screen items-center pt-36 md:pt-48">
        <h1
          className={
            "flex justify-center overflow-hidden text-3xl font-sans text-white text-center leading-tight md:text-4xl md:mb-6 mb-6 "
          }
        >
          Nos études
        </h1>

        <div className="w-[2.3vmax] h-[0.3vmax] bg-pink mb-[2vmax] mt-[0.5vmax]"></div>
        <motion.div
          className="flex flex-col items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { delay: 0.2, duration: 1 },
          }}
        >
          <p className="font-serif leading-7 mb-[5%] text-white text-center w-[60vw]">
            La collection de nos publications disponibles et le détail de nos
            savoir-faire
          </p>
          <div className="flex flex-wrap justify-center bg-deep-blue max-w-[1050px] gap-y-4 gap-x-4 lg:gap-8">
            {singleThemes.reverse().map((theme, index) => (
              <SummaryStudy
                key={theme + index}
                title={themeBeautyfier(theme)}
                theme={theme}
              />
            ))}
            <SummaryStudy
              title={themeBeautyfier("EtudesNotorietePositionnement")}
              theme={"EtudesNotorietePositionnement"}
            />
            <SummaryStudy
              title={themeBeautyfier("EtudesTestingProduit")}
              theme={"EtudesTestingProduit"}
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const studies = await fetch(`${process.env.NEXT_PUBLIC_DB_HOST}/api/studies`);
  const resStudies = await studies.json();

  return {
    props: {
      resStudies,
    },
  };
}
