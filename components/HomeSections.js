import { motion } from "framer-motion";

import ContentPanel from "./ContentPanel.js";
import CoverPanel from "./CoverPanel.js";
import HomeSplitPanelControl from "./ui/HomeSplitPanelControl";
import GridPattern from "./ui/GridPattern";
import AnimatedH1 from "./ui/AnimatedH1Home";

export default function HomeSections({
  studies,
  itemPosition,
  itemHeight,
  studiesNumber,
  handleSplitPanelControlClick,
  panelScrollIndex,
  height,
}) {
  return (
    <section className="flex w-screen h-[calc(100vh-110px)] ">
      <HomeSplitPanelControl
        studiesNumber={studiesNumber}
        panelScrollIndex={panelScrollIndex}
        itemPosition={itemPosition}
        height={height}
        handleSplitPanelControlClick={handleSplitPanelControlClick}
      />

      <div className="w-1/2 ">
        <div
          className={`bg-panel1 bg-left background-size-full font-sans flex items-center flex-col h-[calc(100vh-110px)]`}
        >
          <GridPattern color={"deep-blue"} />
          <div className="absolute h-1/2 flex flex-col justify-center p-[5vmax]">
            <AnimatedH1
              title="Insight AM"
              className="uppercase text-white text-[4vmax] flex h-[6vmax] overflow-hidden "
            />
            <motion.div
              className="w-[3vmax] h-[0.5vmax] bg-pink mb-[2vmax] mt-[0.5vmax]"
              initial={{ y: -20, opacity: 0 }}
              animate={{
                y: 0,
                opacity: 1,
                transition: { delay: 0.3, duration: 0.5 },
              }}
            ></motion.div>
            <motion.p
              className="font-serif text-white text-[2vmax] leading-normal tracking-wider"
              initial={{ opacity: 0, y: -10 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: { duration: 1, delay: 0.4 },
              }}
            >
              Études de marché et stratégies marketing&nbsp;
              <span className="text-pink">
                pour les producteurs et intermédiaires en produits financiers.
              </span>
            </motion.p>
          </div>
        </div>

        {/* LOOP ON STUDIES */}
        {studies.data.map((study, index) => (
          <ContentPanel
            itemHeight={itemHeight}
            key={index + "content"}
            heading={study.attributes.heading}
            theme={study.attributes.theme}
            title={study.attributes.title}
            description={study.attributes.description}
            index={study.id}
            primaryButtonLabel={study.attributes.primaryButtonLabel}
            secondaryButtonLabel={study.attributes.secondaryButtonLabel}
            itemsCount={studies.data.length}
            itemPosition={itemPosition}
            slug={study.attributes.slug}
          />
        ))}
      </div>
      <div className="w-1/2">
        <div
          className={`bg-panel1 bg-right background-size-full flex flex-col justify-end bg-deep-blue flex h-[calc(100vh-110px)]`}
        >
          <GridPattern color={"deep-blue"} />

          <div className="absolute bg-deep-blue bg-opacity-85 h-[calc(50%-46px)] flex flex-col justify-center pr-[7vmax] pl-[7vmax]">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: { delay: 1, duration: 1 },
              }}
            >
              <h2 className="text-white font-serif text-[1.2vmax] mb-[1vmax]">
                Nos objectifs
              </h2>

              <ul className="text-white font-serif text-[1vmax] list-disc mb-[2vmax] ml-[17px] leading-[2vmax]">
                <li>
                  Accompagner les acteurs du marché dans la compréhension des
                  attentes des investisseurs et distributeurs,
                </li>
                <li>
                  Identifier les tendances et capter les signaux faibles de la
                  tiers distribution,
                </li>
                <li>
                  Revisiter le positionnement des gammes de produits à
                  destination des épargnants,
                </li>
                <li>
                  Valider les choix des producteurs et distributeurs dans le
                  lancement de nouveaux produits.
                </li>
              </ul>
            </motion.div>
          </div>
        </div>

        {/* LOOP ON STUDIES */}
        {studies.data
          .slice(0)
          .reverse()
          .map((study, index) => (
            <CoverPanel
              itemHeight={itemHeight}
              key={index + "cover"}
              index={study.id}
              itemsCount={studies.data.length}
              cover={study.attributes.cover.data.attributes.url}
              itemPosition={itemPosition}
            />
          ))}
      </div>
    </section>
  );
}
