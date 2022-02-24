import { motion } from "framer-motion";

import AnimatedH1Type from "../../components/ui/AnimatedH1Type.js";
import SummaryStudy from "../../components/ui/SummaryStudy.js";
import { themeBeautyfier } from "../../utils/themeBeautyfier.js";

export default function Thematiques({ resStudies }) {
  let arrThemes = resStudies.data.map((x) => x.attributes.theme);
  let singleThemes = [...new Set(arrThemes)];

  return (
    <div className="bg-deep-blue w-screen h-screen">
      <div className="flex flex-col w-screen items-center">
        <AnimatedH1Type
          title={"Nos études"}
          className={
            "flex overflow-hidden text-white text-[2vmax] mt-[calc(5vmax+110px)]"
          }
        />

        <div className="w-[2.3vmax] h-[0.3vmax] bg-pink mb-[2vmax] mt-[0.5vmax]"></div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { delay: 0.2, duration: 1 },
          }}
        >
          <p className="font-serif text-[1vmax] text-white mb-[1vmax] w-[60vw] text-center">
            Chapô lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
            pharetra semper metus fermentum lobortis. Pellentesque semper risus
            vel erat posuere.
          </p>
          <div className="flex flex-wrap justify-center bg-deep-blue max-w-[1050px] gap-y-4 gap-x-4 lg:gap-8">
            {singleThemes.map((theme, index) => (
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
