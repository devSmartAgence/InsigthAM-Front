import { motion } from "framer-motion";
import ContentPanel from "./ContentPanel";
import CoverPanel from "./CoverPanel";
import HomeSplitPanelControl from "./ui/HomeSplitPanelControl";
import GridPattern from "./ui/GridPattern";
// FETCH DATAS
export async function getStaticProps() {
  // get home-intro content from Strapi
  const resHome = await fetch(
    `${process.env.DB_HOST}/api/home-introduction?populate=*`
  );
  const homeIntro = await resHome.json();

  // get studies from Strapi
  const resStudies = await fetch(
    `${process.env.DB_HOST}/api/studies?populate=*`
  );
  const studies = await resStudies.json();

  return { props: { homeIntro, studies } };
}

export default function HomeSection({
  homeIntro,
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
            <h1 className="uppercase text-white text-[4vmax] ">Insight AM</h1>
            <div className="w-[3vmax] h-[0.5vmax] bg-pink mb-[2vmax] mt-[0.5vmax]"></div>
            <p className="font-serif text-white text-[2vmax] leading-normal tracking-wider	">
              Études de marché et stratégies marketing&nbsp;
              <span className="text-pink">
                pour les producteurs et intermédiaires en produits financiers.
              </span>
            </p>
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
                Revisiter le positionnement des gammes de produits à destination
                des épargnants,
              </li>
              <li>
                Valider les choix des producteurs et distributeurs dans le
                lancement de nouveaux produits.
              </li>
            </ul>
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
              cover={study.attributes.cover.data.attributes.formats.large.url}
              itemPosition={itemPosition}
            />
          ))}
      </div>
    </section>
  );
}
