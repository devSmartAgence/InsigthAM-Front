import { motion } from "framer-motion";
import Image from "next/image";
import ContentPanel from "./ContentPanel.js";
import CoverPanel from "./CoverPanel.js";
import HomeSplitPanelControl from "./ui/HomeSplitPanelControl";
import GridPattern from "./ui/GridPattern";
import AnimatedH1 from "./ui/AnimatedH1Home";
import PrimaryButton from "./ui/PrimaryButton.js";
import SecondaryButton from "./ui/SecondaryButton.js";
import useDeviceSize from "./hooks/useDevicesize.js";

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
  const [viewportWidth, viewportHeight] = useDeviceSize();
  if (viewportWidth > 992) {
    return (
      <section
        className={`flex flex-col relative w-screen h-[calc(100vh-${
          viewportWidth > 992 ? "110px" : "75px"
        })] lg:flex-row`}
      >
        <HomeSplitPanelControl
          studiesNumber={studiesNumber}
          panelScrollIndex={panelScrollIndex}
          itemPosition={itemPosition}
          height={height}
          handleSplitPanelControlClick={handleSplitPanelControlClick}
        />

        {/* LEFT PANEL */}
        <motion.div
          className="w-full lg:w-1/2"
          animate={
            panelScrollIndex >= 0 && panelScrollIndex <= 6
              ? {
                  y: itemPosition,
                  transition: { duration: 0.5, ease: "easeOut" },
                }
              : { y: null }
          }
        >
          <div
            className={`bg-panel1 bg-left background-size-full font-sans flex items-center flex-col h-[calc(100vh-${
              viewportWidth > 992 ? "110px" : "75px"
            })]`}
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
            hrefFirstButton={
              "/nos-etudes/EtudesReferencementThematique/les-epargnants-et-l-investissement-responsable/#form"
            }
            hrefSecondButton={
              "/nos-etudes/EtudesReferencementThematique/les-epargnants-et-l-investissement-responsable"
            }
            index={studies.data[0].id}
            primaryButtonLabel={studies.data[0].attributes.primaryButtonLabel}
            secondaryButtonLabel={
              studies.data[0].attributes.secondaryButtonLabel
            }
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
              homeIntro.data.attributes.slide1Cover.data.attributes.formats
                .large.url
            }
            itemPosition={itemPosition}
          />
          <ContentPanel
            itemHeight={itemHeight}
            theme={homeIntro.data.attributes.slide2Theme.theme}
            title={homeIntro.data.attributes.slide2Title}
            description={homeIntro.data.attributes.slide2Description}
            link={homeIntro.data.attributes.slide2Link}
            linkLink={`/nos-etudes/${homeIntro.data.attributes.slide2Theme.theme}/methode`}
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
              homeIntro.data.attributes.slide3Cover.data.attributes.formats
                .large.url
            }
            itemPosition={itemPosition}
          />
          <ContentPanel
            itemHeight={itemHeight}
            theme={homeIntro.data.attributes.slide4Theme.theme}
            title={homeIntro.data.attributes.slide4Title}
            description={homeIntro.data.attributes.slide4Description}
            link={homeIntro.data.attributes.slide4Link}
            hrefFirstButton={`/nos-etudes/${homeIntro.data.attributes.slide4Theme.theme}`}
            hrefSecondButton={`/nos-etudes/${homeIntro.data.attributes.slide4Theme.theme}/les-societes-de-gestion-vues-par-les-conseillers-en-gestion-de-patrimoine`}
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
              homeIntro.data.attributes.slide5Cover.data.attributes.formats
                .large.url
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
            panelScrollIndex > 0 &&
            panelScrollIndex < 6 && {
              y: -itemPosition,
              transition: { duration: 0.5, ease: "easeOut" },
            }
          }
        >
          <ContentPanel
            itemHeight={itemHeight}
            theme={homeIntro.data.attributes.slide5Theme.theme}
            title={homeIntro.data.attributes.slide5Title}
            description={homeIntro.data.attributes.slide5Description}
            link={homeIntro.data.attributes.slide5Link}
            linkLink={`/nos-etudes/${homeIntro.data.attributes.slide5Theme.theme}/methode`}
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
              homeIntro.data.attributes.slide4Cover.data.attributes.formats
                .large.url
            }
            itemPosition={itemPosition}
          />
          <ContentPanel
            itemHeight={itemHeight}
            theme={homeIntro.data.attributes.slide3Theme.theme}
            title={homeIntro.data.attributes.slide3Title}
            description={homeIntro.data.attributes.slide3Description}
            hrefFirstButton={`/nos-etudes/${homeIntro.data.attributes.slide3Theme.theme}`}
            hrefSecondButton={`/nos-etudes/${homeIntro.data.attributes.slide3Theme.theme}/methode`}
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
              homeIntro.data.attributes.slide2Cover.data.attributes.formats
                .large.url
            }
            itemPosition={itemPosition}
          />
          <ContentPanel
            itemHeight={itemHeight}
            theme={homeIntro.data.attributes.slide1Theme.theme}
            title={homeIntro.data.attributes.slide1Title}
            description={homeIntro.data.attributes.slide1Description}
            link={homeIntro.data.attributes.slide1Link}
            linkLink={`/nos-etudes/${homeIntro.data.attributes.slide1Theme.theme}/methode`}
            hrefFirstButton={`/nos-etudes/${homeIntro.data.attributes.slide1Theme.theme}`}
            href={`/nos-etudes/${homeIntro.data.attributes.slide1Theme.theme}/methode`}
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
            className={`relative bg-panel1 bg-right background-size-full flex flex-col justify-end bg-deep-blue flex h-[calc(100vh-${
              viewportWidth > 992 ? "110px" : "75px"
            })]`}
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

    /////////////////////// RESPONSIVE //////////////////////////////////////////////////////////////////////////////
  } else {
    return (
      <section className="flex flex-col">
        <div
          className={`relative flex flex-col h-[calc(100vh-${
            viewportWidth > 992 ? "110px" : "75px"
          })] bg-panel1 bg-top bg-cover w-full`}
        >
          {/* /////////////////////// SLIDE 1 TOP ////////////////////////////////////////////////////////////////////////////// */}
          <div className={`font-sans flex flex-col h-2/5 w-full items-center`}>
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
          {/* /////////////////////// SLIDE 1 BOTTOM ////////////////////////////////////////////////////////////////////////////// */}

          <div className={`relative h-3/5 w-full`}>
            <GridPattern color={"deep-blue"} />

            <div className="absolute bg-deep-blue bg-opacity-85 flex h-full w-full items-center pr-[7vmax] pl-[7vmax]">
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
                  <li className="text-xs mb-4">
                    {homeIntro.data.attributes.goal1}
                  </li>
                  <li className="text-xs mb-4">
                    {homeIntro.data.attributes.goal2}
                  </li>
                  <li className="text-xs mb-4">
                    {homeIntro.data.attributes.goal3}
                  </li>
                  <li className="text-xs ">
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
        </div>
        <div
          className={`relative flex flex-col h-[calc(100vh-${
            viewportWidth > 992 ? "110px" : "75px"
          })] w-full`}
        >
          {/* /////////////////////// SLIDE 2 TOP ////////////////////////////////////////////////////////////////////////////// */}
          <div className={`relative h-1/5 w-full`}>
            <Image
              src="https://res.cloudinary.com/smartagence/image/upload/v1645540632/large_insight_clock_f04988a9e3.jpg"
              layout="fill"
              objectFit="cover"
            ></Image>
          </div>

          {/* /////////////////////// SLIDE 2 BOTTOM ////////////////////////////////////////////////////////////////////////////// */}

          <div className={`font-sans flex flex-col h-4/5 w-full items-center`}>
            <ContentPanel
              viewportWidth={viewportWidth}
              itemHeight={itemHeight}
              heading={studies.data[0].attributes.heading}
              theme={studies.data[0].attributes.theme}
              title={studies.data[0].attributes.title}
              hrefFirstButton={
                "/nos-etudes/EtudesReferencementThematique/les-epargnants-et-l-investissement-responsable/#form"
              }
              hrefSecondButton={
                "/nos-etudes/EtudesReferencementThematique/les-epargnants-et-l-investissement-responsable"
              }
              index={studies.data[0].id}
              primaryButtonLabel={studies.data[0].attributes.primaryButtonLabel}
              secondaryButtonLabel={
                studies.data[0].attributes.secondaryButtonLabel
              }
              itemsCount={7}
              itemPosition={itemPosition}
              slug={studies.data[0].attributes.slug}
              description={studies.data[0].attributes.description}
            />
          </div>
        </div>

        <div
          className={`relative flex flex-col h-[calc(100vh-${
            viewportWidth > 992 ? "110px" : "75px"
          })] w-full`}
        >
          {/* /////////////////////// SLIDE 3 TOP ////////////////////////////////////////////////////////////////////////////// */}
          <div className={`relative h-1/5 w-full`}>
            <Image
              src={
                homeIntro.data.attributes.slide1Cover.data.attributes.formats
                  .large.url
              }
              layout="fill"
              objectFit="cover"
            ></Image>
          </div>

          {/* /////////////////////// SLIDE 3 BOTTOM ////////////////////////////////////////////////////////////////////////////// */}

          <div className={`font-sans flex flex-col h-4/5 w-full items-center`}>
            <ContentPanel
              viewportWidth={viewportWidth}
              itemHeight={itemHeight}
              theme={homeIntro.data.attributes.slide1Theme.theme}
              title={homeIntro.data.attributes.slide1Title}
              description={homeIntro.data.attributes.slide1Description}
              link={homeIntro.data.attributes.slide1Link}
              linkLink={`/nos-etudes/${homeIntro.data.attributes.slide1Theme.theme}/methode`}
              hrefFirstButton={`/nos-etudes/${homeIntro.data.attributes.slide1Theme.theme}`}
              href={`/nos-etudes/${homeIntro.data.attributes.slide1Theme.theme}/methode`}
              index={1}
              primaryButtonLabel={homeIntro.data.attributes.slide1FirstButton}
              secondaryButtonLabel={
                homeIntro.data.attributes.slide1SecondButton
              }
              itemsCount={7}
              itemPosition={itemPosition}
              // slug={study.attributes.slug}
            />
          </div>
        </div>
        <div
          className={`relative flex flex-col h-[calc(100vh-${
            viewportWidth > 992 ? "110px" : "75px"
          })] w-full`}
        >
          {/* /////////////////////// SLIDE 4 TOP ////////////////////////////////////////////////////////////////////////////// */}
          <div className={`relative h-1/5 w-full`}>
            <Image
              src={
                homeIntro.data.attributes.slide2Cover.data.attributes.formats
                  .large.url
              }
              layout="fill"
              objectFit="cover"
            ></Image>
          </div>

          {/* /////////////////////// SLIDE 4 BOTTOM ////////////////////////////////////////////////////////////////////////////// */}

          <div className={`font-sans flex flex-col h-4/5 w-full items-center`}>
            <ContentPanel
              viewportWidth={viewportWidth}
              itemHeight={itemHeight}
              theme={homeIntro.data.attributes.slide2Theme.theme}
              title={homeIntro.data.attributes.slide2Title}
              description={homeIntro.data.attributes.slide2Description}
              link={homeIntro.data.attributes.slide2Link}
              linkLink={`/nos-etudes/${homeIntro.data.attributes.slide2Theme.theme}/methode`}
              index={1}
              primaryButtonLabel={homeIntro.data.attributes.slide2FirstButton}
              secondaryButtonLabel={
                homeIntro.data.attributes.slide2SecondButton
              }
              itemsCount={7}
              itemPosition={itemPosition}
              // slug={study.attributes.slug}
            />
          </div>
        </div>
        <div
          className={`relative flex flex-col h-[calc(100vh-${
            viewportWidth > 992 ? "110px" : "75px"
          })] w-full`}
        >
          {/* /////////////////////// SLIDE 5 TOP ////////////////////////////////////////////////////////////////////////////// */}
          <div className={`relative h-1/5 w-full`}>
            <Image
              src={
                homeIntro.data.attributes.slide3Cover.data.attributes.formats
                  .large.url
              }
              layout="fill"
              objectFit="cover"
            ></Image>
          </div>

          {/* /////////////////////// SLIDE 5 BOTTOM ////////////////////////////////////////////////////////////////////////////// */}

          <div className={`font-sans flex flex-col h-4/5 w-full items-center`}>
            <ContentPanel
              viewportWidth={viewportWidth}
              itemHeight={itemHeight}
              theme={homeIntro.data.attributes.slide3Theme.theme}
              title={homeIntro.data.attributes.slide3Title}
              description={homeIntro.data.attributes.slide3Description}
              hrefFirstButton={`/nos-etudes/${homeIntro.data.attributes.slide3Theme.theme}`}
              hrefSecondButton={`/nos-etudes/${homeIntro.data.attributes.slide3Theme.theme}/methode`}
              index={1}
              primaryButtonLabel={homeIntro.data.attributes.slide3FirstButton}
              secondaryButtonLabel={
                homeIntro.data.attributes.slide3SecondButton
              }
              itemsCount={7}
              itemPosition={itemPosition}
              // slug={study.attributes.slug}
            />
          </div>
        </div>
        <div
          className={`relative flex flex-col h-[calc(100vh-${
            viewportWidth > 992 ? "110px" : "75px"
          })] w-full`}
        >
          {/* /////////////////////// SLIDE 6 TOP ////////////////////////////////////////////////////////////////////////////// */}
          <div className={`relative h-1/5 w-full`}>
            <Image
              src={
                homeIntro.data.attributes.slide4Cover.data.attributes.formats
                  .large.url
              }
              layout="fill"
              objectFit="cover"
            ></Image>
          </div>

          {/* /////////////////////// SLIDE 6 BOTTOM ////////////////////////////////////////////////////////////////////////////// */}

          <div className={`font-sans flex flex-col h-4/5 w-full items-center`}>
            <ContentPanel
              viewportWidth={viewportWidth}
              itemHeight={itemHeight}
              theme={homeIntro.data.attributes.slide4Theme.theme}
              title={homeIntro.data.attributes.slide4Title}
              description={homeIntro.data.attributes.slide4Description}
              link={homeIntro.data.attributes.slide4Link}
              hrefFirstButton={`/nos-etudes/${homeIntro.data.attributes.slide4Theme.theme}`}
              hrefSecondButton={`/nos-etudes/${homeIntro.data.attributes.slide4Theme.theme}/les-societes-de-gestion-vues-par-les-conseillers-en-gestion-de-patrimoine`}
              index={1}
              primaryButtonLabel={homeIntro.data.attributes.slide4FirstButton}
              secondaryButtonLabel={
                homeIntro.data.attributes.slide4SecondButton
              }
              itemsCount={7}
              itemPosition={itemPosition}
              // slug={study.attributes.slug}
            />
          </div>
        </div>
        <div
          className={`relative flex flex-col h-[calc(100vh-${
            viewportWidth > 992 ? "110px" : "75px"
          })] w-full`}
        >
          {/* /////////////////////// SLIDE 7 TOP ////////////////////////////////////////////////////////////////////////////// */}
          <div className={`relative h-1/5 w-full`}>
            <Image
              src={
                homeIntro.data.attributes.slide5Cover.data.attributes.formats
                  .large.url
              }
              layout="fill"
              objectFit="cover"
            ></Image>
          </div>

          {/* /////////////////////// SLIDE 7 BOTTOM ////////////////////////////////////////////////////////////////////////////// */}

          <div className={`font-sans flex flex-col h-4/5 w-full items-center`}>
            <ContentPanel
              viewportWidth={viewportWidth}
              itemHeight={itemHeight}
              theme={homeIntro.data.attributes.slide5Theme.theme}
              title={homeIntro.data.attributes.slide5Title}
              description={homeIntro.data.attributes.slide5Description}
              link={homeIntro.data.attributes.slide5Link}
              linkLink={`/nos-etudes/${homeIntro.data.attributes.slide5Theme.theme}/methode`}
              index={1}
              primaryButtonLabel={homeIntro.data.attributes.slide5FirstButton}
              secondaryButtonLabel={
                homeIntro.data.attributes.slide5SecondButton
              }
              itemsCount={7}
              itemPosition={itemPosition}
              // slug={study.attributes.slug}
            />
          </div>
        </div>
      </section>
    );
  }
}
