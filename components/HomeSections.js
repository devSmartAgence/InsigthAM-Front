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
  homeIntro,
}) {
  return (
    <section className="flex w-screen h-[calc(100vh-110px)]">
      <HomeSplitPanelControl
        studiesNumber={studiesNumber}
        panelScrollIndex={panelScrollIndex}
        itemPosition={itemPosition}
        height={height}
        handleSplitPanelControlClick={handleSplitPanelControlClick}
      />

      {/* LEFT PANEL */}
      <motion.div className="w-1/2 " animate={{ y: itemPosition }}>
        <div
          className={`bg-panel1 bg-left background-size-full font-sans flex items-center flex-col h-[calc(100vh-110px)]`}
        >
          <GridPattern color={"deep-blue"} />
          <div className="absolute h-1/2 flex flex-col justify-center p-[5vmax]">
            <AnimatedH1
              title={homeIntro.data.attributes.title}
              className="uppercase text-white text-[4vmax] flex h-[6vmax] overflow-hidden"
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
              {homeIntro.data.attributes.descriptionWhite}
              <span className="text-pink">
                {homeIntro.data.attributes.descriptionPink}
              </span>
            </motion.p>
          </div>
        </div>
        <ContentPanel
          itemHeight={itemHeight}
          heading={studies.data[0].attributes.heading}
          theme={studies.data[0].attributes.theme}
          title={studies.data[0].attributes.title}
          link={`/nos-etudes/${studies.data[0].attributes.theme}/${studies.data[0].attributes.slug}`}
          index={studies.data[0].id}
          primaryButtonLabel={studies.data[0].attributes.primaryButtonLabel}
          secondaryButtonLabel={studies.data[0].attributes.secondaryButtonLabel}
          itemsCount={7}
          itemPosition={itemPosition}
          slug={studies.data[0].attributes.slug}
        />
        <CoverPanel
          itemHeight={itemHeight}
          index={1}
          itemsCount={7}
          cover={
            homeIntro.data.attributes.slide2Cover.data.attributes.formats.large
              .url
          }
          itemPosition={itemPosition}
        />
        <ContentPanel
          itemHeight={itemHeight}
          theme={homeIntro.data.attributes.slide1Theme.themeList}
          title={homeIntro.data.attributes.slide2Title}
          description={homeIntro.data.attributes.slide2Description}
          link={homeIntro.data.attributes.slide2Link}
          index={1}
          primaryButtonLabel={homeIntro.data.attributes.slide2FirstButton}
          secondaryButtonLabel={homeIntro.data.attributes.slide2SecondButton}
          itemsCount={7}
          itemPosition={itemPosition}
          // slug={study.attributes.slug}
        />
        <CoverPanel
          itemHeight={itemHeight}
          index={1}
          itemsCount={7}
          cover={
            homeIntro.data.attributes.slide3Cover.data.attributes.formats.large
              .url
          }
          itemPosition={itemPosition}
        />
        <ContentPanel
          itemHeight={itemHeight}
          theme={homeIntro.data.attributes.slide4Theme.themeList}
          title={homeIntro.data.attributes.slide4Title}
          description={homeIntro.data.attributes.slide4Description}
          link={homeIntro.data.attributes.slide4Link}
          index={1}
          primaryButtonLabel={homeIntro.data.attributes.slide4FirstButton}
          secondaryButtonLabel={homeIntro.data.attributes.slide4SecondButton}
          itemsCount={7}
          itemPosition={itemPosition}
          // slug={study.attributes.slug}
        />
        <CoverPanel
          itemHeight={itemHeight}
          index={1}
          itemsCount={7}
          cover={
            homeIntro.data.attributes.slide5Cover.data.attributes.formats.large
              .url
          }
          itemPosition={itemPosition}
        />
      </motion.div>

      {/* RIGHT PANEL */}
      <motion.div
        className="w-1/2 transform translate-y-[calc(-600vh+660px)]"
        animate={{ y: -itemPosition, transition: { duration: 1 } }}
      >
        <ContentPanel
          itemHeight={itemHeight}
          theme={homeIntro.data.attributes.slide5Theme.themeList}
          title={homeIntro.data.attributes.slide5Title}
          description={homeIntro.data.attributes.slide5Description}
          link={homeIntro.data.attributes.slide4Link}
          index={1}
          primaryButtonLabel={homeIntro.data.attributes.slide5FirstButton}
          secondaryButtonLabel={homeIntro.data.attributes.slide5SecondButton}
          itemsCount={7}
          itemPosition={itemPosition}
          // slug={study.attributes.slug}
        />
        <CoverPanel
          itemHeight={itemHeight}
          index={1}
          itemsCount={7}
          cover={
            homeIntro.data.attributes.slide4Cover.data.attributes.formats.large
              .url
          }
          itemPosition={itemPosition}
        />
        <ContentPanel
          itemHeight={itemHeight}
          theme={homeIntro.data.attributes.slide3Theme.themeList}
          title={homeIntro.data.attributes.slide3Title}
          description={homeIntro.data.attributes.slide3Description}
          link={homeIntro.data.attributes.slide3Link}
          index={1}
          primaryButtonLabel={homeIntro.data.attributes.slide3FirstButton}
          secondaryButtonLabel={homeIntro.data.attributes.slide3SecondButton}
          itemsCount={7}
          itemPosition={itemPosition}
          // slug={study.attributes.slug}
        />
        <CoverPanel
          itemHeight={itemHeight}
          index={1}
          itemsCount={7}
          cover={
            homeIntro.data.attributes.slide2Cover.data.attributes.formats.large
              .url
          }
          itemPosition={itemPosition}
        />
        <ContentPanel
          itemHeight={itemHeight}
          theme={homeIntro.data.attributes.slide1Theme.themeList}
          title={homeIntro.data.attributes.slide1Title}
          description={homeIntro.data.attributes.slide1Description}
          link={homeIntro.data.attributes.slide1Link}
          index={1}
          primaryButtonLabel={homeIntro.data.attributes.slide1FirstButton}
          secondaryButtonLabel={homeIntro.data.attributes.slide1SecondButton}
          itemsCount={7}
          itemPosition={itemPosition}
          // slug={study.attributes.slug}
        />
        <CoverPanel
          itemHeight={itemHeight}
          index={1}
          itemsCount={7}
          cover={
            studies.data[0].attributes.cover.data.attributes.formats.large.url
          }
          itemPosition={itemPosition}
        />
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
                <li>{homeIntro.data.attributes.goal1}</li>
                <li>{homeIntro.data.attributes.goal2}</li>
                <li>{homeIntro.data.attributes.goal3}</li>
                <li>{homeIntro.data.attributes.goal4}</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
