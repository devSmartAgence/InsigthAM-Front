import { motion } from "framer-motion";
import ContentPanel from "./ContentPanel";
import CoverPanel from "./CoverPanel";
import ContactForm from "./ContactForm";
import HomeSplitPanelControl from "./ui/HomeSplitPanelControl";
// FETCH DATAS
export async function getStaticProps() {
  // get home-intro content from Strapi
  const resHome = await fetch(
    "http://localhost:1337/api/home-introduction?populate=*"
  );
  const homeIntro = await resHome.json();

  // get studies from Strapi
  const resStudies = await fetch(
    "http://localhost:1337/api/studies?populate=*"
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
          />
        ))}
      </div>
      <div className="w-1/2 h-[calc(100vh-110px)]">
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
