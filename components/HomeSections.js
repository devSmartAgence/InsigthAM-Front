import { motion } from "framer-motion";
import Button from "./ui/Button";
import ContentPreview from "./ContentPreview";
import Panel from "./Panel";
import GridPattern from "./ui/GridPattern";

export default function HomeSection({ translateY, homeIntro, studies }) {
  console.log("ICI =====>", homeIntro.data.attributes);
  console.log("Studies IN =====>", studies);

  return (
    // Loop on studies

    <section className="flex w-screen h-screen">
      {/* START LEFT PANELS */}
      <motion.div
        className="relative w-1/2"
        animate={{ y: translateY }}
        transition={{ ease: "anticipate", duration: 2 }}
      >
        {/* START - LEFT PANEL #1 */}
        <div
          className={`bg-panel1 bg-left background-size-full font-sans flex items-center flex-col h-[calc(100vh-110px)]`}
        >
          <GridPattern color={"deep-blue"} />
          <div className="z-10 h-1/2 flex flex-col justify-center p-[5vmax]">
            <h1 className="uppercase text-white text-[4vmax] ">
              {homeIntro.data.attributes.title}
            </h1>
            <div className="w-[3vmax] h-[0.5vmax] bg-pink mb-[2vmax] mt-[0.5vmax]"></div>
            <p className="font-serif text-white text-[2vmax] leading-normal tracking-wider	">
              {homeIntro.data.attributes.description}
            </p>
          </div>
        </div>
        {/* END - LEFT PANEL #1 */}

        {/* START - LEFT PANEL #2 */}
        <div className="bg-beige font-sans flex items-center flex-col h-[calc(100vh-110px)] justify-center">
          <GridPattern color={"white"} />
          <div className="z-20 pr-[7vmax] pl-[7vmax]">
            <ContentPreview
              title={"PER, quelle place demain dans l'épragne des Français ?"}
              tag={"Étude référencement thématique"}
              contentTitle={"Notre dernière publication"}
              excerpt={
                "Regards croisés entre les épargnants et leurs conseillers financiers."
              }
              link={"Détails de l'étude"}
            />
          </div>
        </div>
        {/* END - LEFT PANEL #2 */}

        {/* START - LEFT PANEL #3 */}
        <div
          className={`bg-white bg-panel3 bg-bottom flex items-center justify-center  h-[calc(100vh-110px)]`}
        >
          <GridPattern color={"deep-blue"} />
        </div>

        {/* END - LEFT PANEL #3 */}
      </motion.div>
      {/* END - LEFT PANELS */}

      {/* START - RIGHT PANELS */}
      <motion.div
        className="top-[calc(-200vh+110px)] relative w-1/2"
        animate={{ y: -translateY }}
        transition={{ ease: "anticipate", duration: 2 }}
      >
        {/* START - RIGHT PANEL #3 */}
        <div className="bg-beige flex h-full flex-col justify-center pr-[7vmax] pl-[7vmax]">
          <GridPattern color={"white"} />

          <p className="text-deep-blue font-sans text-[1.2vmax] mb-[1vmax] uppercase"></p>

          <ContentPreview
            tag={"Référencement thématique"}
            title={"Devenir référent sur un thème"}
            excerpt={
              "Vous ambitionnez de vous présenter à la communauté et à vos clients par une communication différenciante ; Vous souhaitez animer le débat sur une thématique sur laquelle vous aspirez à jouer un rôle majeur, être perçu comme un acteur-clé ou encore comme le précurseur d’une réflexion."
            }
            link={"Détails de l'étude"}
          />
        </div>
        {/* END - RIGHT PANEL #3 */}

        {/* START - RIGHT PANEL #2 */}
        <div
          className={`bg-white bg-panel2 bg-bottom flex items-center justify-center  h-[calc(100vh-110px)]`}
        >
          <GridPattern color={"deep-blue"} />
        </div>
        {/* END - RIGHT PANEL #2 */}

        {/* START - RIGHT PANEL #1 */}
        <div
          className={`bg-panel1 bg-right background-size-full flex flex-col justify-end bg-deep-blue flex h-[calc(100vh-110px)]`}
        >
          <GridPattern color={"deep-blue"} />

          <div className="bg-deep-blue bg-opacity-85 z-10 h-1/2 flex flex-col justify-center pr-[7vmax] pl-[7vmax]">
            <h2 className="text-white font-serif text-[1.2vmax] mb-[1vmax]">
              {homeIntro.data.attributes.subtitle}
            </h2>

            <ul className="text-white font-serif text-[1vmax] list-disc mb-[2vmax] ml-[17px] leading-[2vmax]">
              <li>{homeIntro.data.attributes.goal1}</li>
              <li>{homeIntro.data.attributes.goal2}</li>
              <li>{homeIntro.data.attributes.goal3}</li>
              <li>{homeIntro.data.attributes.goal4}</li>
            </ul>
          </div>
        </div>
        {/* END - RIGHT PANEL #1 */}
      </motion.div>
      {/* END - RIGHT PANELS */}
    </section>
  );
}
