import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import ContentPanel from "./ContentPanel.js";
import CoverPanel from "./CoverPanel.js";
import HomeSplitPanelControl from "./ui/HomeSplitPanelControl";
import GridPattern from "./ui/GridPattern";
import AnimatedH1 from "./ui/AnimatedH1Home";
import PrimaryButton from "./ui/PrimaryButton.js";
import SecondaryButton from "./ui/SecondaryButton.js";

export default function HomeSections({
  studies,
  setItemPosition,
  itemPosition,
  itemHeight,
  studiesNumber,
  handleSplitPanelControlClick,
  panelScrollIndex,
  height,
  homeIntro,
}) {
  useEffect(() => {
    setItemPosition(0);
  }, [setItemPosition]);
  console.log(panelScrollIndex);
  return (
    <section className="flex relative w-screen h-[calc(100vh-110px)]">
      <HomeSplitPanelControl
        studiesNumber={studiesNumber}
        panelScrollIndex={panelScrollIndex}
        itemPosition={itemPosition}
        height={height}
        handleSplitPanelControlClick={handleSplitPanelControlClick}
      />

      {/* LEFT PANEL */}
      <motion.div
        className="w-1/2 "
        animate={
          panelScrollIndex >= 0 && panelScrollIndex <= 6
            ? { y: itemPosition }
            : { y: null }
        }
      >
        <div
          className={`bg-panel1 bg-left background-size-full font-sans flex items-center flex-col h-[calc(100vh-110px)]`}
        >
          <GridPattern color={"deep-blue"} />
          <div className="absolute h-1/2 flex flex-col justify-center px-[5vmax]">
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
          href={
            "/nos-etudes/EtudesReferencementThematique/per-quelle-place-demain-dans-l-epargne-des-francais"
          }
          index={studies.data[0].id}
          primaryButtonLabel={studies.data[0].attributes.primaryButtonLabel}
          secondaryButtonLabel={studies.data[0].attributes.secondaryButtonLabel}
          itemsCount={7}
          itemPosition={itemPosition}
          slug={studies.data[0].attributes.slug}
          description={studies.data[0].attributes.description}
        />
        <CoverPanel
          itemHeight={itemHeight}
          index={1}
          itemsCount={7}
          cover={
            homeIntro.data.attributes.slide1Cover.data.attributes.formats.large
              .url
          }
          itemPosition={itemPosition}
        />
        <ContentPanel
          itemHeight={itemHeight}
          theme={homeIntro.data.attributes.slide2Theme.theme}
          title={homeIntro.data.attributes.slide2Title}
          description={homeIntro.data.attributes.slide2Description}
          link={homeIntro.data.attributes.slide2Link}
          href={"/nos-etudes/EtudesNotorietePositionnement/methode"}
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
          theme={homeIntro.data.attributes.slide4Theme.theme}
          title={homeIntro.data.attributes.slide4Title}
          description={homeIntro.data.attributes.slide4Description}
          link={homeIntro.data.attributes.slide4Link}
          href={
            "nos-etudes/BarometresInstitutionnels/le-dernier-climat-des-affaires-des-sgp"
          }
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
        className="w-1/2"
        style={{ marginTop: "calc(-600vh + 660px)" }}
        initial={{ y: "-600vh + 660px" }}
        animate={
          panelScrollIndex > 0 && panelScrollIndex < 6 && { y: -itemPosition }
        }
      >
        <ContentPanel
          itemHeight={itemHeight}
          theme={homeIntro.data.attributes.slide5Theme.theme}
          title={homeIntro.data.attributes.slide5Title}
          description={homeIntro.data.attributes.slide5Description}
          link={homeIntro.data.attributes.slide4Link}
          href={"/nos-etudes/EtudesNotorietePositionnement/methode"}
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
          theme={homeIntro.data.attributes.slide3Theme.theme}
          title={homeIntro.data.attributes.slide3Title}
          description={homeIntro.data.attributes.slide3Description}
          link={homeIntro.data.attributes.slide3Link}
          href={"/nos-etudes/EtudeCiblesClientele"}
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
          theme={homeIntro.data.attributes.slide1Theme.theme}
          title={homeIntro.data.attributes.slide1Title}
          description={homeIntro.data.attributes.slide1Description}
          link={homeIntro.data.attributes.slide1Link}
          href={"/nos-etudes/EtudesNotorietePositionnement/methode"}
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
            "https://res.cloudinary.com/smartagence/image/upload/v1645540632/large_insight_clock_f04988a9e3.jpg"
          }
          itemPosition={itemPosition}
        />
        <div
          className={`relative bg-panel1 bg-right background-size-full flex flex-col justify-end bg-deep-blue flex h-[calc(100vh-110px)]`}
        >
          <GridPattern color={"deep-blue"} />

          <div className="absolute bg-deep-blue bg-opacity-85 h-1/2 flex flex-col justify-center pr-[7vmax] pl-[7vmax]">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: { delay: 1, duration: 1 },
              }}
            >
              <h2 className="text-white font-serif text-md mb-[1vmax] md:text-xl">
                Nos objectifs
              </h2>

              <ul className="text-white font-serif list-disc mb-[2vmax] ml-[17px] leading-[2vmax]">
                <li className="text-xs md:text-base">
                  {homeIntro.data.attributes.goal1}
                </li>
                <li className="text-xs md:text-base">
                  {homeIntro.data.attributes.goal2}
                </li>
                <li className="text-xs md:text-base">
                  {homeIntro.data.attributes.goal3}
                </li>
                <li className="text-xs md:text-base">
                  {homeIntro.data.attributes.goal4}
                </li>
              </ul>
              <div className="flex">
                <PrimaryButton label={"Nous découvrir"} href={"/a-propos"} />
                <div className="ml-[15px]">
                  <SecondaryButton
                    label={"Nos études"}
                    style={"light"}
                    href={"/nos-etudes"}
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
