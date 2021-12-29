import { motion } from "framer-motion";
import ContentPanel from "./ContentPanel";
import CoverPanel from "./CoverPanel";
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

export default function HomeSection({ homeIntro, studies, translateY }) {
  return (
    <section className="flex w-screen h-[calc(100vh-110px)] ">
      <div className="w-1/2 ">
        {/* LOOP ON STUDIES */}
        {studies.data.map((study, index) => (
          <ContentPanel
            key={index + "content"}
            heading={study.attributes.heading}
            theme={study.attributes.theme}
            title={study.attributes.title}
            description={study.attributes.description}
            index={study.id}
            itemsCount={studies.data.length}
            translateY={translateY}
          />
        ))}
      </div>
      <div className="w-1/2 h-[calc(100vh-110px)]">
        {/* LOOP ON STUDIES */}
        {studies.data.map((study, index) => (
          <CoverPanel
            key={index + "cover"}
            index={study.id}
            itemsCount={studies.data.length}
            cover={study.attributes.cover.data.attributes.formats.large.url}
            translateY={translateY}
          />
        ))}
      </div>
    </section>
  );
}
